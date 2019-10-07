<template>
    <div class="goodsInfo">

        <!--小球动画-->
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag"></div>
        </transition>


        <!--商品轮播图-->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <!--<img src="//img12.360buyimg.com/n1/s450x450_jfs/t1/60794/2/9998/38742/5d79ca37E2cf10c77/c1f50f5722ac7a73.jpg" />-->
                    <!-- 轮播图 -->
                    <swiper-box :imgList="this.imgList"></swiper-box>
                </div>
            </div>
        </div>

        <!--商品价格-->
        <div class="mui-card">
            <div class="mui-card-header">页眉</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p class="price">
                        市场价:<del>￥2399</del>&nbsp;&nbsp;销售价:<span class="now-price">￥3199</span>
                    </p>
                    <p>
                        购买数量:<numbox @getcount="getSelectedCount" :max="9"></numbox>

                    </p>
                    <p>
                        <mt-button type="primary" size="small" @click="">立即购买</mt-button>
                        <mt-button type="danger" size="small" @click="addCar()">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>


        <!--商品参数-->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号:12138</p>
                    <p>库存情况:9件</p>
                    <p>上架时间:2019年10月7日21:14:50</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="toGoodsDesc(1)">图文介绍</mt-button>
                <br/>
                <mt-button type="danger" size="large" plain @click="toGoodsComment(1)">商品评论</mt-button>
            </div>
        </div>


    </div>
</template>

<script>

    import swiper from '../common/Swiper.vue';
    import numbox from '../common/goodsinfo_numbox.vue'

    export default {
        data(){
            return{
                imgList: [
                    {url:'//img12.360buyimg.com/n1/s450x450_jfs/t1/71018/19/10018/94540/5d79ca36E27b83a4a/754e75fec0fad9d6.jpg'},
                    {url:'//img12.360buyimg.com/n1/s450x450_jfs/t1/51383/1/10467/33339/5d79ca37E9583636f/f5035999fc04c248.jpg'},
                    {url:'//img12.360buyimg.com/n1/s450x450_jfs/t1/74174/26/9973/74926/5d79ca36E8ed69300/da59528740b49ca3.jpg'}
                ],
                ballFlag: false,//控制小球显示和隐藏
            }
        },
        created() {

            // this.testMethod();

        },
        methods:{
            // testMethod(){
            //
            //     console.log(1==1);
            //     console.log(1 == '1');
            //     console.log(1 === '1');
            //
            //
            // }

            toGoodsDesc(id){//跳转图文介绍页面
                this.$router.push({name:'goodsDesc', params:{id:id}});
            },
            toGoodsComment(id){//转跳商品评论页面
                this.$router.push({name:'goodsComment', params:{id:id}})
            },
            addCar(){//添加到购物车
                this.ballFlag = !this.ballFlag;
            },
            beforeEnter(el){
                el.style.transform = "translate(0,0)"; //css绝对定位时的初始值
            },
            enter(el, done){
                el.offsetWidth;
                el.style.transform = 'translate(99px, 230px)';
                el.style.transition = "all 0.3s cubic-bezier(.4,-0.3,1,.68)";
                done();
            },
            afterEnter(el){
                this.ballFlag = !this.ballFlag;
            },
            getSelectedCount(count){
                console.log("子页面goodsinfo_numbox.vue传来的值：" + count)
            }

        },
        components:{
            'swiper-box':swiper,
            'numbox':numbox
        }
    }
</script>

<style lang="scss" scoped>

    .goodsInfo{
        background-color: #eeeeee;
    }

    .price{
        .now-price{
            color: red;
            font-size: 16px;
        }
    }

    .mui-card-footer{
        display: block;

    }

    .ball{
        width: 15px;
        height: 15px;;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        top: 389px;
        left: 137px;


    }

</style>
