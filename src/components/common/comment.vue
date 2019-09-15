<template>
    <div class="cmt-container">
        <h3>发表评论 {{newsId}}</h3>
        <hr/>
        <textarea placeholder="请输入要bb的内容（最多吐槽120字）" maxlength="120" v-model="content"></textarea>
        <mt-button type="primary" size="large" @click="addComment()">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="(c,key) in commentList" :key="c.id">
                <div class="cmt-title">
                    第{{key + 1}}楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：{{c.createTime | dateFormat('YYYY-MM-DD HH:mm:ss')}}
                </div>
                <div class="cmt-body">
                    {{c.content}}
                </div>
            </div>
        </div>
        <div class="cmt-bottom-hint" v-if="this.pageNum >= this.pages">
            <hr/>
            <h2>已经到底了,没有啦</h2>
        </div>
        <div v-if="this.pageNum < this.pages" >
            <mt-button type="danger" size="large" plain @click="getMore()">加载更多</mt-button>
        </div>

    </div>
</template>

<script>

    //导入Toast
    import { Toast } from "mint-ui";


    export default {
        data(){
            return{
                commentList: [],
                paramObj: {},
                pageNum: 1,
                pageSize: 5,
                pages: 0,
                content: ""


            }
        },
        created(){

            this.queryCommentList();
        },
        methods:{

            addComment(){

                //校验提交评论内容不能为空
                if(this.content.trim().length == 0){
                    return Toast("评论内容不能为空！");
                }

                this.$http.post("commentController/addComment",{newsId:this.newsId, content:this.content}).then(result=>{
                    console.log(result);
                    if(result.body.code == 0){

                        // this.queryCommentList();不知道什么鬼，刷新列表之前的数据还在，只是在后面追加，所以刷新没用
                        //只能用js拼接了,不再请求后台评论列表
                        var cmt = {content:this.content, createTime:new Date(), }
                        this.commentList.unshift(cmt);

                        this.content = "";

                    }else{
                        alert(result.body.message);
                    }
                })

            },
            getMore(){
                this.pageNum++;//当前页码加1
                this.queryCommentList();
            },
            queryCommentList(){
                this.paramObj.newsId = this.newsId;


                this.$http.post("commentController/queryVueCommentList",{pageNum:this.pageNum, pageSize:this.pageSize, data:this.paramObj}).then(result=>{
                    console.log(result);
                    if(result.body.code == 0){
                        if(this.pageNum <= result.body.data.pages){
                            this.commentList = this.commentList.concat(result.body.data.list);
                            this.pages = result.body.data.pages;
                        }

                    }else{
                        alert(result.body.message);
                    }
                })
            }
        },
        props: ["newsId"] //接收父组件NewsInfo.vue传来的id参数
    }
</script>

<style lang="scss" scoped>

    .cmt-container{
        margin-top: 20px;
        h3{
            font-size: 16px;
        }
        textarea{
            font-size: 14px;
            height: 85px;
            margin: 0;
        }
        .cmt-list{
            margin: 5px 0;
            .cmt-item{
                .cmt-title{
                    line-height: 30px;
                    font-size: 13px;
                    background-color: #ccc;
                }
                .cmt-body{
                    line-height: 35px;
                    text-indent: 2em;
                }
            }
        }

        /*底部提示*/
        .cmt-bottom-hint{
            h2{
                /*font-size: 18px;*/
                color: #cccccc;
            }

        }

    }

</style>
