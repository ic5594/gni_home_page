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
                'https://www.gnigame.co.kr/wp-content/uploads/2018/05/MonsterOffenceHero-gallery1.jpg',
                'https://www.gnigame.co.kr/wp-content/uploads/2018/05/MonsterOffenceHero-gallery2.jpg',
                'https://www.gnigame.co.kr/wp-content/uploads/2018/05/MonsterOffenceHero-gallery3.jpg',
                'https://www.gnigame.co.kr/wp-content/uploads/2018/05/MonsterOffenceHero-gallery4.jpg',
                'https://www.gnigame.co.kr/wp-content/uploads/2018/05/MonsterOffenceHero-gallery5.jpg'
                ]
                }; 
        },


}
</script>
<style>
    
</style>
