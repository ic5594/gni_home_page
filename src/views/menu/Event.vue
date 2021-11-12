<template>
    <div id='eventpage'>
        
        <h1><u>EVENT</u></h1>
        <body></body>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from '../../components/footer/Footer.vue'
export default {
    components:{
        'Footer':Footer
    }
}
</script>
<style>
    #eventpage{
        
        height: 100%;
    }
    body{
        background-color: white;
        height:640px
    }
    #eventpage h1{
        text-decoration: wavy;
        text-align: center;
    }
</style>