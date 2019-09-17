<template>
    <div>
        <!--顶部滑动条-->
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" data-scroll="1">
                <div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px);">
                    <a :class="['mui-control-item', item.id == 0 ? ' mui-active':'']" href="javascript:;" data-wid="tab-top-subpage-1.html"
                       v-for="item in imgCategoryList" :key="item.id"
                        @tap="queryImgList(item.id)"
                    >
                        {{item.categoryName}}
                    </a>

                </div>
            </div>

        </div>

        <!--图片列表区域-->
        <ul class="img-list">
            <li v-for="item in imgList" :key="item.id">
                <img v-lazy="item.url">
                <div class="info">
                    <h1 class="info-title">图片的标题</h1>
                    <div class="info-body">图片的描述描述描的描述描的描述描述描,图片的描述描述描的描述描的描述描述描图片的描述描述描的描述描的描述描述描述描述</div>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>

    //引入mui框架的js
    import mui from "../../lib/mui/js/mui.js";



    export default {
        data(){
            return{
                imgCategoryList: [],
                imgList: []
            }
        },
        created(){//created(){}生命周期函数：当组件还没有渲染好之前
            this.queryImgCategoryList();
            this.queryImgList();//获取图片List
        },

        mounted(){//生命周期函数：当组件中的dom结构被渲染好并挂载到页面中后，会执行这个钩子函数
            //初始化滑动组件
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods:{

            queryImgCategoryList(){//获取图片分类list
                this.$http.post("newsController/queryImgCategoryList").then(result=>{
                    console.log(result);
                    if(result.body.code == 0){
                        result.body.data.unshift({id:0,categoryName:"全部"})
                        this.imgCategoryList = result.body.data;
                    }else{
                        alert("获取图片分类list数据失败");
                    }
                })

            },
            queryImgList(imgCategoryId){//获取图片list
                // alert(imgCategoryId);
                this.$http.post("newsController/queryImgList",{imgCategoryId:imgCategoryId}).then(result=>{
                    console.log(result);
                    if(result.body.code == 0){
                        this.imgList = result.body.data;
                    }else{
                        alert("获取图片分类list数据失败");
                    }
                })

            }
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss" >
    *{
        touch-action: pan-y;
    }

    .img-list{
        background-color: white;
        list-style: none;
        margin: 0;
        padding: 10px;
        padding-bottom: 0px;
        li{
            text-align: center;
            background-color: #cccccc;
            margin-bottom: 10px;
            position: relative;

            img{
                width: 100%;
                height: 400px;
                vertical-align: middle;
                box-shadow: 0 0 11px #999999;
            }

            img[lazy="loading"]{
                width: 40px;
                height: 300px;
                margin: auto;

            }


            .info{
                width: 100%;
                color: white;
                text-align: left;
                bottom: 0px;
                position: absolute;
                background-color: rgba(0, 0, 0, 0.4);
                max-height: 140px;
                .info-title{
                    font-size: 14px;
                }
                .info-body{
                    font-size: 13px;
                }
            }

        }
    }



</style>
