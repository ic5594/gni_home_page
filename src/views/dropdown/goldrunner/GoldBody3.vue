<template>
    <div id='gold-body3'>
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
                    'https://www.gnigame.co.kr/wp-content/uploads/2018/05/Goldrunner-gallery1.jpg',
                    'https://www.gnigame.co.kr/wp-content/uploads/2018/05/Goldrunner-gallery2.jpg',
                    'https://www.gnigame.co.kr/wp-content/uploads/2018/05/Goldrunner-gallery3.jpg',
                    'https://www.gnigame.co.kr/wp-content/uploads/2018/05/Goldrunner-gallery4.jpg',
                    'https://www.gnigame.co.kr/wp-content/uploads/2018/05/Goldrunner-gallery5.jpg',
                    'https://www.gnigame.co.kr/wp-content/uploads/2018/05/Goldrunner-gallery6.jpg'
                ]
                }; 
        },


}
</script>
<style>
    
</style>
