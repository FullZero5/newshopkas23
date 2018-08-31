export default {
  SWITCH_SALE: state => { state.sale = !state.sale },
  UPDATE_HIGH_PRICE: (state, value) => { state.highprice = value },
  SET_CATEGORY: (state, value) => { state.categorySelected = value },
  SET_TYPE: (state, value) => { state.typeProductSelected = value }
}
