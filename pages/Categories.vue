<template>
</template>

<script>
import axios from 'axios'

export default {
  name: 'categories',
  data () {
    return {
      categories: []
    }
  },
  asyncData ({ req, params }) {
    return axios.get('/cats/0/').then(response => {
      return { categories: response.data }
    }).catch(e => {
      console.log(e)
    })
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style></style>