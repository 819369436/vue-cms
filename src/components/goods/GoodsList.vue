<template>
    <div class="goods-list">
        <div class="goods-item" v-for="g in goodsList" @click="goGoodsDetail(g.id)">
            <img :src="g.url" />
            <h4 class="title">{{g.title}}</h4>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{g.price}}</span>
                    <span class="old">￥{{g.oldPrice}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{g.number}}件</span>
                </p>

            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getMore()">加载更多</mt-button>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                goodsList: [],
                paramObj: {},
                pageNum: 1,
                pageSize: 6,
                pages: 0,
            }
        },
        created(){
            this.queryGoodsList();
        },
        methods:{
            goGoodsDetail(id){

                //使用路由跳转页面
                this.$router.push({name:'goodsInfo', params:{id:id}});

            },
            getMore(){//加载更多
                this.pageNum++;
                this.queryGoodsList();
            },
            queryGoodsList() {//获取商品list
                this.$http.post("newsController/queryGoodsList",{pageNum:this.pageNum, pageSize:this.pageSize, data:this.paramObj}).then(result => {
                    console.log(result);
                    if (result.body.code == 0) {

                        if(this.pageNum <= result.body.data.pages){
                            this.goodsList = this.goodsList.concat(result.body.data.list);
                        }


                    } else {
                        alert("获取商品列表数据失败");
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>


.goods-list{
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    .goods-item{
        width: 49%;
        border: 1px solid #cccccc;
        box-shadow: 0 0 8px #cccccc;
        margin-bottom: 7px;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 298px;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }

        .info{

            background-color: #eeeeee;
            p{
                margin: 0;
                padding: 5px;
            }

            .price{

                .now{
                    color: red;
                    font-weight: bold;
                    font-size: 16px;

                }
                .old{

                    text-decoration: line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }

            .sell{
                display: flex;
                justify-content: space-between;
            }


        }



    }
}
</style>
