<template>
  <div>
    <a :href="fbURL" title="Share on Facebook" target="popup" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(document.URL) + '&t=' + encodeURIComponent(document.URL), 'popup', width=600, height=600'); return false;" rel="nofollow">
      <i class="fa fa-fw fa-facebook"></i> 
    </a>
    <a :href="twURL" rel="nofollow" target="popup" title="Tweet" onclick="window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(document.title) + ':%20'  + encodeURIComponent(document.URL), 'popup', width=600, height=600'); return false;">
      <i class="fa fa-fw fa-twitter"></i> 
    </a>
    <a :href="gURL" rel="nofollow" target="popup" title="Share on Google+" onclick="window.open('https://plus.google.com/share?url=' + encodeURIComponent(document.URL), 'popup', width=600, height=600'); return false;">
      <i class="fa fa-fw fa-google-plus"></i> 
    </a>
    <a :href="lURL" rel="nofollow" target="popup" title="Share on LinkedIn" onclick="window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(document.URL) + '&title=' +  encodeURIComponent(document.title), 'popup', width=600, height=600'); return false;">
      <i class="fa fa-fw fa-linkedin"></i> 
    </a>
  </div>
</template>

<script>
export default {
  name: 'socialSharingComp',
  data () {
    return {
      fbURL: 'https://www.facebook.com/sharer/sharer.php?u=' + this.url + '&t=',
      twURL: 'https://twitter.com/intent/tweet?source=' + this.url + '&text=' + this.title + ': ' + this.url + '&via=' + process.env.twHandle,
      gURL: 'https://plus.google.com/share?url=' + this.URL,
      lURL: 'http://www.linkedin.com/shareArticle?mini=true&url=' + this.url + '&title=' + this.title + '&summary=&source=' + this.url
    }
  },
  props: {
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>