<template>
<div>
  <header-component></header-component>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-sm-8">
          <div class="tr-content">
            <ad-component :type="0"></ad-component>

            <div class="tr-section bg-transparent">
            <div class="section-title">
              <h1><span><a href="#"><!-- Section title --></a></span></h1>
            </div>
            <div class="row">
                <div class="tr-post">
                  <div class="entry-header">
                    <div class="entry-thumbnail" v-if="post.image">
                      <a :href="baseUrl+post.slug+'/'">
                      <img class="img-responsive" :src="imgBaseUrl+post.image" :alt="post.title"></a>
                    </div>
                  </div>
                  <div class="post-content">
                    <div v-bind:class="[(post.image) ? 'crop' : 'crop-no-img']">
                          <a :href="baseUrl+keyword+'/source/'+post.category_id.Slug+'/'" v-if="post.category_id.Thumbnail">
                          <img class="img-responsive circle-img" :src="imgBaseUrl+post.category_id.Thumbnail" :alt="post.category_id.Title"></a>
                        </div>
                        <div class="entry-meta">
                          <ul>
                            <li>By <a :href="baseUrl+keyword+'/source/'+post.category_id.Slug+'/'">{{ post.category_id.Title }}</a></li>
                            <li>{{ post.date | formatDate }}</li>
                          </ul>
                        </div>
                        <h2 class="entry-title">
                        <a :href="baseUrl+post.slug+'/'">{{ post.title }}</a>&nbsp;
                        <div v-bind:class="[(post.sentiment >= 0) ? 'sentiment-pos' : 'sentiment-neg']" v-if="post.sentiment">[{{ post.sentiment }}]</div></h2>
                        <p><span v-for="tag in tags" :key="tag.id"><a :href="baseUrl + 'tag/' + tag.slug + '/'">{{ tag.title }}</a> | </span></p>
                        <hr />
                        <div v-if="post.status == 0">
                          <p>{{ post.summary }}</p>
                        </div>
                        <div v-else>
                          <span v-html="post.content"></span>
                        </div>
                        <social-sharing :url="baseUrl + post.slug + '/'" :title="post.title"></social-sharing>
                        <div class="comment-list">
                          <disqus :shortname="disqusID" :identifier="post.title" :url="baseUrl + post.slug + '/'"></disqus>
                        </div>
                  </div>
                </div>
            </div>
            <paginator-component v-once :pages="calcPages"></paginator-component>            
          </div>
        </div>
      </div>

      <div class="col-sm-4 tr-sidebar">
        <div>
          <ad-component :type="1"></ad-component>
          <div class="tr-section tr-widget tr-ad ad-before">
            <popular-posts></popular-posts>
          </div>
        </div>
      </div>
    </div>
  </div>
<footer-component></footer-component>
</div>
</template>

<script>
import axios from 'axios'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Paginator from '../components/Paginator.vue'
import Popular from '../components/PopularSidebar.vue'
import SocialSharing from '../components/SocialSharing.vue'
import Ads from '../components/Ads.vue'
import VueDisqus from 'vue-disqus/VueDisqus.vue'

export default {
  name: 'post',
  data () {
    return {
      post: null,
      tags: [],
      baseUrl: process.env.baseUrl,
      imgBaseUrl: process.env.imgBaseUrl,
      disqusID: process.env.disqusID
    }
  },
  asyncData ({ req, params }) {
    return axios.all([
      axios.get('/post/' + params.postSlug + '/'), axios.get('/post_tags/' + params.postSlug + '/'), axios.get('/post_hit/' + params.postSlug + '/')])
      .then(axios.spread(function (posts, tags, hit) {
        return { post: posts.data[0], tags: tags.data }
      }))
  },
  components: {
    'header-component': Header,
    'footer-component': Footer,
    'popular-posts': Popular,
    'paginator-component': Paginator,
    'social-sharing': SocialSharing,
    'ad-component': Ads,
    'disqus': VueDisqus
  }
}
</script>
