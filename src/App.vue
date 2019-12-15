<template>
  <div id="app">
    <button @click="getData()">vue-resource请求</button>
    <router-link to="/weather">天气</router-link>
    <router-link to="/common">公用组件</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      url: "http://49.234.216.89/wz/genManager/getGenTypeList"
    }
  },
  methods : {
    getData() {
      this.$http.get(this.url).then((resp)=>{
        console.log(resp);
      },function(err){
        console.log(err);
      })
    }
  }
}
</script>

<style lang="scss" scope>

</style>
