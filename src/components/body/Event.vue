<template>
    <div id="event">
        <div id="event1">
            <span>이벤트</span>
                <p>지니게임은 다양한 이벤트로 여러분의 사랑에 보답하고자<br> 노력하고
                있습니다.
                오늘도 지니게임과 함께 신나는 하루를 보내세요!</p>
                <router-link to="/event"><Button message="이벤트 참여 →"></Button></router-link>
        </div>
        <div id="event2">
            <span>고객지원</span>
                <p>지니게임은 고객의 목소리에 귀 기울입니다.<br>
                여러분의 목소리는 지니게임을 더욱 성장시킬 수 있습니다.</p>
                <router-link to="/faq"><Button message="무엇을 도와드릴까요? →"></Button></router-link>
        </div>
    </div>
</template>
<script>
import Button from '../Button.vue'
export default {
    components:{
        'Button':Button
    }
}
</script>
<style>
    #event{
        height: 320px;
        margin-top: 30px;
        width:100%;
    }
    #event1 {
       display: inline-block;
        margin:10px;
        position: relative;
        top:30px;
    }
    #event2 {
       position: relative;
       left:700px;
       bottom:200px;
    }
    #event span,p{
        color: #424242;
    }
    #event span{
        font-size: 30px;
        font-weight:400;
        margin-left: 340px;
    }
    #event p{
        font-size: 18px;
        font-weight: 50;
        letter-spacing: 2px;
        margin-top:30px;
        line-height: 160%;
    }
    Button{
        margin-left: 330px;
    }
    #event2 Button{
        width: 230px;
    }
    body{
        margin:0;
        padding:0;
}
</style>