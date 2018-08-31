<template lang="pug">
  .sidearea
    .can-toggle.demo-rebrand-2.field
      input#e.switch.is-rtl(type="checkbox", name="e", v-model="trigger")
      label(for="e") Со скидкой
</template>

<script>
export default {
  name: 'AppSwitch',
  computed: {
    trigger: {
      get() { return this.$store.state.product.sale },
      set() { return this.$store.dispatch('product/switchSale') }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @require '../../node_modules/bulma-switch/dist/css/bulma-switch.min.css'
  .switch[type=checkbox]:checked+label[data-v-708469c4]::before,.switch[type=checkbox]:checked+label[data-v-708469c4]:before{background:#f4a00d
}
</style>

