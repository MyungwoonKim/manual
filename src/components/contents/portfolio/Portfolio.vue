<template>
  <div class="Portfolio">
    Portfolio
    <Danawa></Danawa>
  </div>
</template>

<script>
  import Danawa from "./portfolioContents/Danawa";

  export default {
    name: 'Portfolio',
    components: {
      Danawa: Danawa
    },
    created() {
      this.$store.commit('skipEventHandler', true);
    }
  }
</script>

<style scoped>

</style>
