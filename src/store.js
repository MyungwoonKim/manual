import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 상단 해더
    header: {
      topBtn: {
        main: true,
        skills: false,
        careers: false,
        portfolio: false,
        qna: false
      },
      skipEvent: false
    }
  },
  mutations: {
    /**
     * 상단 헤더 버튼 하이라이트 전부 끄기
     * @param state
     */
    topBtnAllFalse(state) {
      state.header.topBtn.main = false
      state.header.topBtn.skills = false
      state.header.topBtn.careers = false
      state.header.topBtn.portfolio = false
      state.header.topBtn.qna = false
    },
    /**
     * 상단 해더 버튼 하이라이트
     * @param state
     * @param topBtn
     */
    topBtnHighlight(state, topBtn) {
      if (topBtn == 'main') {
        state.header.topBtn.main = true
      } else if (topBtn == 'skills') {
        state.header.topBtn.skills = true
      } else if (topBtn == 'careers') {
        state.header.topBtn.careers = true
      } else if (topBtn == 'portfolio') {
        state.header.topBtn.portfolio = true
      } else if (topBtn == 'qna') {
        state.header.topBtn.qna = true
      }
    },
    /**
     * 상단 이벤트 스킵 여부
     * @param state
     * @param isSkip
     */
    skipEventHandler(state, isSkip) {
      state.header.skipEvent = isSkip
    }
  },
  actions: {

  }
})
