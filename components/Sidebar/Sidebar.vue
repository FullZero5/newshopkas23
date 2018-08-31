<template lang="pug">
  aside.is-light.is-radius
    .sidearea
      h4.subtitle.is-5 <strong>Внимание !</strong>
      p Цены на кассовые аппараты указаны <strong>без ФН</strong>
    .sidearea
      label.subtitle.is-5(for="pricerange") Цена :
        span  {{ pricerange }} ₽
      input.slider#pricerange(type="range"
                              :value="pricerange"
                              :min="min"
                              :max="max"
                              step="1"
                              @input="updateHighprice($event.target.value)")
      span.min.is-pulled-left {{ min }} ₽
      span.max.is-pulled-right {{ max }} ₽
    app-switch(v-if="!sale")
    .sidearea
      label.subtitle.is-5(for="category") Товар/Услуга
      .control.has-icons-left
        .select.is-medium
          select#category(@input="setCategory($event.target.value)")
            option(v-for="category in categories",
              :key="category",
              :selected="category === categorySelected",
              :value="category") {{ category }}
          .icon.is-small.is-left
            i.fas.fa-sitemap
    .sidearea.is-hidden-mobile
      h4.subtitle.is-5 Контакты
      a.button.is-light.is-marginless-mobile(
                                href="callto:+78612312340",
                                rel="noopener")
                span.icon
                  i.fab.fa.fa-phone
                span 8(861)231-23-40
      a.button.is-light.is-marginless-mobile(
                                href="callto:+78612312664",
                                rel="noopener")
                span.icon
                  i.fab.fa.fa-phone
                span 8(861)231-26-64
      a.button.is-light.is-marginless-mobile(
                                href="mailto:2312340@kas23.ru",
                                rel="noopener")
                span.icon
                  i.fab.fa.fa-envelope
                span 2312340@kas23.ru
      
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import Switch from '@/components/Switch'

const { mapActions, mapGetters } = createNamespacedHelpers('product')

export default {
  name: 'Sidebar',
  components: {
    AppSwitch: Switch
  },
  props: {
    sale: {
      type: Boolean,
      default: false
    },
    pricerange: {
      type: [Number, String],
      default: 10000
    }
  },
  data() {
    return {
      min: 8000,
      max: 34000
    }
  },
  methods: {
    ...mapActions(['updateHighprice', 'setCategory'])
  },
  computed: {
    ...mapGetters(['categories', 'categorySelected'])
  }
}
</script>

<style lang="stylus" scoped>
  aside
    float left
    width 19.1489%
    padding 1.5rem
    position sticky

  .sidearea
    border-bottom 1px solid #ccc
    padding 20px 0

    &:first-of-type
      padding-top 0
      padding-bottom 40px

    &:last-of-type
      border none
      padding-bottom 0

    .subtitle
      padding-bottom 10px
      margin-bottom 0
      display block

  span
    font-family 'Barlow', sans-serif

  .min,
  .max
    font-size 12px
    color #565656
</style>
