<template>
    <div id="gnianime">
        <h2>지니 만화</h2>
        <h4>
        휴대폰의 작은 화면으로 재미있는 만화를 보시기 답답하셨죠?<br>
        걱정하지 마세요~ 이제 TV에서 만화를 만날 수 있습니다.<br>
        '지니만화'가 여러분의 갈증을 당장 풀어드릴게요!</h4>
        <img src="https://www.gnigame.co.kr/wp-content/uploads/2018/04/home-service-comics-1.jpg"  class="gnimanga" width="600" height="380">
        <button class="button2">자세히보기-></button>
   
                
    </div>  
        
</template>
<script>
export default {
    
}
</script>
<style>
    #gnianime {
        
        background:#f5f5f5;
        margin-top: 80px;
        height: 380px;
        font-size: 25px;
        padding-top:0.5px;
    }
    #gnianime h2{
        
        font-weight:300;
        text-align: left;
        color: #424242;
    }
    
    #gnianime h4{
        color: #424242;
        font-size:23px;
        margin-right: 300px;
        font-weight: 50;
    }
    #gnianime h2,h4{
        text-align: left;
        margin-left: 330px;
        
    }
    .gnimanga{
        display: inline-block;
        position:absolute;
        right: 250px;
        top:1106px;
    }
    .button2{
        width: 140px;
        height: 45px;
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        font-weight: 500;
        color: #000;
        background-color: #fff;
        border: none;
        border-radius: 45px;
        box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease 0s;
        cursor: pointer;
        outline: none;
         margin-left: 330px;
         margin-top:2%;
  }
  .button2:hover {
  background-color: #2EE59D;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
body {
        margin: 0;
        padding: 0;
    }
</style>