<template>
    <div>
        <div class="tr-ad" v-if="type == 0">
        TOP
            <a href="#"><img class="img-responsive" :src="imgBaseUrl + 'static/images/advertise/1.jpg'" alt="Image"></a>
        </div>
        <div class="tr-section tr-widget tr-ad ad-before" v-else-if="type == 1">
        SIDE
            <a href="#"><img class="img-responsive" :src="imgBaseUrl + 'static/images/advertise/2.jpg'" alt="Image"></a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'adsComp',
  data () {
    return {
      imgBaseUrl: process.env.imgBaseUrl
    }
  },
  props: {
    type: {
      type: Number,
      required: true
    }
  }
}
</script>
