<template>
   <div id="navi">
        <div v-bind:key="number in [currentNumber]" transition="fade">
            <navi-gate id="navi-gate">
                <img :src="images[Math.abs(currentNumber) % images.length]" witdh="800px" height="600px"/>
            </navi-gate>
                <span v-on:click="prev" id="next-img">&lang;</span>
                <span v-on:click="next" id="prev-img">&rang;</span>
               
        </div>
    </div>
</template>
<script>
export default {
    el: 'image-slider',
    props:['navGate'],
    data:function(){
        return{
            images: this.navGate,
            currentNumber: 0,
            timer:null,
        };
    },
    methods: {
        prev: function() {
            this.currentNumber += 1
        },
        next: function() {
            this.currentNumber -= 1
        }
    }
}
</script>
<style>
#next-img{
    position: relative;
    left:430px;
    bottom:300px;
    user-select: none; /* standard syntax */
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
}
#prev-img{
    position: relative;
    left:1377px;
    bottom:300px;
    user-select: none; /* standard syntax */
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
}
#navi img{
    display : block;
    margin : auto;
     padding-top:50px;
}
#navi span{ 
    background-color: transparent; 
    color: black; 
    text-align: center; 
    border-radius: 50%; 
    padding: 10px 20px; 
    top: 50%; 
    font-size: 1.3em; 
    cursor: pointer; 
    background-color: #fff;
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.1);
 }
#navi span:hover{ 
    background-color: #2EE59D;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
} 


</style>
