import Vue from 'vue'
import VueRouter from 'vue-router'

 // import app from './app.vue'
 import sort from '../components/sort/sort.vue'
 import shoppingcart from '../components/shoppingcart/shoppingcart.vue'
 import mypet  from '../components/mypet/mypet.vue'
 import content from '../components/content/content.vue'

// 声明使用插件
Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass:"active",
  routes: [ // 配置多个路由
    {
      path: '/content',
      component: content
    },
    {
      path: '/sort',
      component: sort
    },
    {
      path: '/shoppingcart',
      component: shoppingcart
    },
    {
      path: '/mypet',
      component: mypet
    },
    {
      path: '/',
      redirect: '/content'
    }
  ]
})
