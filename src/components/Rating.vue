<script setup lang="ts">
defineProps<{ rating: number }>();
</script>

<template>
  <div class="rating">
    <span v-for="_ in rating">★</span>
  </div>
</template>

<style scoped>
.rating {
  display: flex;
  font-size: 2em;
}
</style>
