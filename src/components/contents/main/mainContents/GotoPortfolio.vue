<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div id="gotoPortfolio">
    <v-hover>
      <template v-slot:default="{ hover }">
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-img id="danawa-img" src="https://cdn.vuetifyjs.com/images/cards/forest-art.jpg"></v-img>

          <v-card-text>
            <h2 class="title black--text">다나와 포트폴리오 보기</h2>
          </v-card-text>

          <v-fade-transition>
            <v-overlay
              v-if="hover"
              absolute
              color="#FFF"
            >
              <v-btn>
                <router-link class="portfolio-link" to="/portfolio">
                  포트폴리오 보러가기
                </router-link>
              </v-btn>
            </v-overlay>
          </v-fade-transition>
        </v-card>
      </template>
      </v-hover>
  </div>
</template>

<script>
    export default {
      name: "GotoPortfolio",
      data() {
        return {
          overlay: false
        }
      }
    }
</script>

<style scoped>
  #gotoPortfolio {
    margin-bottom: 40px;
  }

  .portfolio-link {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
</style>
