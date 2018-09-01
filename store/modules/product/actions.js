import { firebaseAction } from 'vuexfire'
import { db } from '@/plugins/firebase'

export default {
  switchSale: ({ commit }) =>
    commit('SWITCH_SALE'),
  updateHighprice: ({ commit }, value) =>
    commit('UPDATE_HIGH_PRICE', value),
  setCategory: ({ commit }, value) =>
    commit('SET_CATEGORY', value),
  setType: ({ commit }, value) =>
    commit('SET_TYPE', value),
  setProductsRef: firebaseAction(({ bindFirebaseRef }, value) =>
    bindFirebaseRef('products', db.ref(value).orderByChild("article"))
  )
}
