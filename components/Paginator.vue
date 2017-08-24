<template>
<ul class="pagination">
  <li v-for="p in pages"><a :href="'/page/' + p + '/'">{{ p }}</a></li>
</ul>
</template>

<script>
export default {
  name: 'paginatorComp',
  data () {
    return {
      baseUrl: process.env.baseUrl
    }
  },
  props: {
    pages: {
      type: Number,
      required: true
    }
  }
}
</script>

<style></style>