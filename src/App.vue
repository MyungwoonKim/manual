<template>
  <div id="app">
    <Header class="header-fix"></Header>
    <Contents class="header-fix-top-margin"></Contents>
    <Footer></Footer>
  </div>
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
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }

  .base-width {
    max-width: 1024px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1024px) {
    .header-fix {
      position:fixed;
      width: 100%;
    }

    .header-fix-top-margin {
      padding: 56px;
    }
  }


</style>
