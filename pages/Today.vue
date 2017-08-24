<template>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      posts: this.posts
    }
  },
  methods: {
    fetchData () {
      axios.get('https://api.qprob.com/v2.0/today/0/').then(response => {
        this.posts = response.data
      }).catch(e => {
        console.log(e)
      })
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style></style>