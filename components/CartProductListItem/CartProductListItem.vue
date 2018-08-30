<template lang="pug">
  .box
    article.media
      .media-left
        picture.image.is-128x128
          source(:srcset="`${item.img}.webp`", type="image/webp")
          img(:src="`${item.img}.png`", :alt="`Фото ${item.name}`")
      .media-content
        .content
          p
            strong {{ item.name }}
            br
            span.itemCount {{ item.count }}
            |  x {{ item.price | usdollar }} = {{ item.count * item.price }} ₽
        nav.level.is-mobile
          .level-left
          .media-right
            button.delete.is-medium(@click="removeItem(item)", title="Удалить")

</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapActions } = createNamespacedHelpers('cart')

export default {
  name:'CartProductListItem',
  filters: {
    usdollar: function(value) {
      return `${value} ₽`
    }
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['removeItem'])
  }
}
</script>
