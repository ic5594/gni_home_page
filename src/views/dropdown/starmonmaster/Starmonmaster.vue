<template>
    <div id='starmon'>
       <img src='https://www.gnigame.co.kr/wp-content/uploads/2018/08/Starmonmasters-header-1.jpg'/>
        <StarmonBody1></StarmonBody1>
        <StarmonBody2></StarmonBody2>
        <StarmonBody3></StarmonBody3>
        <StarmonBody4></StarmonBody4>
    </div>
</template>
<script>

import StarmonBody1 from './StarmonBody1.vue'
import StarmonBody2 from './StarmonBody2.vue'
import StarmonBody3 from './StarmonBody3.vue'
import StarmonBody4 from './StarmonBody4.vue'

export default {
    components:{
       
        'StarmonBody1':StarmonBody1,
        'StarmonBody2':StarmonBody2,
        'StarmonBody3':StarmonBody3,
        'StarmonBody4':StarmonBody4
    }
}
</script>
<style>
</style>