<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="app">
    <RouterView></RouterView>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  @import "@/styles/main.css";
</style>