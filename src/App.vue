<template>
  <div id="nav" class="nav">
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div></div>
  </div>
  <div class="container px-8">
    <router-view />
  </div>
</template>
