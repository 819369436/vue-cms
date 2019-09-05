<template>
    <div id="home">

        <!-- 轮播图 -->
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="img in imgList">
                <img v-bind:src="img.url" width="100%" height="100%" alt="" />
            </mt-swipe-item>
        </mt-swipe>

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
                var api = 'http://192.168.2.59:8080/homeController/getTakTurnImg';

                this.$http.get(api).then(result => {
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
</style>
