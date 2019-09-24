<template>
    <div id="home">

        <!-- 轮播图 -->
        <swiper-box :imgList="this.imgList" :isFull="true"></swiper-box>

        <!--  九宫格菜单 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/NewsList">
                <img clss="mui-table-view-cell-img" src="../../images/menu1.png" alt="">
                <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/PhotoList">
                <img clss="mui-table-view-cell-img" src="../../images/menu2.png" alt="">
                <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/GoodsList">
                <img clss="mui-table-view-cell-img" src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img clss="mui-table-view-cell-img" src="../../images/menu4.png" alt="">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img clss="mui-table-view-cell-img" src="../../images/menu5.png" alt="">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img clss="mui-table-view-cell-img" src="../../images/menu6.png" alt="">
                <div class="mui-media-body">联系我们</div></a></li>

        </ul>


    </div>
</template>

<script>

    import swiper from '../common/Swiper.vue';

    export default {
        data(){
            return{
                imgList: []
            }
        },
        created(){
            this.getTakeTurnImg();
        },
        methods:{
            getTakeTurnImg(){//获取轮播图数据
                // var api = 'http://192.168.2.59:8080/homeController/getTakTurnImg';
                var api = 'http://192.168.131.1:8080/homeController/getTakTurnImg';

                this.$http.get("homeController/getTakTurnImg").then(result => {
                    console.log(result.body);
                    if(result.body.code == 0){
                        this.imgList = result.body.data;
                        console.log(this.imgList)
                    }else{
                        alert("获取轮播图数据失败");
                    }
                });

            }
        },
        components:{
            'swiper-box': swiper
        }
    }
</script>

<style lang="scss" scoped>


    .mui-grid-view.mui-grid-9{
        background-color: #fff;
        border: none;

    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border: none;
        img{
            height: 60px;
            width: 60px;
        }
        .mui-media-body{
            font-size: 13px;
        }
    }


</style>
