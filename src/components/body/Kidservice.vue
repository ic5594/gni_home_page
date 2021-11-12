<template>
    <div id ='service'>
        <img src="https://www.gnigame.co.kr/wp-content/uploads/2018/05/kid-gallery1.jpg" class="kidservice" width="600" height="320">
        <span>키즈 서비스</span>
        <p>놀라지마세요! 지니게임에는 어린이를 위한 서비스도 가득합니다.<br>
        '지니키즈팝','타요와 신나는 놀이'등 어린이들과 온 가족이 함께 즐<br>
        길 수 있는 재미있는 놀이로 여러분의 거실을 웃음으로 가득 채워줄<br>것입니다.</p>
        <router-link to='/kids'><Button message="자세히보기 →"></Button></router-link>
    </div>

</template>
<script>
import Button from '../Button.vue'
export default {
    components:{
        'Button':Button
    },
   
    
}
</script>
<style>
    #service {   
        margin-left: 18%;
        margin-top: 30px;
        height: 310px;
        width:100%;
    }
    #service span{
        display: inline-block;
        font-weight:400;
        color: #424242;
        font-size:30px;
        margin-top:20px;
    }
    #service p{
        color: #424242;
        font-size:18px;
        font-weight: 50;
        letter-spacing: 2px;
        margin-top:30px;
        line-height: 160%;
    }
  
    .kidservice{
        float:left;
        margin-right: 50px;
        margin-top:20px;
        clear: both;
    }  
    body {
        margin: 0;
        padding: 0;
    }
    Button{
        margin-top:30px;
    }
    #service Button{
        position: relative;
        right:330px;
    }
    body{
        margin:0;
        padding:0;
        max-width: 100%;
    }
</style>