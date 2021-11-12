<template>
    <div id='legend-body3'>
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
                imgUrl: ["https://www.gnigame.co.kr/wp-content/uploads/2018/05/LegendofHero-gallery1.jpg",
                "https://www.gnigame.co.kr/wp-content/uploads/2018/05/LegendofHero-gallery2.jpg",
                "https://www.gnigame.co.kr/wp-content/uploads/2018/05/LegendofHero-gallery3.jpg",
                "https://www.gnigame.co.kr/wp-content/uploads/2018/05/LegendofHero-gallery4.jpg",
                "https://www.gnigame.co.kr/wp-content/uploads/2018/05/LegendofHero-gallery5.jpg"
                ]
                }; 
        },


}
</script>
<style>
    
</style>
