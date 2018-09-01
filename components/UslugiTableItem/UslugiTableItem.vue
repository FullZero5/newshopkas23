<template lang="pug">
        tr
            th
                figure.media-left
                    p.image.is-64x64
                        img.lazyload(:data-srcset="`${item.img}.png`",
                            :alt="`Фото of ${item.name}`")
            th
                p {{item.name}}
                p.is-hidden-mobile {{item.description}}
            th
                p {{item.price | usdollar}}
            th
                button.button.is-large.is-warning.add(@click="addItem(item)", aria-label="Купить")
                    span.icon.is-medium
                        i.fa.fa-shopping-cart
                    
    
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { slug } from '@/helpers'
const { mapActions } = createNamespacedHelpers('cart')

export default {
  name: 'Media',
  filters: {
    usdollar: value => `${value} ₽`
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    slug() {
      return slug(this.item.name)
    }
  },
  methods: {
    ...mapActions(['addItem'])
  }
}
</script>