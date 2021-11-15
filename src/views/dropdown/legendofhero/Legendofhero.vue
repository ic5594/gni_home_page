<template>
    <div id='legend'>
       <img src='https://www.gnigame.co.kr/wp-content/uploads/2018/08/Legendofhero-header-1영문.jpg'/>
        <LegendBody1></LegendBody1>
        <LegendBody2></LegendBody2>
        <LegendBody3></LegendBody3> 
        <LegendBody4></LegendBody4>
    </div>
</template>
<script>
import LegendBody1 from './LegendBody1.vue'
import LegendBody2 from './LegendBody2.vue'
import LegendBody3 from './LegendBody3.vue'
import LegendBody4 from './LegendBody4.vue'

export default {
    components:{
        'LegendBody1':LegendBody1,
        'LegendBody2':LegendBody2,
        'LegendBody3':LegendBody3,
        'LegendBody4':LegendBody4
    }
}
</script>
<style>
</style>