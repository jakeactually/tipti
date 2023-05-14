<script setup lang="ts">
import { Hotel } from '../types';
defineProps<{ hotel: Hotel }>();
</script>

<template>
  <div class="card">
    <div class="column">
      <h2>{{ hotel.name }}</h2>
      <p>Rating<br>{{ hotel.rating }}</p>
    </div>
    <div  class="column" style="margin: 0 100px;">
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
