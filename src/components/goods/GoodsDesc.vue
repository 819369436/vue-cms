<template>
    <div class="goodsdesc-container">
        <h3>图文介绍页面{{this.id}}</h3>
        <hr/>
        <div class="content">
            123123,介绍介绍123123,介绍介绍123123,介绍介绍123123,介绍介绍123123,介绍介绍
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                id: this.$route.params.id
            }
        }
    }
</script>

<style lang="scss" scoped>

    .goodsdesc-container{
        padding: 4px;
        h3{
            text-align: center;
            font-size: 18px;
            color: #226aff;
            margin: 15px 0;
        }
    }

</style>
