<template>
    <div id='gold'>
       <img src="https://www.gnigame.co.kr/wp-content/uploads/2018/08/Goldrunner-header-1영문.jpg"/>
        <Goldbody1></Goldbody1>
        <Goldbody2></Goldbody2>
        <Goldbody3></Goldbody3>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '/src/components/footer/Footer.vue'
import Goldbody1 from './GoldBody1.vue'
import Goldbody2 from './GoldBody2.vue'
import Goldbody3 from './GoldBody3.vue'


export default {
    components:{
        'Footer':Footer,
        'Goldbody1':Goldbody1,
        'Goldbody2':Goldbody2,
        'Goldbody3':Goldbody3
    }
}
</script>
<style>
</style>