# 什么是symbol
  js规定对象的key只能是string或symbol,区别在于string类型的key可以重复，symbol类型的key是唯一的；symbol的本质是唯一的标识，每次创建一个symbol，它所代表的值都不可能重复，该值内部实现可以视为一段数字，所以symbol只有一个意义：用于必须使用唯一的值的场景
# 什么场景使用
  - 对象的key,防止命名冲突
  - 定义枚举
  - 存储元数据【for---in for--of Object.hasOwnProperty()不能识别symbol】
# symbol如何实现的
```js
(function() {
    var root = this;

    var generateName = (function(){
        var postfix = 0;
        return function(descString){
            postfix++;
            return '@@' + descString + '_' + postfix
        }
    })()

    var SymbolPolyfill = function Symbol(description) {

        if (this instanceof SymbolPolyfill) throw new TypeError('Symbol is not a constructor');

        var descString = description === undefined ? undefined : String(description)

        var symbol = Object.create({
            toString: function() {
                return this.__Name__;
            },
            valueOf: function() {
                return this;
            }
        })

        Object.defineProperties(symbol, {
            '__Description__': {
                value: descString,
                writable: false,
                enumerable: false,
                configurable: false
            },
            '__Name__': {
                value: generateName(descString),
                writable: false,
                enumerable: false,
                configurable: false
            }
        });

        return symbol;
    }

    var forMap = {};

    Object.defineProperties(SymbolPolyfill, {
        'for': {
            value: function(description) {
                var descString = description === undefined ? undefined : String(description)
                return forMap[descString] ? forMap[descString] : forMap[descString] = SymbolPolyfill(descString);
            },
            writable: true,
            enumerable: false,
            configurable: true
        },
        'keyFor': {
            value: function(symbol) {
                for (var key in forMap) {
                    if (forMap[key] === symbol) return key;
                }
            },
            writable: true,
            enumerable: false,
            configurable: true
        }
    });

    root.SymbolPolyfill = SymbolPolyfill;

})()