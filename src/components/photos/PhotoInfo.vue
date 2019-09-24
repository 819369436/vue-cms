<template>
    <div class="photoinfo-container">
        <h3>标题{{id}}</h3>
        <p class="subtitle">
            <span>发表时间：</span>
            <span>点击：0次</span>
        </p>

        <hr/>

        <!--缩略图区域-->
        <vue-preview :slides="slide1" @close="handleClose"></vue-preview>

        <!--内容-->
        <div class="content">内容内容内容内容内容内容，内容内容内容内容内容内容，内容内容内容内容内容内容， </div>


        <!--评论子组件-->
        <cmt-box :id="id"></cmt-box>


    </div>
</template>

<script>

    //引入评论子组件
    import comment from "../common/comment.vue";

    export default {
        data(){
            return{
                id: this.$route.params.id,
                slide1: [
                    {
                        src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                        msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                        alt: 'picture1',
                        title: 'Image Caption 1',
                        w: 600,
                        h: 400
                    },
                    {
                        src: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg',
                        msrc: 'https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg',
                        alt: 'picture2',
                        title: 'Image Caption 2',
                        w: 1200,
                        h: 900
                    }
                ]
            }
        },
        components:{
            "cmt-box": comment
        }
    }
</script>

<style lang="scss" scoped>

    .photoinfo-container{
        padding: 3px;
        h3{
            color: #26A2FF;
            font-size: 15px;
            text-align: center;
            margin: 15px 0;
        }
        .subtitle{
            display: flex;
            justify-content: space-between;
            font-size: 13px;
        }

        .content{
            font-size: 13px;
            line-height: 30px;
        }

    }

</style>
