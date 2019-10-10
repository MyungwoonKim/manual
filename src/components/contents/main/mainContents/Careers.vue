<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <div id="careers">
    <div class="careers-header-pc">
      김명운은 <p id="careers-total-count-pc">{{careers.date}}</p> 차 개발자 입니다.
    </div>
    <div class="careers-header-mobile">
      김명운은<br/>
      <p id="careers-total-count-mobile">{{careers.date}}</p><br/>
      차 개발자 입니다.<br/>
    </div><br/>
    <v-timeline class="careers-timeline">
      <v-timeline-item
        v-for="(year, i) in years"
        :key="i"
        :color="year.color"
        small
      >
        <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${year.color}--text`"
          v-text="year.year"
        ></span>
        </template>
        <v-card class="elevation-2">
          <v-card-title class="headline">{{year.title}}</v-card-title>
          <v-card-text class="contentline">
            {{ year.content }}
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
    export default {
      name: 'Careers',
      data() {
        return {
          careers: {
            startDate: '2017/09/01 09:00:00',
            date: '2년 1개월 19일 9시 42분 10초'
          },
          years: [
            {
              color: 'orange',
              year: '2017.09',
              title: '다나와 입사',
              content: '회원 및 개인정보 담당 개발자',
            },
            {
              color: 'orange',
              year: '2018.03',
              title: '다나와 계정 관리 프로세스 개발',
              content: '일반 / 관리자 정책 개선 및 계정 관리 프로세스',
            },
            {
              color: 'orange',
              year: '2018.06',
              title: '개인정보 채널 단일화 프로젝트',
              content: '개인정보 채널 단일 및 개인정보 대량유출 방지를 위한 개인정보 관리 프로젝트',
            },
            {
              color: 'orange',
              year: '2018.10',
              title: '회원 관리자 서비스 신규 개발',
              content: '레거시코드 제거 및 플렛폼 변경으로 유지보수 기능 확대',
            },
            {
              color: 'orange',
              year: '2019.01',
              title: '소셜-일반회원 전환 프로세스 개발',
              content: '소셜 서비스가 종료될 것을 대비하기 위해 소셜-일반회원간 전환 프로세스 개발',
            },
            {
              color: 'orange',
              year: '2019.04',
              title: '통합 로그인 개선',
              content: '오래된 로그인 UI/UX 개선, 불필요한 로그인 소스 리펙토링 및 튜닝',
            },
            {
              color: 'orange',
              year: '2019.09',
              title: '내 권한 관리 프로젝트',
              content: '기존 업무효율을 개선 및 내 권한 상황과 권한을 요청 및 관리 할 수 있는 프로세스 개발',
            }
          ]
        }
      },
      methods: {
        updateDate() {
          setInterval(function() {
            // 년 월 시 분 초 계산
            let start = new Date(this.careers.startDate);
            let current = new Date();
            let time = current - start;
            time = parseInt(time / 1000);
            let year = parseInt(time / 31556926);
            let mount = parseInt((time / 2592000) - (year * 12)) ;
            let day = parseInt((time / 86400) - (year * 12 * 30)
                                              - (mount * 30));
            let hour = parseInt((time / 3600) - (year * 12 * 30 * 24)
                                              - (mount * 30 * 24)
                                              - (day * 24));
            let minute = parseInt((time / 60) - (year * 12 * 30 * 24 * 60)
                                             - (mount * 30 * 24 * 60)
                                             - (day * 24 * 60)
                                             - (hour * 60));
            let second = parseInt((time) - (year * 12 * 30 * 24 * 60 * 60)
                                         - (mount * 30 * 24 * 60 * 60)
                                         - (day * 24 * 60 * 60)
                                         - (hour * 60 * 60)
                                         - (minute * 60));
            this.careers.date = year + '년 ' + mount + '개월 ' + day + '일 ' + hour + '시 ' + minute + '분 ' + second + '초';
          }.bind(this), 1000);
        }
      },
      created() {
        this.updateDate();
      }
    }
</script>

<style scoped>
  #careers {
    padding: 40px 0 0 0;
  }

  #careers-total-count-pc {
    display: inline-block;
    font-size: 2.05rem;
    color: orange;
    margin: 0 0.20rem 0 0.20rem;
    border-bottom: 2px solid orange;
  }

  .careers-header-pc {
    display: inline-block;
    font-size: 1.75rem;
  }

  .careers-header-mobile {
    display: none;
  }

  .careers-timeline {
    display: inline-block;
    max-width: 50rem;
    text-align: center;
  }

  .contentline {
    text-align: left;
    font-size: 16px;
  }

  .elevation-2 {
    display: block;
    width: 30rem;
  }

  @media screen and (max-width: 763px) {
    #careers-total-count-mobile {
      display: inline-block;
      font-size: 1.75rem;
      color: coral;
      margin: 0 0.20rem 0 0.20rem;
      border-bottom: 2px solid coral;
    }

    .careers-header-mobile {
      display: inline-block;
      font-size: 1.75rem;
    }

    .careers-header-pc {
      display: none;
    }

    .elevation-2 {
      display: inline-block;
      width: 100%;
    }
  }
</style>
