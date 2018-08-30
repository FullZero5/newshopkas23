<template lang="pug">
  .container
    .section
      .capsule.cart.content

        div(v-if="total > 0")
          
            transition-group.content(name="items", tag="div")
              CartProductListItem(v-for="item in cart",
                                  :key="item.name",
                                  :item="item")

            .is-clearfix
              h3.total.is-pulled-left Итого : {{ amount | usdollar }}
              button.button.is-success.is-pulled-right(@click="setActualStep(1)") Далее >

        .empty.has-text-centered(v-else-if="!total")
          h3 Корзина пуста ¯\_(ツ)_/¯.
          nuxt-link(exact to="/")
            button.button На главную

        .has-text-centered(v-else)
          h2 Успешно!
          p Ваш заказ в обработке с вами свяжутся по указанным контактам.
          nuxt-link(exact to="/")
            button.button На главную
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import CartProductListItem from '@/components/CartProductListItem'

const { mapGetters, mapActions } = createNamespacedHelpers('cart')

export default {
  
  components: {
    CartProductListItem
  },
  filters: {
    usdollar: value => `${value} ₽`
  },
  data:() => ({

  }),
  computed: {
    ...mapGetters(['cart', 'total','amount'])
  },
  methods: {

  },
  beforeDestroy() {}
}
</script>
