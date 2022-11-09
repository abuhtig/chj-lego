<script setup lang="ts">
import {} from 'vue'
const com = [{ id: 1 }]
</script>
<template>
  <div v-for="item in com" :key="item.id">{{ item }}</div>
</template>
