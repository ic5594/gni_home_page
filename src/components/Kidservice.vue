<template>
    <div id ='service'>
        <img src="https://www.gnigame.co.kr/wp-content/uploads/2018/05/kid-gallery1.jpg" class="kidservice" width="600" height="320">
        <h1>키즈 서비스</h1>
        <p>놀라지마세요! 지니게임에는 어린이를 위한 서비스도 가득합니다.<br>
        '지니키즈팝','타요와 신나는 놀이'등 어린이들과 온 가족이 함께 즐<br>
        길 수 있는 재미있는 놀이로 여러분의 거실을 웃음으로 가득 채워줄<br>것입니다.</p>
        <button class="button">자세히보기-></button>
    </div>

</template>
<script>
export default {
    
}
</script>
<style>
    #service {
        
        margin-left: 17%;
        margin-top: 30px;

    }
    #service h1{
        display: inline-block;
        font-weight:300;
        color: #424242;
        position: relative;
        text-align: left;
        margin-left: 10px;
    }
    #service p{
        color: #424242;
        font-size:23px;
        font-weight: 50;
    }
    .kidservice{
        float:left;
        margin-right: 50px;
        margin-top:20px;
        clear: both;
    }
    
    .button {
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
  }
body {
        margin: 0;
        padding: 0;
    }
.button:hover {
  background-color: #2EE59D;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
</style>