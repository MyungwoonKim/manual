<template>
  <v-app id="app">
    <Header></Header>
    <Contents></Contents>
    <Footer></Footer>
  </v-app>
</template>
<script>
  import Header from "./views/Header";
  import Footer from "./views/Footer";
  import Contents from "./views/Contents";

  export default {
    name: 'App',
    components: {
      Header: Header,
      Footer: Footer,
      Contents: Contents
    }
  }
</script>

<style type="text/css" lang="css">
  #app {
    text-align: center;
    color: #2c3e50;
  }

  .base-width {
    max-width: 1185px;
    margin: 0 auto;
  }
</style>
