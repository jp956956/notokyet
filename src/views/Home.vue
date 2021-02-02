<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <b-carousel-slide
        caption="2020總冠軍~~統一獅"
        img-src="@/assets/統一.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption=""
        img-src="@/assets/樂天.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption=""
        img-src="@/assets/林安可.jpg"
      ></b-carousel-slide>
      
      <b-carousel-slide
        caption=""
        img-src="@/assets/富邦.jpg"
      ></b-carousel-slide>

      <b-carousel-slide
        caption=""
        img-src="@/assets/米蘭達.jpg"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<style>
  .carousel-caption {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }


</style>