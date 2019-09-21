<template>
  <div class="home">
    <top-content></top-content>
    <skills></skills>
    <careers></careers>
    <goto-portfolio></goto-portfolio>
    <pre>
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
      aaa
    </pre>
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
    },
    mounted() {
      this.$nextTick(() => {
        if (this.$store.state.header.skipEvent) {
          let element = null;

          // 스크롤 위치 파악
          if (this.$store.state.header.topBtn.skills) {
            element = document.getElementById('skills');
          } else if (this.$store.state.header.topBtn.careers) {
            element = document.getElementById('careers');
          } else if (this.$store.state.header.topBtn.qna) {
            element = document.getElementById('qna');
          } else {
            // element = document.getElementById('app');
          }

          // 스크롤 이동 처리
          if (element != null && element != undefined) {
            element.scrollIntoView(true);
          }

          // 상단 해더 스킵 이벤트 끄기
          this.$store.commit('skipEventHandler', false);
        }
      });
    }
  }
</script>

<style scoped>
</style>
