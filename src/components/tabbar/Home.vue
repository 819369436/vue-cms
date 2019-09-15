<template>
    <div id="home">

        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="img in imgList">
                <img v-bind:src="img.url" width="100%" height="100%" alt="" />
            </mt-swipe-item>
        </mt-swipe>

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
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img clss="mui-table-view-cell-img" src="../../images/menu3.png" alt="">
                <div class="mui-media-body">商品购买</div></a></li>
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
        }
    }
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;
    .mint-swipe-item{
        &:nth-child(1){
            background-color: red;
        }
        &:nth-child(2){
            background-color: green;
        }
        &:nth-child(3){
            background-color: blue;
        }
    }
}

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
