<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div id="topContent" class="bg-dark">
      <b-jumbotron class="base-width top-margin" bg-variant="dark" text-variant="white">
        <template v-slot:header class="aabcs">
          <transition name="slide-fade">
            <div v-if="show" class="mobile-top-typography">
              Hello, Develop!
            </div>
          </transition>
        </template>
        <template v-slot:lead>
          <transition name="slide-fade">
            <div v-if="show" class="sub-title-typography">
              Myungwoon's Portfolio Blog For History
            </div>
          </transition>
        </template>
      </b-jumbotron>
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

  .top-margin {
    margin: 0 auto;
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
