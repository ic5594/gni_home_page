<template>
    <div id='turn-body4'>
        <Navigate v-bind:navGate="imgUrl"></Navigate>
    </div>
</template>
<script>
import Navigate from '../../../components/navigate.vue'

export default {
    components:{
        'Navigate':Navigate
    },
    data: function () { 
            return { 
                imgUrl: ['https://www.gnigame.co.kr/wp-content/uploads/2018/05/TurnOver-gallery3.jpg',
               'https://www.gnigame.co.kr/wp-content/uploads/2018/05/TurnOver-gallery4.jpg']
                
                
                }; 
        },

    }
</script>
<style>
    #turn-body4{
        background:#f2f2f2;
    }
</style>
