<template>
  <div id='homepage'>
      Welcome to SleepTrackr!
  </div>
</template>

<script>
export default {
    name: 'HomePage',
    mounted() {
      this.$nextTick(() => {
        console.log(document.cookie.access_token)
      });
	},
}
</script>

<style>

</style>