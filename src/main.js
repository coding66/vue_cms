// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import mintui from 'mint-ui'
import 'mint-ui/lib/style.css'
import './lib/css/mui.min.css'
import './lib/css/icons-extra.css'

import Axios from 'axios'
import moment from 'moment'
import Preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'



// Vue.use(Preview)


Vue.filter('formatdate',function(datestr,pattern='YYYY-MM-DD HH:mm:ss'){
//时间过滤器
	return moment(datestr).format(pattern)
})
Vue.prototype.$axios=Axios
// Vue.use(Vueresource)
// Vue.http.options.root='http://api01.bitspaceman.com:8000'
Vue.use(mintui)
Vue.use(Preview)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
