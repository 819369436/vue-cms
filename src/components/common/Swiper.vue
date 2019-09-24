<template>
    <div class="trunImg">
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="img in imgList">
                <img v-bind:src="img.url" :class="{'full':isFull}" alt="" />
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        props:['imgList', 'isFull']
    }
</script>

<style lang="scss" scoped>

    .trunImg{

    }

    .mint-swipe{
        height: 200px;
        transform: translateZ(0);
    .mint-swipe-item{
        text-align: center;

        img{
            height: 100%;
        }
        .full{
            width:100%;
        }

        }
    }
</style>
