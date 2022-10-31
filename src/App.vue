<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/layout/AppHeader.vue'
import AppFooter from '@/layout/AppFooter.vue'
</script>

<template>
  <div class="common-layout">
    <header>
      <AppHeader> </AppHeader>
    </header>

    <el-main>
      <RouterView />
    </el-main>

    <footer>
      <AppFooter></AppFooter>
    </footer>
  </div>
</template>

<style scoped></style>
