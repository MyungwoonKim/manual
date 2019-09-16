<template>
  <div class="home">
    <top-content></top-content>
    <skills></skills>
    <careers></careers>
    <goto-portfolio></goto-portfolio>
    <qna></qna>
  </div>
</template>

<script>
  import TopContent from "./mainContents/TopContent";
  import Skills from "./mainContents/Skills";
  import Careers from "./mainContents/Careers";
  import GotoPortfolio from "./mainContents/GotoPortfolio";
  import Qna from "./mainContents/Qna";

  export default {
    name: 'Home',
    components: {
      TopContent: TopContent,
      Skills: Skills,
      Careers: Careers,
      GotoPortfolio: GotoPortfolio,
      Qna: Qna
    }
  }
</script>

<style scoped>
  #top-bg {
    background: ;
  }
</style>
