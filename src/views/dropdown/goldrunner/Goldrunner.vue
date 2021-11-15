<template>
    <div id='gold'>
       <img src="https://www.gnigame.co.kr/wp-content/uploads/2018/08/Goldrunner-header-1영문.jpg"/>
        <Goldbody1></Goldbody1>
        <Goldbody2></Goldbody2>
        <Goldbody3></Goldbody3>
        <Goldbody4></Goldbody4>
    </div>
</template>
<script>

import Goldbody1 from './GoldBody1.vue'
import Goldbody2 from './GoldBody2.vue'
import Goldbody3 from './GoldBody3.vue'
import Goldbody4 from './GoldBody4.vue'

export default {
    components:{

        'Goldbody1':Goldbody1,
        'Goldbody2':Goldbody2,
        'Goldbody3':Goldbody3,
        'Goldbody4':Goldbody4
    }
}
</script>
<style>
</style>