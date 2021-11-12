<template>
    <div id='comics'>
        <img src="https://www.gnigame.co.kr/wp-content/uploads/2018/08/comics-header-img-1.jpg" width="1920" height="600" alt="" />
        <ComicsBody1></ComicsBody1>
        <ComicsBody2></ComicsBody2>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '../../../components/footer/Footer.vue'
import ComicsBody1 from './ComicsBody1.vue'
import ComicsBody2 from './ComicsBody2.vue'


export default {
    components:{
        'Footer':Footer,
        'ComicsBody1':ComicsBody1,
        'ComicsBody2':ComicsBody2,

    }
}
</script>