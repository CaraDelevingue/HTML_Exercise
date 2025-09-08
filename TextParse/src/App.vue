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
  height: 0;
  width: 100%;
  overflow: hidden;
}
.header {
  height: 10%;
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  text-align: center;
}
.footer {
  height: 8%;
}
.app-main {
  width: 100%;
  display: flex;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}
</style>
