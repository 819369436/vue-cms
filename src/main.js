// 入口文件
// console.log('OK')
import Vue from 'vue'

//导入路由的包
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//导入vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);

import $ from 'jquery';

//路由：导入自己的router.js模块
import router from './router.js';


//导入app根组件：就是App.vue文件,vue把所有xxx.vue的文件叫组件
import app from './App.vue';


//导入mint-ui组件
import { Header, Swipe, SwipeItem  } from 'mint-ui'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//导入mui组件
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

var vm = new Vue({
    el: '#app',
    router,//路由挂载
    render: c => c(app)
});







