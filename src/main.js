import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueCordova from 'vue-cordova'
import VueHead from 'vue-head'
import VueUploadComponent from 'vue-upload-component'
import Datatable from 'vue2-datatable-component'
import _ from 'lodash'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import i18n from '@/i18n'
import LRU from 'lru-cache'
import UploadButton from 'vuetify-upload-button'
import 'vue2-dropzone/dist/vue2Dropzone.css'
const themeCache = LRU({
  max: 10,
  maxAge: 1000 * 60 * 60 // 1 hour
})
Vue.component('file-upload', VueUploadComponent)
Vue.use(_)
Vue.use(require('vue-moment'))
Vue.use(UploadButton)
Vue.use(Datatable)
Vue.use(Vuetify, {
  lang: {
    t: (key, ...params) => i18n.t(key, params)
  },
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  },
  options: {
    minifyTheme: function (css) {
      return process.env.NODE_ENV === 'production'
        ? css.replace(/[\s|\r\n|\r|\n]/g, '')
        : css
    },
    themeCache
  }
})
Vue.config.productionTip = false
Vue.use(VueCordova)
Vue.use(VueHead)

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const routName = to.name
  let { currentUser } = store.state.AppStore
  if (currentUser === null && requiresAuth) {
    next('/login')
  } else {
    if (currentUser && routName === 'Login') {
      next('/')
    } else {
      next()
    }
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App },
  head: {
    meta: [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
      }
    ]
  }
})
