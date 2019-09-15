<template>
    <div class="newsinfo-box">
        <h3>{{newsInfo.title}} {{this.id}}</h3>
        <p class="newsinfo-subtitle">
            <span>发表时间：{{newsInfo.createTime | dateFormat('YYYY-MM-DD HH:mm:ss')}}</span>
            <span>点击{{newsInfo.count}}次</span>
        </p>
        <hr/>
        <div class="newsinfo-content">
            {{newsInfo.content}}
        </div>

        <!-- 评论区域 -->
        <comment-box :newsId="this.id"></comment-box>
    </div>
</template>

<script>
    //js拿路由传来的参数，如：this.$route.params.id

    //导入评论组件comment.vue
    import comment from '../common/comment.vue';

    export default {
        data(){
            return{
                id: this.$route.params.id,  //获取路由传来的参数id
                newsInfo: {}
            }
        },
        created(){
            this.getVueNewsInfo();
        },
        methods:{
            getVueNewsInfo(){
                this.$http.post("newsController/getVueNewsInfo",{id:this.id}).then(result=>{
                    console.log(result);
                    if(result.body.code == 0){
                        this.newsInfo = result.body.data;
                    }else{
                        alert("获取新闻列表数据失败");
                    }
                })
            }
        },
        components:{
            "comment-box": comment
        }
    }
</script>

<style lang="scss" scoped>

    .newsinfo-box{
        padding: 0 10px;

        h3{
            text-align: center;
        }

        .newsinfo-subtitle{
            display: flex;
            justify-content: space-between;
        }
    }



</style>
