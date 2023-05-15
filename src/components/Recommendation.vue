<script setup lang="ts">
import { Hotel } from '../types';
import Rating from './Rating.vue';
defineProps<{ hotel: Hotel, price: number, from: string, to: string }>();
</script>

<template>
  <div class="card">
    <div class="column">
      Recommended
      <h2 style="margin-bottom: 0;">{{ hotel.name }}</h2>
      <Rating :rating="hotel.rating"></Rating>
    </div>
    <div class="column">
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
  padding: 20px 30px;
  width: 33%;
}

.column:first-child {
  background-color: #8BC34A;
  color: white;
}

h2 {
  margin-top: 0;
}

.card {
  display: flex;
  text-align: left;
  border: 2px solid #ddd;
  border-radius: 10px;
  margin-bottom: 20px;
}
</style>
