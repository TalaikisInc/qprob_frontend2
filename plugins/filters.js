import Vue from 'vue'
import moment from 'moment'

Vue.filter('formatDate', function (value) {
  if (value) {
    return moment.utc(value).format('YYYY-MM-DD  hh:mm')
  }
})
