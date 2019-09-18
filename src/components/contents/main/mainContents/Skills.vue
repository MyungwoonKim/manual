<template>
  <div id="skills">
    <div class="skill">
      <h3>다양한 플랫폼과 협업을 중시하는 기술을 가지고 있습니다.</h3>
    </div>
    <div class="base-width skill">
      <div class="skills-image">
        <img class="skills-search-icon" src="../../../../assets/main/skills/skills-search.png">
        <b-img @click="popupMindMap" class="mind-map-skills" center :src="require('../../../../assets/main/skills/skills.png')" fluid alt="Responsive image"></b-img>
      </div>
    </div>
    <b-modal v-model="popupSkills" size="xl" centered ok-only title="Show mind map">
      <b-img @click="popupMindMap" class="mind-map-skills"
             center :src="require('../../../../assets/main/skills/skills.png')" fluid alt="Responsive image"></b-img>
    </b-modal>
  </div>
</template>

<script>
    export default {
      name: "Skills",
      data() {
        return {
          popupSkills: false
        }
      },
      methods: {
        popupMindMap() {
          this.popupSkills = !this.popupSkills;
        }
      }
    }
</script>

<style scoped>
  #skills {
    border: 0px;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: rgb(240, 245, 248);
  }

  .skill {
    margin-bottom: 30px;
  }

  .skills-search-icon {
    display: none;
  }

  @media screen and (max-width: 763px) {
    .skills-image {
      position: relative;
    }

    .skills-search-icon {
      display: block;
      width: 40px;
      height: auto;
      position: absolute;
      z-index: 1;
      top: 45%;
      left: 42%;
    }
  }
</style>
