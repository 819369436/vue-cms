<template>
    <div>
        <comment-box></comment-box>
    </div>
</template>

<script>

    import comment from '../common/comment.vue';

    export default {
        data(){
            return{

            }
        },
        components:{
            'comment-box':comment
        }
    }
</script>

<style scoped>

</style>
