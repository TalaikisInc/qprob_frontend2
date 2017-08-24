<template>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      tags: this.tags
    }
  },
  methods: {
    fetchData () {
      axios.get('/top_tags/').then(response => {
        this.tags = response.data
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