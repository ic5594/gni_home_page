<template>
    <div id='turnover'>
        <img src="https://www.gnigame.co.kr/wp-content/uploads/2018/08/Turnover-header-1영문.jpg"/>
        <TurnoverBody1></TurnoverBody1>
        <TurnoverBody2></TurnoverBody2>
        <TurnoverBody3></TurnoverBody3>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '/src/components/footer/Footer.vue'
import TurnoverBody1 from './TurnoverBody1.vue'
import TurnoverBody2 from './TurnoverBody2.vue'
import TurnoverBody3 from './TurnoverBody3.vue'


export default {
    components:{
        
        'Footer':Footer,
        'TurnoverBody1':TurnoverBody1,
        'TurnoverBody2':TurnoverBody2,
        'TurnoverBody3':TurnoverBody3
    }
}
</script>
<style>

body{
    margin:0;
    padding:0;
}
</style>