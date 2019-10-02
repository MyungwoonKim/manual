<template>
  <v-footer
    padless
  >
  <v-card
    id="qna"
    flat
    tile
    class="black--text text-center"
  >

    <v-card-text>
      <v-btn
        v-for="(icon, index) in icons"
        :key="icon"
        class="mx-4 black--text"
        @click="moveLink(index)"
        icon
      >
        <v-icon size="24px">{{ icon }}</v-icon>
      </v-btn>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text class="black--text pt-0">
      효율적으로 짠 코드로 사용자의 경험이 증대될 때, 새로운 방식의 개발을 진행 할 때
      가장 성취감을 느끼며, 성취감을 위해 노력하는 개발자 김명운입니다.
    </v-card-text>

    <v-card-text class="black--text">
      {{ new Date().getFullYear() }} — <strong>k7y7mn@gmail.com</strong>
    </v-card-text>
  </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',
    data: () => ({
      icons: [
        'fab fa-instagram',
        'fab fa-github',
        'fab fa-google',
      ],
      iconLink: [
        'https://www.instagram.com/k7y7mn/',
        'https://github.com/MyungwoonKim/manual',
        'mailto:k7y7mn@gmail.com'
      ]
    }),
    methods: {
      moveLink(index) {
        let url = this.iconLink[index];
        window.location.href = url;
      }
    }
  }
</script>

<style>
  #qna {
    padding-top: 40px;
    background-color: #fafafa;
    width: 100%;
  }
</style>
