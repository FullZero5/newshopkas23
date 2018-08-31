<template lang="pug">
  section.hero
    .hero-head
      app-header
    .hero-body
      nuxt
    .hero-footer
      .container.has-text-centered
        .columns
          .column.is-3.is-offset-2
            h2 Дополнительно
          .column.is-3
            h2 Написать
          .column.is-4
            h2 Новости
          
        p <strong>ООО "Маяк Кубани", </strong>
          a(target="_blank", href="https://goo.gl/maps/MBEoU5R1eAm", rel="noopener") 350075  г. Краснодар, ул. Стасова, 179
    </nav>
</template>

<script>
import Header from '@/components/Header'

export default {
  components: { AppHeader: Header }
}
</script>

<style lang="stylus">
  @require '../node_modules/bulma/css/bulma.min.css'
  @require '../node_modules/@fortawesome/fontawesome-free/css/all.css'
  @require './css/_transition'
  @require './css/_slider'

  html
    overflow-y auto

  .section
    padding 3rem 0 1.5rem

  .hero
    min-height 100vh

    .hero-body
      flex 1

    .hero-footer
      margin-bottom 0.5rem

  .is-light
    background-color #f5f5f5
    color #363636

  $card-radius = 5px
  .is-radius
    border-radius $card-radius

  @media (max-width: 600px)
    aside
      width 100% !important
      margin-bottom 10px !important

    .content
      width 100% !important
      grid-template-columns 1fr !important

  @media (min-width: 601px) and (max-width: 900px)
    .content
      grid-template-columns repeat(2, 1fr) !important

  .has-text-info
    color: #f4a00d!important
</style>
