<script setup lang="ts">
import { Hotel } from '../types';
import Rating from './Rating.vue';
defineProps<{ hotel: Hotel }>();
</script>

<template>
  <div class="card">
    <div class="column">
      <h2 style="margin-bottom: 0;">{{ hotel.name }}</h2>
      <Rating :rating="hotel.rating"></Rating>
    </div>
    <div  class="column">
      <h2>Weekday Rates</h2>
      <p>Regular<br>{{ hotel.weekday_rates.regular_customer }}</p>
      <p>Rewards<br>{{ hotel.weekday_rates.rewards_customer }}</p>
    </div>
    <div class="column">
      <h2>Weekend Rates</h2>
      <p>Regular<br>{{ hotel.weekend_rates.regular_customer }}</p>
      <p>Rewards<br>{{ hotel.weekend_rates.rewards_customer }}</p>
    </div>
  </div>
</template>

<style scoped>
.column {
  padding: 20px 30px;
  width: 33%;
}

.column:first-child {
  background-color: #2196F3;
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
