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
    return axios.get('/cats/' + params.page + '/').then(response => {
      return { categories: response.data }
    }).catch(e => {
      console.log(e)
    })
  }
}
</script>

<style></style>