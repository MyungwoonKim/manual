<template>
  <div class="home">
    <img alt="Vue logo" src="../../../assets/logo.png">
    <!--특정 테그 사용 -->
    <b-button v-b-modal.modal-1>Launch demo modal</b-button>
    <HelloWorld></HelloWorld>
    <b-modal id="modal-1" title="BootstrapVue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
