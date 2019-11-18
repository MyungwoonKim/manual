<template>
    <div id="topContent" class="bg-dark">
      <v-parallax
        dark
        height="600"
        src="../../../../assets/main/topContent/top_title_img.jpg"
      >
        <v-row
          align="end"
          justify="center"
        >
          <transition name="slide-fade">
            <div v-if="show" class="mobile-top-typography">
              Hello, Develop!
            </div>
          </transition>
        </v-row>
        <v-row
          align="start"
          justify="center"
        >
          <transition name="slide-fade">
            <div v-if="show" class="sub-title-typography">
              Myungwoon's Portfolio Blog For History
            </div>
          </transition>
        </v-row>
        <v-row
          align="start"
          justify="center"
        >
          <transition name="slide-fade">
            <v-btn to="/portfolio" large color="primary">포트폴리오 보러가기</v-btn>
          </transition>
        </v-row>
      </v-parallax>
    </div>
</template>

<script>
  export default {
    name: 'TopContent',
    data() {
      return {
        show: false
      }
    },
    mounted() {
      this.show = true;
    }
  }
</script>

<style scoped>
  .sub-title-typography:first-child {
    margin-top: 30px;
  }

  .sub-title-typography {
    font-size: 20px;
  }

  .mobile-top-typography {
    font-size: 70px;
    line-height: 120%;
  }

  @media screen and (max-width: 763px) {
    #topContent {
      text-align: left;
    }
    .mobile-top-typography {
      max-width: 300px;
    }
    .sub-title-typography {
      max-width: 300px;
      font-size: 22px;
    }
  }

  .slide-fade-enter-active {
    transition: all .5s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to {
    transform: translateY(10px);
    opacity: 0;
  }
</style>
