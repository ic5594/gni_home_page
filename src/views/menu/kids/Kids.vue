<template>
    <div id='kids'>
        <img src="https://www.gnigame.co.kr/wp-content/uploads/2018/08/kid-header-img.jpg" width="1920" height="600" alt="" />
        <KidsBody1></KidsBody1>
        <KidsBody2></KidsBody2>
        <KidsBody3></KidsBody3>
    </div>
</template>
<script>
import KidsBody1 from './KidsBody1.vue'
import KidsBody2 from './KidsBody2.vue'
import KidsBody3 from './KidsBody3.vue'


export default {
    components:{
        'KidsBody1':KidsBody1,
        'KidsBody2':KidsBody2,
        'KidsBody3':KidsBody3
    }
}
</script>