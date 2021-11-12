<template>
    <div id='star-body3'>
        <Navigate v-bind:navGate='imgUrl'></Navigate>
    </div>
</template>
<script>
import Navigate from '../../../components/navigate.vue'

export default {
    components: { 
            'Navigate':Navigate
        }, 
        data: function () { 
            return { 
                imgUrl: [
                    "https://www.gnigame.co.kr/wp-content/uploads/2018/05/Toyracing-gallery1.jpg",
                    "https://www.gnigame.co.kr/wp-content/uploads/2018/05/Toyracing-gallery2.jpg",
                    "https://www.gnigame.co.kr/wp-content/uploads/2018/05/Toyracing-gallery3.jpg",
                    "https://www.gnigame.co.kr/wp-content/uploads/2018/05/Toyracing-gallery4.jpg"
                ]
                }; 
        },


}
</script>
<style>
    
</style>
