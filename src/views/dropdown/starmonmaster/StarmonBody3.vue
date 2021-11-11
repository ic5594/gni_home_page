<template>
    <div id='star-body3'>
        <Navigate v-bind:navGate="imgUrl"></Navigate>
    </div>
</template>
<script>
    import Navigate from '../../../components/navigate.vue'

export default {
    name:"starbody3",
    components:{
        'Navigate':Navigate
    },
    data:function(){
        return{
            imgUrl:`'https://www.gnigame.co.kr/wp-content/uploads/2018/05/TurnOver-gallery2.jpg','https://www.gnigame.co.kr/wp-content/uploads/2018/04/TurnOver-gallery1-1.jpg'`      
        }
    }
    }
</script>
<style>
    
</style>
