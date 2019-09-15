import VueRouter from 'vue-router'


import Home from './components/tabbar/Home.vue';
import Member from './components/tabbar/Member.vue';
import Search from './components/tabbar/Search.vue';
import Shopcar from './components/tabbar/Shopcar.vue';
import NewsList from './components/news/NewsList.vue';
import NewsInfo from './components/news/NewsInfo.vue';

import comment from './components/common/comment.vue';
import PhotoList from "./components/photos/photoList.vue";


// 3. 创建路由对象
var router = new VueRouter({
  routes: [ //配置路由规则
    {
      path: '/home',
      component: Home
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/search',
      component: Search
    },
    { path: '/shopcar',
      component: Shopcar
    },
    {
      path: '/newsList',
      component: NewsList
    },
    {
      path: '/newsInfo/:id',
      component: NewsInfo,

    },
    {
      path: '/photoList',
      component: PhotoList,

    },

    { path: '/', redirect: '/home' },

  ],
  linkActiveClass: 'mui-active' //默认当前选中的路由，设置class中添加mui-active
})

// 把路由对象暴露出去
export default router
