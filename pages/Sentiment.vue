<template>
<div>
  <header-component></header-component>
    <div class="col-sm-9">
      <div class="row">
        <div class="col-sm-8">
          <div class="tr-content">
            <ad-component :type="0"></ad-component>

          <div class="tr-section bg-transparent">
            <div class="row">

            <chart :data="sentiment" />

            </div>
          </div>
        </div>
      </div>

      <div class="col-sm-4 tr-sidebar">
        <div>
          <ad-component :type="1"></ad-component>
          <div class="tr-section tr-widget tr-ad ad-before">

          </div>
        </div>
      </div>
    </div>
  </div>
<footer-component></footer-component>
</div>
</template>

<script>
import SentimentChart from '../plugins/chart.js'

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Ads from '../components/Ads.vue'

import axios from 'axios'

export default {
  data () {
    return {
      sentiment: [],
      baseUrl: process.env.baseUrl,
      imgBaseUrl: process.env.imgBaseUrl,
      title: process.env.siteName
    }
  },
  asyncData ({ req, params }) {
    return axios.get('/sentiment/')
      .then((response) => {
        return { sentiment: response.data }
      })
  },
  components: {
    'header-component': Header,
    'footer-component': Footer,
    'ad-component': Ads,
    'chart': SentimentChart
  },
  head () {
    return {
      title: 'Sentiment | ' + this.title
    }
  }
}
</script>

<style>
</style>
