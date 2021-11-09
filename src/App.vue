<template>
  <div id="app">
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import Body from './components/body/Body.vue'
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'

export default {
  components:{
    'Header':Header,
    'Body':Body,
    'Footer':Footer,
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