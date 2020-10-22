<template>
  <div id='homepage'>
      Welcome to SleepTrackr!
  </div>
</template>

<script>
import getUserInfo from './getUserInfo'
export default {
    name: 'HomePage',
    mounted() {
      this.$nextTick(() => {
        console.log("Calling get user info")
        getUserInfo()
      });
	},
}
</script>

<style>

</style>