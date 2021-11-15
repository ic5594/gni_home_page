<template>
    <div id='monster'>
       <img src='https://www.gnigame.co.kr/wp-content/uploads/2018/08/Monsteroffencehero-1영문.jpg'/>
        <MonsterBody1></MonsterBody1>
        <MonsterBody2></MonsterBody2>
        <MonsterBody3></MonsterBody3>
        <MonsterBOdy4></MonsterBOdy4>
    </div>
</template>
<script>

import MonsterBody1 from './MonsterBody1.vue'
import MonsterBody2 from './MonsterBody2.vue'
import MonsterBody3 from './MonsterBody3.vue'
import MonsterBody4 from './MonsterBody4.vue'

export default {
    components:{
        
        'MonsterBody1':MonsterBody1,
        'MonsterBody2':MonsterBody2,
        'MonsterBody3':MonsterBody3,
        'MonsterBOdy4':MonsterBody4
    }
}
</script>
<style>
</style>