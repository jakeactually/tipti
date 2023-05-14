<script setup lang="ts">
import { Hotel } from '../types';
defineProps<{ hotel: Hotel, price: number, from: string, to: string }>();
</script>

<template>
  <div class="card">
    <div class="column">
      <h2>{{ hotel.name }}</h2>
      <p>Rating<br>{{ hotel.rating }}</p>
    </div>
    <div class="column" style="margin: 0 100px;">
      <h2>Total price</h2>
      <p>Regular<br>{{ price }}</p>
    </div>
    <div class="column">
      <h2>Selected dates</h2>
      <p>From<br>{{ from }}</p>
      <p>To<br>{{ to }}</p>
    </div>
  </div>
</template>

<style scoped>
.column {
  width: 33%;
}

h2 {
  margin-top: 0;
}

.card {
  display: flex;
  text-align: left;
  padding: 20px 30px;
  border: 2px solid #ddd;
  border-radius: 10px;
  margin-bottom: 20px;
}
</style>
