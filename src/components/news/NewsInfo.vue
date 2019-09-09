<template>
    <div class="newsinfo-box">
        <h3>新闻详情</h3>
        <p class="newsinfo-subtitle">
            <span>发表时间：2019-09-09 23:33:33</span>
            <span>点击12次</span>
        </p>
        <hr/>
        <div class="newsinfo-content">
            123123555446666
        </div>
    </div>
</template>

<script>
    //js拿路由传来的参数，如：$route.params.id

    export default {
        data(){
            return{
                // id: $route.params.id  //获取路由传来的参数id
            }
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