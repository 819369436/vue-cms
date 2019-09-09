<template>
    <div id="newsList">
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="n in newsList" :key="n.id">
                <router-link :to="'/newsInfo/'+n.id">
                    <img class="mui-media-object mui-pull-left" v-bind:src="n.url">
                    <div class="mui-media-body">
                        <h1>{{n.title}}</h1>
                        <p class="mui-ellipsis">
                            <span>发表时间：{{n.createTime | dateFormat('YYYY-MM-DD HH:mm:ss')}}</span>
                            <span>点击：{{n.count}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>


        </ul>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                newsList: []
            }
        },created(){
            this.queryNewsList();
        },methods:{
            queryNewsList(){
                this.$http.get("newsController/queryVueNewsList").then(result=>{
                    console.log(result);
                    if(result.body.code == 0){
                        console.log(result);
                        this.newsList = result.body.data
                    }else{
                        alert("获取新闻列表数据失败");
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>

    .mui-table-view{
        li{
            h1{font-size: 14px;}
            .mui-ellipsis{
                font-size: 12px;
                color: #226aff;
                display: flex;
                justify-content: space-between;
            }
        }

    }
</style>