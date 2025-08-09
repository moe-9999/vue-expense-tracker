<template>
  <div
    class="bg-slate-800 rounded px-4 mb-4 flex items-center [&>div]:flex-1 [&>div]:grid [&>div]:place-content-center [&>div]:p-6"
  >
    <div class="border-r-1 font-bold">
      <h2 class="text-green-400">${{ income }}</h2>
    </div>
    <hr class="h-10 bg-slate-500 w-[1px]" />
    <div class="font-bold">
      <h2 class="text-red-500">${{ expenses }}</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  income: number;
  expenses: number;
}

const { income, expenses } = defineProps<Props>();
</script>

<style scoped></style>
