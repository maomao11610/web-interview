// 抽象组件类  一层层继承下来，得到更好的方法
class Component {
  operation() {
    console.log("Component：基础操作");
  }
}

// 具体组件类
class ConcreteComponent extends Component {
  operation() {
    console.log("ConcreteComponent：具体操作");
  }
}

// 抽象装饰器类
class Decorator extends Component {
  constructor(component) {
    super();
    this.component = component;
  }

  operation() {
    this.component.operation();
  }
}

// 具体装饰器类
class ConcreteDecoratorA extends Decorator {
  operation() {
    super.operation();
    console.log("ConcreteDecoratorA：添加操作");
  }
}

class ConcreteDecoratorB extends Decorator {
  operation() {
    super.operation();
    console.log("ConcreteDecoratorB：添加操作");
  }
}

// 使用装饰器组合对象
const component = new ConcreteComponent();
const decoratorA = new ConcreteDecoratorA(component);
const decoratorB = new ConcreteDecoratorB(decoratorA);
decoratorB.operation();
