<template>
  <div id="app">
    <div class="header">
      <h1>Blogging Fun</h1>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/admin">Admin</router-link>
    </div>
    <div class="content">
      <router-view/>
    </div>
    <div class="footer">
    <p>&copy; 2019 &bull; CS 260 &bull; <a href="https://github.com/BYUCS260/lab1-html-css-MMagnum" target="_blank">GitHub</a>
           &bull; Built by Marc Mangum</p>
  </div>
    
  </div>
  
</template>

<style>
body {
  margin: 0px;
  height: 100%;
  background-color: #cce5ff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  color: #2c3e50;
  
}

.header {
  display: flex;
  justify-content: space-between;
  background: #0066cc;
  padding: 10px 100px;
  color: white;
}

#nav {
  padding: 30px;
  background-color: #A0A0A0;
}

#nav a {
  font-weight: bold;
  color: white;
  padding: 0 10px 0 10px;
  text-decoration: none;
}

#nav a:hover {
  color: #808080;
}

#nav a.router-link-exact-active {
  color: black;
  text-decoration: underline; 
}

.content {
  padding: 10px 100px;
  
}

</style>
