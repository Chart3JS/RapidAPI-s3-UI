import Api from '@/services/Api'

const prepareRequestHeaders = (user) => {
  return { 'USER_NAME': user.user_name, 'USER_TOKEN': user.user_token }
}
export default {
  login (userLogin) {
    return Api().post('/login', userLogin)
  },
  getFileList (user) {
    return Api().get('/', {
      headers: prepareRequestHeaders(user)
    })
  },
  changeFileAccessPerm (user, file) {
    return Api().get('/change/' + file.key + '/' + file.token, {
      headers: prepareRequestHeaders(user)
    })
  },
  deleteFile (user, file) {
    return Api().get('/delete/' + file.key + '/' + file.token, {
      headers: prepareRequestHeaders(user)
    })
  },
  downloadFile (user, file) {
    return Api().get('/download/' + file.key + '/' + file.token, {
      headers: prepareRequestHeaders(user)
    })
  }
}
