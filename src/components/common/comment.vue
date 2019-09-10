<template>
    <div class="cmt-container">
        <h3>发表评论 {{id}}</h3>
        <hr/>
        <textarea placeholder="请输入要bb的内容（最多吐槽120字）" maxlength="120"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-09-10 22:20:20
                </div>
                <div class="cmt-body">
                    楼下的叼毛
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第二楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-09-10 22:20:20
                </div>
                <div class="cmt-body">
                    楼下的叼毛
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-09-10 22:20:20
                </div>
                <div class="cmt-body">
                    楼下的叼毛
                </div>
            </div>
            <div class="cmt-item">
                <div class="cmt-title">
                    第一楼&nbsp;&nbsp;用户：匿名用户&nbsp;&nbsp;发表时间：2019-09-10 22:20:20
                </div>
                <div class="cmt-body">
                    楼下的叼毛
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        props: ["id"] //接收父组件NewsInfo.vue传来的id参数
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
    }

</style>
