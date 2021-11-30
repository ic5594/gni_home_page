<template>
    <div id="header">
      <router-link to="/" id="title"><img src="https://www.gnigame.co.kr/wp-content/uploads/2018/08/logo-white2.png" alt="logo" width="150" height="30"/></router-link>
          <ul class="menu">
          <li v-on:mouseover="mouseOver" v-on:mouseleave="mouseOut">
            <a href="#" id="games">Games v</a>
             <transition name="fade">
               <ul v-if="dropdwon" @click="dropdwon = false">
                 <li><a class="Drop"><router-link to="/turnover">Turnover</router-link></a></li>
                 <li><a class="Drop"><router-link to="/starmonmaster">StarmonMasters</router-link></a></li>
                 <li><a class="Drop"><router-link to="/legendofhero">LegendofHero</router-link></a></li>
                 <li><a class="Drop"><router-link to="/monsteroffencehero">MonsterOffenceHero</router-link></a></li>
                 <li><a class="Drop"><router-link to="/goldrunner">Goldrunner</router-link></a></li>
                 <li><a class="Drop"><router-link to="/toyracing">Toyracing</router-link></a></li>
                </ul>
              </transition>
          </li>
          <li><a class="nmenu"><router-link to="/kids">KIDS</router-link></a></li>
          <li><a class="nmenu"><router-link to="/comics">COMICS</router-link></a></li>
          <li><a class="nmenu"><router-link to="/event">EVENT</router-link></a></li>
          <li><a class="nmenu"><router-link to="/faq">FAQ</router-link></a></li>
        </ul>      
    </div>
</template>
<script>
export default{
    data:function() {
      return {
       dropdwon:false
      };
  },
  methods:{
    mouseOver: function(){
      this.dropdwon=true
    },
    mouseOut:function(){
      this.dropdwon=false
    }
  }
}
</script>
<style>
#games{
  position: relative;
  top: 10px;
}
.Drop{
  text-decoration: none;
  color:#999999
}
#header ul{
  margin-right: 19%;
}
#header a {
  display: block;
  text-align: center;
  margin: 0.1px;
  padding: 10px;
  text-decoration: none;
  font-weight: bold;
  color:#999999; 
  font-size: 14px;
}
li{
  height: 41px;
}
#header{
  background: black;
  display: flex;
  justify-content: space-between;
  height: 80px;
  width:100%;
  position:sticky;
  z-index: 100;
  top: 0;
}
#header a{
  font-weight: 2000;
}
#header img{
  display: inline-block;
  margin-left:250%;
  margin-top:10%;
}
#header li{
  color:#999999

}
#header ul li {
  display: inline-block;
}
.menu li ul {
  position: absolute;
  left:0px;
  top: 50px;
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
a{
  margin-top:1px;
}
.menu li ul li{
  width:95%;
  height: 100%;
}
.menu li ul li:hover {
  background: #444;
}
.fade-enter-active{
  transition: opacity .4s;
}

body{
  padding-top: 80px;
}
</style>
