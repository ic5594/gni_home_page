<template>
    <div id='starmon'>
       <img src='https://www.gnigame.co.kr/wp-content/uploads/2018/08/Starmonmasters-header-1.jpg'/>
        <StarmonBody1></StarmonBody1>
        <StarmonBody2></StarmonBody2>
        <StarmonBody3></StarmonBody3>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '/src/components/footer/Footer.vue'
import StarmonBody1 from './StarmonBody1.vue'
import StarmonBody2 from './StarmonBody2.vue'
import StarmonBody3 from './StarmonBody3.vue'


export default {
    components:{
        'Footer':Footer,
        'StarmonBody1':StarmonBody1,
        'StarmonBody2':StarmonBody2,
        'StarmonBody3':StarmonBody3
    }
}
</script>
<style>
</style>