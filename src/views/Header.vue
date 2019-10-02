<template>
  <header class="header">
    <div class="bg-dark">
      <b-navbar class="base-width" id="top-nav" toggleable="lg" type="dark" variant="dark">
        <router-link class="navbar-brand" to="/"
                     @click.native="topLinkClick('main')">
          <span>
            <img id="top-logo" src="../../public/log/kmw-log-middle.png"  class="d-inline-block align-top" alt="KMW">
            KMW
          </span>
        </router-link>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <li class="nav-item">
              <router-link class="nav-link" to="/"
                           @click.native="topLinkClick('main')">
                <span id="top-link-main">메인</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/"
                           @click.native="topLinkClick('skills')">
                <span id="top-link-skills">요약</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/"
                           @click.native="topLinkClick('careers')">
                <span id="top-link-careers">경력사항</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/portfolio"
                           @click.native="topLinkClick('portfolio')">
                <span id="top-link-portfolio">포트폴리오</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/"
                           @click.native="topLinkClick('qna')">
                <span id="top-link-qna">문의</span>
              </router-link>
            </li>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      /**
       * 상단 해더 클릭 이벤트
       * @param isHighlight
       */
      topLinkClick(isHighlight) {
        // 하이라이트 전부 끄기
        this.$store.commit('topBtnAllFalse');

        if (!this.$store.state.header.skipEvent) {
          // 상단 이벤트별 scroll 처리
          if (isHighlight == 'skills') {
            document.getElementById('skills').scrollIntoView(true);
          } else if (isHighlight == 'careers') {
            document.getElementById('careers').scrollIntoView(true);
          } else if (isHighlight == 'qna') {
            document.getElementById('qna').scrollIntoView(true);
          } else {
            document.getElementById('app').scrollIntoView(true);
          }
        }

        // 클릭한 버튼 하이라이트 처리
        this.$store.commit('topBtnHighlight', isHighlight);
      }
    }
  }
</script>

<style lang="css">
  #top-logo {
    width: 30px;
  }
</style>
