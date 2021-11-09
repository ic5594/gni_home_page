<template>
    <div id="nav">
      <img src="https://www.gnigame.co.kr/wp-content/uploads/2018/08/logo-white2.png" alt="logo" width="150" height="30"/>
        
          <ul class="menu">
          <li @mouseover="dropdwon = true" @mouseleave="dropdwon = false">
            <a href="#" id="Dropdown">Games v</a>
             <transition name="fade">
               <ul v-if="dropdwon" @click="dropdwon = false">
                 <li><a href="#" class="Drop">Turnover</a></li>
                 <li><a href="#" class="Drop">StarmonMasters</a></li>
                 <li><a href="#" class="Drop">LegendofHero</a></li>
                 <li><a href="#" class="Drop">MonsterOffenceHero</a></li>
                 <li><a href="#" class="Drop">Goldrunner</a></li>
                 <li><a href="#" class="Drop">Toyracing</a></li>
                </ul>
              </transition>
          </li>
          <li><a>KIDS</a></li>
          <li><a>COMICS</a></li>
          <li><a>EVENT</a></li>
          <li><a>FAQ</a></li>
        </ul>
      
    </div>
</template>
<script>
export default{
    data:function() {
      return {
       dropdwon:false
      };
  }   
}
</script>
<style>
#Dropdown{
  text-decoration: none;
  color:#999999
}
.Drop{
  text-decoration: none;
  color:#999999
}
#nav ul{
  margin-right: 19%;
}
#nav a {
  display: block;
  text-align: center;
  margin: .25rem;
  padding: .5rem 1rem;
  text-decoration: none;
  font-weight: bold;
  color: gray; 
  font-size: 13px; 
}

#nav{
  background: black;
  display: flex;
  justify-content: space-between;
  height: 70px;
}
#nav a{
  font-weight: 2000;
}
#nav img{
  display: inline-block;
  margin-left:20%;
  margin-top:1%;
}
#nav li{
  color:#999999

}
#nav ul li {
        display: inline-block;
    }
.menu li ul {
  position: absolute;
  left: 0;
  top: 45px;
  margin: 0;
  padding: 0;
  
}
.menu li {
  display:block;
  float: left;
  position: relative;
  background: black;
  color: #999999;  
}
.menu li ul li:hover {
  background: #444;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
