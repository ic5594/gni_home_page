<template>
    <div id='legend'>
       <img src='https://www.gnigame.co.kr/wp-content/uploads/2018/08/Legendofhero-header-1영문.jpg'/>
        <LegendBody1></LegendBody1>
        <LegendBody2></LegendBody2>
        <LegendBody3></LegendBody3> 
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '/src/components/footer/Footer.vue'
import LegendBody1 from './LegendBody1.vue'
import LegendBody2 from './LegendBody2.vue'
import LegendBody3 from './LegendBody3.vue'

export default {
    components:{
        'Footer':Footer,
        'LegendBody1':LegendBody1,
        'LegendBody2':LegendBody2,
        'LegendBody3':LegendBody3
    }
}
</script>
<style>
</style>