<template>
    <div id="event">
        <div id="event1">
            <h1>이벤트</h1>
                <p>지니게임은 다양한 이벤트로 여러분의 사랑에 보답하고자 노력하고<br>
                있습니다.<br>
                오늘도 지니게임과 함께 신나는 하루를 보내세요!</p>
                <button class="button3">이벤트참여-></button>
        </div>
        <div id="event2">
            <h1>고객지원</h1>
                <p class="g1">지니게임은 고객의 목소리에 귀 기울입니다.<br>
                여러분의 목소리는 지니게임을 더욱 성장시킬 수 있습니다.</p>
            <button class="button3">무엇을 도와드릴까요?qweqe</button>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    #event1{
        display:inline-block;
        
        padding-right: 3%;
    }
    
    #event2{
        display:inline-block;
    }
    #event{
        margin-bottom: 3%;
    }
    #event h1{
        color:#424242;
        margin-left: 50%;
        font-weight: 300;
        margin-top:6%;
    }
    #event p{
        color:#424242;
        margin-left: 50%;
        font-weight: 50;
        font-size:22px;
    }
   
    .button3{
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
  .button3:hover {
  background-color: #2EE59D;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}
</style>