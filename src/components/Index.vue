<template>
  <div id='index'>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import Body from './body/Body.vue'
import Footer from './footer/Footer.vue'

export default {
  name:'Index',
  components:{
    'Body':Body,
    'Footer':Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
