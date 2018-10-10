// 导入Vue
import Vue from 'vue'
// 导入App.vue这个文件 单文件组件
import App from './App.vue'

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

// 实例化Vue
new Vue({
    // 箭头函数
    // render: h => h(App)
    // 完整写法
    render: function (createElement) {
      // 把引入的App.vue设置为 根节点
      return createElement(App);
    }
  })
  // 应用到 #app这个元素上
  .$mount('#app')