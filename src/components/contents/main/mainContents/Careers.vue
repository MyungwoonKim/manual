<template>
    <div id="careers">
      <div class="careers-header-pc">
        김명운은 <p id="careers-total-count-pc">{{careers.date}}</p> 차 개발자 입니다.
      </div>
      <div class="careers-header-mobile">
        김명운은<br/>
        <p id="careers-total-count-mobile">{{careers.date}}</p><br/>
        차 개발자 입니다.<br/>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'Careers',
      data() {
        return {
          careers: {
            startDate: '2017/09/01 09:00:00',
            date: ''
          }
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
      mounted() {
        this.updateDate();
      }
    }
</script>

<style scoped>
  #careers {
    padding: 40px 0 40px 0;
  }

  #careers-total-count-pc {
    display: inline-block;
    font-size: 2.05rem;
    color: coral;
    margin: 0 0.20rem 0 0.20rem;
    border-bottom: 2px solid coral;
  }

  .careers-header-pc {
    display: inline-block;
    font-size: 1.75rem;
  }

  .careers-header-mobile {
    display: none;
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
  }
</style>
