// 入口文件
// console.log('OK')
import Vue from 'vue'

//导入路由的包
import VueRouter from 'vue-router';
Vue.use(VueRouter);



//定义全局过滤器：用来过滤时间日期的指定格式显示
    //导入一个时间格式化插件:moment
import moment from 'moment';
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern);
})


//导入vue-resource
import VueResource from 'vue-resource';
Vue.use(VueResource);


import VuePreview from 'vue-preview';
Vue.use(VuePreview)


//定义vue-resource的全局url变量
Vue.http.options.root = 'http://localhost:8080';

//设置全局post请求时表单数据格式为json形式传后台
// Vue.http.options.emulateJSON = true;


import $ from 'jquery';

//路由：导入自己的router.js模块
import router from './router.js';


//导入app根组件：就是App.vue文件,vue把所有xxx.vue的文件叫组件
import app from './App.vue';


//导入mint-ui组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

//导入mui组件
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';

var vm = new Vue({
    el: '#app',
    router,//路由挂载
    render: c => c(app)
});







