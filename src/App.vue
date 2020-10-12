<template>
  <div id="app">
    <div id="nav">
      <span id='nav-text'>SleepTrackr</span>
      <router-link to='/'>Home</router-link>
      <router-link to='/'>Some</router-link>
      <router-link to='/'>Other</router-link>
      <router-link to='/'>Links</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app{
  font-family: 'Titillium Web', sans-serif;
}
#nav{
  height: 8vh;
  padding-left: 5vw;
}
#nav a{
  line-height: 8vh;
  text-decoration: none;
  color: black;
  font-size: 3vh;
  margin-right: 3vw;
}
#nav-text{
  color: #2a2627;
  font-size: 3vh;
  font-weight: bold;
  margin-right: 3vw;

}
</style>
