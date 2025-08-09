<template>
  <div>
    <h3 id="balance-heading" class="text-slate-300 uppercase font-bold mb-1" aria-label="Current balance">
      Balance
    </h3>
    <data
      class="text-3xl font-medium"
      :class="{
        'text-green-500': balance >= 0,
        'text-red-500': balance < 0,
      }"
      :value="balance"
      aria-labelledby="balance-heading"
    >
      ${{ balance }}
    </data>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  balance: number;
}>();
</script>

<style scoped></style>
