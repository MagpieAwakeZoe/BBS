import axios from 'axios'
// import QS from 'qs'

//  基础地址
axios.defaults.baseURL = '/api'

//  请求超时时间
axios.defaults.timeout = 10000

//  请求拦截(请求发出前处理请求)
axios.interceptors.request.use(
  config => {
  //  将token放入header，这里用Vuex把token放在store中，取出
    const token = localStorage.getItem('token')
    if (token) {
      //  将token放在请求头中
      config.headers.accessToken = token
    }
    return config
  },
  error => {
    return Promise.error(error)
  }
)

// 响应拦截器（处理响应数据）
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
    //  这个地方可以由后台编辑状态码区分不同情况，做不同的逻辑处理
      return Promise.reject(response)
    }
  },
  error => {
    // //请求失败，这个地方可以根据error.response.status统一处理一些界面逻辑，比如status为401未登录,可以进行重定向
    // router.replace({
    //     path: '/login',
    //     query: { redirect: router.currentRoute.fullPath }
    // });
    return Promise.reject(error.response)
  }
)

export default axios
