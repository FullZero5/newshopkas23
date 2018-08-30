<template lang="pug">
  .container
    .section
      app-hero
</template>

<script>
import Hero from '@/components/Hero'

export default {
  components: {
    AppHero: Hero
  },
  computed: { },
  created () { }
}
</script>

<style lang="stylus" scoped>
  .content
    /*no grid support*/
    width 79.7872%
    /* grid */
    display grid
    grid-template-columns repeat(3, 1fr)
    grid-gap 1rem
    padding 0
</style>