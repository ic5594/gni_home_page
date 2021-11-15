<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from  './components/footer/Footer.vue'
import Header from './components/header/Header.vue'

export default {
  components:{
    'Header':Header,
    'Footer':Footer
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