<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  {{count}}
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.card {
  width: 300px;
  height: 300px;
  background: red;
  padding: 10px;
  border-radius: 10px;
}
</style>
