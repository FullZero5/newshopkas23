<template lang="pug">
    .notification.is-danger.is-marginless.is-sticky-bottom
        button.delete
        p Это очень важное сообщение
        
</template>

<style scoped lang="stylus">
.notification
    .is-sticky-bottom 
      border-radius: 0
      opacity: 0.95
      width: 100%
      border-top: 1px solid rgba(0, 0, 0, 0.2)
      bottom: 0
      position: fixed
      z-index: 1000


</style>
