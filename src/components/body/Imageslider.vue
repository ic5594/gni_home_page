<template>
     <div v-bind:key="number in [currentNumber]" transition="fade">
        <div>
            <image-slider id="image-slider">
                <img :src="images[Math.abs(currentNumber)%images.length]" v-on:mouseover="stopRotation" v-on:mouseout="startRotation"/>
            <span v-on:click="prev" id="next-img">&lang;</span>
            <span v-on:click="next" id="prev-img">&rang;</span>
            </image-slider>
        </div>
    </div>
</template>
<script>
export default {
    el: 'image-slider',
    data: function() {
        return {
            images: [
                'https://www.gnigame.co.kr/wp-content/uploads/2018/08/Turnover-header-1영문.jpg', 'https://www.gnigame.co.kr/wp-content/uploads/2018/08/Starmonmasters-header-1.jpg',
                'https://www.gnigame.co.kr/wp-content/uploads/2018/08/Legendofhero-header-1영문.jpg', 'https://www.gnigame.co.kr/wp-content/uploads/2018/08/Monsteroffencehero-1영문.jpg',
                'https://www.gnigame.co.kr/wp-content/uploads/2018/08/Goldrunner-header-1영문.jpg', 'https://www.gnigame.co.kr/wp-content/uploads/2018/05/Title_Toyracing_2.jpg'
            ],
            currentNumber: 0,
            timer: null
            };
    },

    ready: function() {
        this.startRotation();
    },

    methods: {
        startRotation: function() {
            this.timer = setInterval(this.next, 4000);
        },

        stopRotation: function() {
            clearTimeout(this.timer);
            this.timer = null;
        },
       
        next: function() {
            this.currentNumber += 1
            if(this.currentNumber>=this.images.length)
                this.currentNumber=0
        },
        prev: function() {
            this.currentNumber -= 1
            if(this.currentNumber<=0)
                this.currentNumber=this.images.length-1
        }
    }

}
</script>
<style> 
#image-slider{
    width:100%;
}
image-slider{
    max-width: 100%;
}
.fade-transition {
    transition: all 0.8s ease;
    overflow: hidden;
    visibility: visible;
    opacity: 1;
    position: absolute;
}
.fade-enter, .fade-leave {
    opacity: 0;
    visibility: hidden;
}
#image-slider span{ 
    background-color: transparent; 
    color: white; 
    text-align: center; 
    border-radius: 50%; 
    padding: 10px 20px; 
    top: 50%; 
    font-size: 1.3em; 
    box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.1);
}
#image-slider span:hover{ 
    background-color: #2EE59D;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
}
#image-slider #prev-img{
    position: relative;
    left:1800px;
    user-select: none; /* standard syntax */
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
}
#image-slider #next-img{
    position: relative;
    left:3px;
    user-select: none; /* standard syntax */
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
}
</style>