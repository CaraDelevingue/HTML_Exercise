<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="app">
    <header class="header">
      <h1>Text Parse</h1>
      <p>请输入一段不少于十个字的语段或者文件，我会帮你提取出其中的关键字！</p>
    </header>

    <main class="app-main">
      <router-view />
    </main>

    <footer>
      <p>Text Parse!</p>
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
