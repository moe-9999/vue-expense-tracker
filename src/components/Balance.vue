<template>
  <div class="mb-3">
    <h3 class="text-slate-300 uppercase font-bold mb-1">Balance</h3>
    <h1 class="text-3xl" :class="positiveOrNegativeBalance">${{ balance }}</h1>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  balance: {
    type: Number,
    required: true,
  },
});

const positiveOrNegativeBalance = computed(() => {
  return props.balance >= 0 ? "text-green-600" : "text-red-600";
});
</script>

<style scoped></style>
