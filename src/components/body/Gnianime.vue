<template>
    <div id="gnianime">
        <span>지니 만화</span>
        <p>
        휴대폰의 작은 화면으로 재미있는 만화를 보시기 답답하셨죠?<br>
        걱정하지 마세요~ 이제 TV에서 만화를 만날 수 있습니다.<br>
        '지니만화'가 여러분의 갈증을 당장 풀어드릴게요!</p>
        <img src="https://www.gnigame.co.kr/wp-content/uploads/2018/04/home-service-comics-1.jpg"  id="gnimanga" width="600" height="380">
        <Button message="자세히 보기 →"></Button>         
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
    #gnianime { 
        background:#f2f2f2;
        margin-top: 79px;
        height: 321px; 
        padding-top: 3%; 
        
    }
    #gnianime span{
        font-weight:400;
        color: #424242;
        font-size:30px;
        margin-top: 30px;
    }
    #gnianime p{
        color: #424242;
        font-size:18px;
        font-weight: 50;
        letter-spacing: 2px;
        margin-top:30px;
        line-height: 160%;
    }
    #gnianime span,p{
        margin-left: 340px;
        
    }
    #gnianime Button{
        margin-left:330px;
        margin-top:30px;
    }
    #gnimanga{
       display: inline-block;
       float: right;
       position: relative;
       right:310px;
       bottom:230px;
    }
    #body 
    {
        margin: 0;
        padding: 0;
        max-width:100%
     }
</style>