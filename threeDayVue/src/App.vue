<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <a href="#/">首页</a>
    <a href="#/page">page面</a> -->
     <!-- <a href="/">首页</a>
     <a href="/page">page页面</a> -->
     <!-- <router-link to="/" exact>首页</router-link>
     <router-link to="/page" active-class="pageStyle">page页面</router-link>
     <router-link to="/work">work页面</router-link>
     <router-link to="/frist">frist页面</router-link> -->
    <router-view/>
  </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style>
    * {
        padding: 0;
        margin: 0;
    }
    
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* text-align: center; */
        /* color: #2c3e50; */
        /* margin-top: 60px; */
    }
    
    .router-link-active {
        background-color: red;
    }
    
    .pageStyle {
        background: blue;
        font-weight: bold;
        color: white;
    }
    
    .nav {
        font-size: 30px;
        font-weight: bold;
        background: aqua;
        padding: 5px;
    }
</style>