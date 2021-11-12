<template>
    <div id='comics-body3'>
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
                    'https://www.gnigame.co.kr/wp-content/uploads/2018/05/comics-gallery1.jpg',
                    'https://www.gnigame.co.kr/wp-content/uploads/2018/05/comics-gallery2.jpg',
                    'https://www.gnigame.co.kr/wp-content/uploads/2018/05/comics-gallery3.jpg'
                ]
                }; 
        },


}
</script>
<style>
    #comics-body3{
        background-color: #f2f2f2;
    }
</style>
