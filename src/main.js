import Vue from 'vue'
import App from './App.vue'

//使用vue-resource进行网络请求
import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);


import Weather from './models/Weather.vue';
import Common from './models/Common.vue';

const routes = [
  {path: '/weather', component: Weather},
  {path: '/common', component: Common}
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App) 
})
