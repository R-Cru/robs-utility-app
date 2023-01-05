<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="header">Rob's awesome multi-purpose application</div>
  <div class="body">
    <div class="sidebar">
      <nav>
        <ul>
          <li>
            <RouterLink :to="{ name: 'home' }" class="nav_item"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink :to="{ name: 'calculator' }" class="nav_item"
              >Calculator</RouterLink
            >
          </li>
          <li>
            <RouterLink :to="{ name: 'date' }" class="nav_item"
              >Date</RouterLink
            >
          </li>
          <li>
            <RouterLink :to="{ name: 'joke' }" class="nav_item"
              >Jokes</RouterLink
            >
          </li>
          <li>
            <RouterLink :to="{ name: 'stats' }" class="nav_item"
              >Stats</RouterLink
            >
          </li>
        </ul>
      </nav>
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 20px;
  color: aliceblue;
  font-weight: 400;
}

li{
  margin-bottom: 30px;
}

.nav_item {
  text-decoration: none;
  color:coral;
  font-weight: 600;
}

.header {
  height: 10%;
  float: inline-start;
  background-color: darkslategray;
  padding: 10px;
  padding-left: 15%;
  color: rgb(125, 245, 245);
  text-align: left;
}

.body {
  height: 500px;
}

.sidebar {
  width: 15%;
  height: 100%;
  float: left;
  background-color: rgb(79, 92, 92);
}

.content {
  width: 85%;
  height: 100%;
  float: right;
  background-color: rgb(118, 119, 119);
}
</style>

<style>
* {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
</style>
