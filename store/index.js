import Vuex from 'vuex'
import { firebaseMutations } from 'vuexfire'
import cart from '@/store/modules/cart'

const store = () => {
  return new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
      cart
    },
    mutations: {
      ...firebaseMutations
    }
  })
}

export default store
