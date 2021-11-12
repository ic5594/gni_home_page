<template>
    <div id='kids-body3'>
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
                    'https://www.gnigame.co.kr/wp-content/uploads/2018/05/kid-gallery1.jpg',
                     'https://www.gnigame.co.kr/wp-content/uploads/2018/05/kid-gallery2.jpg',
                      'https://www.gnigame.co.kr/wp-content/uploads/2018/05/kid-gallery3.jpg'
                ]
                }; 
        },


}
</script>
<style>
    
</style>
