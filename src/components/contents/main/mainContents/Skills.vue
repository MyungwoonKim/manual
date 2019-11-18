<template>
  <div id="skills">
    <div class="skill">
      <h3>다양한 플랫폼과 협업을 중시하는 기술을 가지고 있습니다.</h3>
    </div>
    <div class="base-width skill">
      <v-container>
        <v-row>
          <v-col
            class="skill-content"
            cols="6"
            md="4"
          >
            <v-card
              class="pa-2"
              tile
              color="#f0f5f8"
              outlined
            >
              <v-icon
                large
                color="#2c3e50"
              >
                fad fa-users
              </v-icon>
              <v-card-text>
                <p class="card-title font-weight-bold">회원 서비스</p>
                <p class="card-content ">
                  회원 및 개인정보 취급-개발 업무를 담당하고 있으며 회원관리가 서비스에 미치는 영향도를 잘 알고 있습니다. 또한 개인정보 정합성과 개인정보 관리의 중요성을 알고 있습니다.
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            class="skill-content"
            cols="6"
            md="4"
          >
            <v-card
              class="pa-2"
              color="#f0f5f8"
              outlined
              tile
            >
              <v-icon
                large
                color="#2c3e50"
              >
                fas fa-code
              </v-icon>
              <v-card-text>
                <p class="card-title font-weight-bold">플랫폼</p>
                <p class="card-content">Spring Framework와 Spring boot를 기반으로 로그인서비스, 회원 API, 개인정보 API를 개발함으로써
                  SQL, NoSQL을 사용한 데이터 관리와 시큐어 코딩의 경험을 가지고 있습니다.</p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col
            class="skill-content"
            cols="6"
            md="4"
          >
            <v-card
              class="pa-2"
              color="#f0f5f8"
              outlined
              tile
            >
              <v-icon
                large
                color="#2c3e50"
              >
                mdi-domain
              </v-icon>
              <v-card-text>
                <p class="card-title font-weight-bold">자동화 및 협업 도구</p>
                <p class="card-content">maven, Jenkins을 사용한 자동화 도구의 경험과 Jira, Github을 사용한 협업의 경험을 기반으로
                더 완벽한 SCM(git, svn)관리와 높은 능률의 팀워크를 지향하고 있습니다.</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
    export default {
      name: "Skills",
      data() {
        return {
          popupSkills: false
        }
      }
    }
</script>

<style scoped>
  .card-title {
    font-size: 22px;
    color: #2c3e50;
  }

  .card-content {
    font-size: 15px;
    color: #2c3e50;
  }

  #skills {
    border: 0px;
    padding-top: 50px;
    padding-bottom: 30px;
    background-color: rgb(240, 245, 248);
  }

  .skill {
    margin-bottom: 30px;
  }

  .skill-content > pa-2 {
    background: none;
  }

  @media screen and (max-width: 780px) {
    .skill-content {
      display: inline-block;
      min-width: 100%;
    }
  }
</style>
