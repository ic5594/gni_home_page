<template>
    <div id='toyracing'>
       <img src='https://www.gnigame.co.kr/wp-content/uploads/2018/05/Title_Toyracing_2.jpg'/>
        <ToyBody1></ToyBody1>
        <ToyBody2></ToyBody2>
        <ToyBody3></ToyBody3> 
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '/src/components/footer/Footer.vue'
import ToyBody1 from './ToyBody1.vue'
import ToyBody2 from './ToyBody2.vue'
import ToyBody3 from './ToyBody3.vue'

export default {
    components:{
        'Footer':Footer,
        'ToyBody1':ToyBody1,
        'ToyBody2':ToyBody2,
        'ToyBody3':ToyBody3
    }
}
</script>
<style>
</style>