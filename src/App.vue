<script setup lang="ts">
import { ref, computed } from 'vue';
import { format, eachDayOfInterval, parse, isWeekend, differenceInDays } from 'date-fns';
import * as _ from 'lodash';
import HotelComponent from './components/HotelComponent.vue';
import { hotels } from './hotels.json';
import Recommendation from './components/Recommendation.vue';

const fmt = 'yyyy-MM-dd';
const from = ref(format(new Date(), fmt));
const to = ref(format(new Date(), fmt));
const type = ref('regular' as 'regular' | 'rewards');
const error = ref('');

const recommendation = computed(() => {
  const start = parse(from.value, fmt, new Date());
  const end = parse(to.value, fmt, new Date());
  const diff = differenceInDays(end, start);
  if (diff > 100) {
    error.value = 'The selected date range is too big';
    return;
  }
  if (diff < 0) {
    error.value = 'The selected date range is too low';
    return;
  }
  
  error.value =  '';
  const days = eachDayOfInterval({ start, end });
  const data = hotels.map(hotel => {
    const prices = days.map(day => {
      const dayType = isWeekend(day) ? 'weekend' : 'weekday';
      return hotel[`${dayType}_rates`][`${type.value }_customer`];
    });
    const price = _.sum(prices);
    return { hotel, price };
  });
  return _.minBy(data, item => item.price - item.hotel.rating);
});
</script>
<template>
  
  <form>
    <label for="">
      From<br>
      <input type="date" v-model="from">
    </label>
    <label for="">
      To<br>
      <input type="date" v-model="to">
    </label>
    <label for="">
      Type<br>
      <select name="" id="" v-model="type">
      <option value="regular">Regular</option>
      <option value="rewards">Rewards</option>
    </select>
    </label>
  </form>

  <div v-if="error">
    <h2>{{error}}</h2>
  </div>

  <div v-if="recommendation">
    <Recommendation
      :hotel="recommendation.hotel"
      :from="from"
      :to="to"
      :price="recommendation.price" />
  </div>

  <HotelComponent v-for="hotel in hotels" :hotel="hotel" />
</template>

<style scoped>
  form {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    text-align: left;
  }

  label {
    font-weight: bold;
  }

  input, select {
    padding: 10px;
  }
</style>
