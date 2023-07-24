directives: {
    color: {
        // 当指令被第一次绑定到元素时被调用
        bind(el, binding){
            el.style.color = binding.value;
        }
        // 每次DOM更新时调用
        update(el, binding){
            el.style.color=binding.value
        }
    }
}



// 全局自定义指令
Vue.directives('color', (el, binding) => {
    el.style.color = binding.value;
})