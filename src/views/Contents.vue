<template>
  <div class="Contents">
    <router-view></router-view>
    <p>{{ text }}</p>
    <h4 id="main">@fat</h4>
    <p v-for="i in 3">{{ text }}</p>
    <h4 id="skills">@mdo</h4>
    <p v-for="i in 3">{{ text }}</p>
    <h4 id="careers">one</h4>
    <p v-for="i in 2">{{ text }}</p>
    <h4 id="two">two</h4>
    <p>{{ text }}</p>
    <h4 id="three">three</h4>
    <p v-for="i in 2">{{ text }}</p>
    <h4 id="qna">@pi0</h4>
    <p v-for="i in 3">{{ text }}</p>
  </div>
</template>

<script>
  export default {
    name: 'Contents',
    data() {
      return {
        text: `
          Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla
          tempor. Laborum consequat non elit enim exercitation cillum aliqua
          consequat id aliqua. Esse ex consectetur mollit voluptate est in duis
          laboris ad sit ipsum anim Lorem. Incididunt veniam velit elit elit veniam
          Lorem aliqua quis ullamco deserunt sit enim elit aliqua esse irure. Laborum
          nisi sit est tempor laborum mollit labore officia laborum excepteur
          commodo non commodo dolor excepteur commodo. Ipsum fugiat ex est consectetur
          ipsum commodo tempor sunt in proident.
        `
      }
    }
  }
</script>
