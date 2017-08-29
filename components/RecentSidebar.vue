<template>
<div class="tr-section tr-widget">
    <div class="widget-title">
        <span>Recent articles</span>
    </div>
    <ul class="medium-post-list">
        <li class="tr-post" v-for="post in posts">
			    <div class="post-content">
			      <div class="catagory">
				      <a :href="baseUrl+'source/'+post.category_id.Slug+'/'">{{ post.category_id.Title }} [{{ post.hits }}]</a>
				    </div>
			      <h2 class="entry-title">
				      <a :href="baseUrl+post.slug+'/'">{{ post.title }}</a>
				    </h2>
			    </div>
		    </li>
	  </ul>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'recentComp',
  data () {
    return {
      posts: this.posts,
      baseUrl: process.env.baseUrl,
      keyword: process.env.KEYWORD
    }
  },
  methods: {
    fetchPosts () {
      axios.get('/posts/0/').then(response => {
        this.posts = response.data
      }).catch(e => {
        console.log(e)
      })
    }
  },
  mounted () {
    this.fetchPosts()
  }
}
</script>

<style></style>