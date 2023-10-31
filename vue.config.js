const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath : '/레파지토리명'
  // 이거 붙여서 build 한다음에 git에 배포
  // publicPath:'/vue-test'
  // netlify에서는 필요없움
})
