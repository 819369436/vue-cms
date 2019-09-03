// 入口文件
// console.log('OK')
import Vue from 'vue'

//导入app根组件：就是App.vue文件,vue把所有xxx.vue的文件叫组件
import app from './App.vue';


//导入mint-ui组件
import { Header } from 'mint-ui'
Vue.component(Header.name, Header);

//导入mui组件
import './lib/mui/css/mui.min.css';

var vm = new Vue({
    el: '#app',
    render: c => c(app)
});







