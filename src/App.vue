<template>
  <div id="app">
    <Header></Header>
    <Contents></Contents>
    <Footer></Footer>
  </div>
</template>
<script>
  import Header from "./views/Header";
  import Footer from "./views/Footer";
  import Contents from "./views/Contents";

  export default {
    name: 'home',
    components: {
      Header: Header,
      Footer: Footer,
      Contents: Contents
    }
  }
</script>

<style lang="stylus">
#app {
  font-family 'Avenir', Helvetica, Arial, sans-serif;
  text-align center;
  color #2c3e50;
}
</style>
