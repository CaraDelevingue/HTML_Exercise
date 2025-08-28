<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <header class="header">
      <h1>You did it!</h1>
      <p>
        Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
        documentation
      </p>
    </header>

    <main class="app-main">
      <router-view />
    </main>

    <footer>
      <p>这是网页页脚!</p>
    </footer>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 占满视口高度 */
  width: 100%;
}
.header {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  text-align: center;
}
.app-main {
  display: flex;
  flex: 1;
}
</style>
