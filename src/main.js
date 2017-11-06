// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './app'
import '../index.less';
import VueScroller from 'vue-scroller'
import { Swipe,SwipeItem } from 'mint-ui';


Vue.use(VueScroller)

//注册全局组件
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem);



/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(app),
})
