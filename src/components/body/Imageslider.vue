<template>
     <div v-bind:key="number in [currentNumber]" transition="fade">
        <div>
            <image-slider id="image-slider">
                <img :src="images[currentNumber%images.length]" v-on:mouseover="stopRotation" v-on:mouseout="startRotation"/>
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
            this.timer = setInterval(this.next, 2000);
        },

        stopRotation: function() {
            clearTimeout(this.timer);
            this.timer = null;
        },
       
        next: function() {
            this.currentNumber += 1
        },
        prev: function() {
            this.currentNumber -= 1
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
</style>