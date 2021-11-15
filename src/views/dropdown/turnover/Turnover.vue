<template>
    <div id='turnover'>
        <img src="https://www.gnigame.co.kr/wp-content/uploads/2018/08/Turnover-header-1영문.jpg"/>
        <TurnoverBody1></TurnoverBody1>
        <TurnoverBody2></TurnoverBody2>
        <TurnoverBody3></TurnoverBody3>
        <TurnoverBody4></TurnoverBody4>
    </div>
</template>
<script>

import TurnoverBody1 from './TurnoverBody1.vue'
import TurnoverBody2 from './TurnoverBody2.vue'
import TurnoverBody3 from './TurnoverBody3.vue'
import TurnoverBody4 from './TurnoverBody4.vue'

export default {
    components:{
        'TurnoverBody1':TurnoverBody1,
        'TurnoverBody2':TurnoverBody2,
        'TurnoverBody3':TurnoverBody3,
        'TurnoverBody4':TurnoverBody4
    }
}
</script>
<style>

body{
    margin:0;
    padding:0;
}
</style>