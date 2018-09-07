<template lang="pug">
    .btn-floating-container
        button.btn-floating
            i.fa.fa-shopping-cart
    
</template>

<script>
    
</script>

<style scoped lang="stylus">
.btn-floating-container
    right 50px
    bottom 50px
    position fixed

.btn-floating
    width 50px
    height 50px
    border-radius 50%
    box-shadow 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.2)
    border 1px solid rgba(245, 245, 245, 0.075)
    text-align center
    padding 0px
    font-size 24px
</style>