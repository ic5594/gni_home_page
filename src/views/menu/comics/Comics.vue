<template>
    <div id='comics'>
        <img src="https://www.gnigame.co.kr/wp-content/uploads/2018/08/comics-header-img-1.jpg" width="1920" height="600" alt="" />
        <ComicsBody1></ComicsBody1>
        <ComicsBody2></ComicsBody2>
    </div>
</template>
<script>
import ComicsBody1 from './ComicsBody1.vue'
import ComicsBody2 from './ComicsBody2.vue'


export default {
    components:{
        'ComicsBody1':ComicsBody1,
        'ComicsBody2':ComicsBody2
    }
}
</script>