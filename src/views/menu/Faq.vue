<template>
    <div id='faq'>
        <h1><u>FAQ</u></h1>
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
    #faq{
        
        height: 100%;
    }
    body{
        background-color: white;
        height:640px
    }
    #faq h1{
        text-decoration: wavy;
        text-align: center;
    }
</style>