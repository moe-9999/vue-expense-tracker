<template>
  <div class="mb-3">
    <h3 class="text-slate-300 uppercase font-bold mb-1">
      Balance
    </h3>
    <h1
      class="text-3xl text-red-600"
      :class="{
        'text-green-600': balance >= 0,
      }"
    >
      ${{ balance }}
    </h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  balance: number;
}>();
</script>

<style scoped></style>
