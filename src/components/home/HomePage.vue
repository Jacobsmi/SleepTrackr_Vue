<template>
  <div id='homepage'>
      <div id='welcome-message'>Welcome to the SleepTrackr, {{ name }}</div>
  </div>
</template>

<script>
import getUserInfo from './getUserInfo'
export default {
  name: 'HomePage',
  data (){
    return{
      name: "",
    }
  },
  async mounted() {
    const userInfo = await getUserInfo()
    if(userInfo !== null){
      this.name = userInfo.fname
    }
  },
}
</script>

<style>

</style>