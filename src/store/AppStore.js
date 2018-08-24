import userAPI from '@/services/InitService'
const state = {
  currentLanguage: 'en',
  showSettings: false,
  currentUser: null,
  uploadPath: null,
  lastCrosswords: [],
  popularCrosswords: [],
  categories: [],
  categoryMap: null,
  files: null
}
// getters
const getters = {
  userInfo: (state, getters, rootState) => {
    return state.currentUser
  },
  isSettingsShown: () => {
    return state.showSettings
  },
  getUploadPath: (state, getters, rootState) => {
    return state.uploadPath
  },
  getFileList: (state, getters, rootState) => {
    return state.files
  }
}
// actions
const actions = {
  login ({ commit }, userLogin) {
    return userAPI.login(userLogin).then((result) => {
      if (result.status === 200) {
        commit('setAppData', result.data)
      } else {
        commit('setAppData', null)
      }
    }).catch(() => {
      commit('setAppData', null)
    })
  },
  downloadFile ({ commit, state }, file) {
    return userAPI.downloadFile(state.currentUser, file).then((result) => {
      if (result.status === 200) {
        commit('setFileList', result.data)
      } else {
        commit('setFileList', [])
      }
    }).catch(() => {
      commit('setFileList', [])
    })
  },
  getFileList ({ commit, state }) {
    return userAPI.getFileList(state.currentUser).then((result) => {
      if (result.status === 200) {
        commit('setFileList', result.data)
      } else {
        commit('setFileList', [])
      }
    }).catch(() => {
      commit('setFileList', [])
    })
  },
  changeFileAccessPerm ({ commit, state }, file) {
    return userAPI.changeFileAccessPerm(state.currentUser, file).then((result) => {
      if (result.status === 200) {
        commit('setFileList', result.data)
      } else {
        // commit('setFileList', [])
      }
    }).catch(() => {
      // commit('setFileList', [])
    })
  },
  deleteFile ({ commit, state }, file) {
    return userAPI.deleteFile(state.currentUser, file).then((result) => {
      if (result.status === 200) {
        commit('setFileList', result.data)
      } else {
        // commit('setFileList', [])
      }
    }).catch(() => {
      // commit('setFileList', [])
    })
  },
  logout ({ commit }) {
    commit('setAppData', null)
  },
  setLanguage ({ commit }, lang) {
    commit('setCurrentLanguage', lang)
  },
  setShowSettings ({ commit }, isShown) {
    commit('setShowSettings', isShown)
  }
}
// mutations
const mutations = {
  setAppData (state, appData) {
    state.currentUser = appData.user
    console.log('appData.upload_paths ' + appData.upload_path)
    state.uploadPath = appData.upload_path
  },
  setCurrentLanguage (state, lang) {
    state.currentLanguage = lang
  },
  setFileList (state, files) {
    state.files = files
  },
  setShowSettings (state, isShown) {
    state.showSettings = isShown
  },
  setAppInitData (state, appData) {
    // state.appData
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
