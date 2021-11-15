<template>
    <div id='toyracing'>
       <img src='https://www.gnigame.co.kr/wp-content/uploads/2018/05/Title_Toyracing_2.jpg'/>
        <ToyBody1></ToyBody1>
        <ToyBody2></ToyBody2>
        <ToyBody3></ToyBody3> 
        <ToyBody4></ToyBody4>
    </div>
</template>
<script>

import ToyBody1 from './ToyBody1.vue'
import ToyBody2 from './ToyBody2.vue'
import ToyBody3 from './ToyBody3.vue'
import ToyBody4 from './ToyBody4.vue'

export default {
    components:{
        
        'ToyBody1':ToyBody1,
        'ToyBody2':ToyBody2,
        'ToyBody3':ToyBody3,
        'ToyBody4':ToyBody4
    }
}
</script>
<style>
</style>