<template>
  <div>
     <mu-button color="primary" @click="login">登录</mu-button>
     <mu-button color="secondary" @click="regist">注册</mu-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {

    }
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    regist () {
      this.$router.push('/regist')
    }
  },
  mounted () {
    // console.log(this)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
