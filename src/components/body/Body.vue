<template>
    <div id="app2">
        <Imageslider></Imageslider>
        <Kidservice></Kidservice>
        <Gnianime></Gnianime>
        <Event></Event>
    </div>
</template>
<script>
import Imageslider from './Imageslider.vue'
import Kidservice from './Kidservice.vue'
import Gnianime from './Gnianime.vue'
import Event from './Event.vue'

export default {
    components:{
    'Imageslider':Imageslider,
     'Kidservice':Kidservice,
     'Gnianime':Gnianime,
     'Event':Event
    }
}
</script>
<style>
body{
    margin:0;
    padding:0;
    max-width:100%
}

</style>