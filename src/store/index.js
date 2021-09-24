import Vue from 'vue'
import Vuex from 'vuex'

import toolsPage from '@/store/modules/toolsPage'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    toolsPage
  }
})
