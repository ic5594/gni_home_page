<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/header/Header.vue'

export default {
  components:{
    'Header':Header 
}
}
</script>
<style>
body{
margin:0;
padding:0;
overflow-x: hidden;

}
</style>