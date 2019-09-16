<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div id="topContent" class="bg-dark">
      <b-jumbotron class="base-width" bg-variant="dark" text-variant="white">
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
  #topContent {
    text-align: left;
  }

  .sub-title-typography:first-child {
    margin-top: 30px;
  }

  @media screen and (max-width: 763px) {
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
