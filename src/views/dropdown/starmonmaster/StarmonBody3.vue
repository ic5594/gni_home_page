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
                imgUrl: ['https://www.gnigame.co.kr/wp-content/uploads/2018/05/Starmonmasters-gallery1.jpg',
               'https://www.gnigame.co.kr/wp-content/uploads/2018/05/Starmonmasters-gallery2.jpg',
               'https://www.gnigame.co.kr/wp-content/uploads/2018/05/Starmonmasters-gallery3.jpg',
               'https://www.gnigame.co.kr/wp-content/uploads/2018/05/Starmonmasters-gallery4.jpg' 

                ]
                }; 
        },


}
</script>
<style>
    
</style>
