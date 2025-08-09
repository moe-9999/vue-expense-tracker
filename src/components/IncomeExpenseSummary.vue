<template>
  <div
    class="bg-slate-800 rounded-md px-4 flex items-center [&>div]:flex-1 [&>div]:grid [&>div]:place-content-center [&>div]:p-6"
  >
    <div class="border-r-1 font-bold">
      <data class="text-green-400" aria-label="Total income" :value="income">
        ${{ income }}
      </data>
    </div>
    <hr class="h-10 bg-slate-500 w-[1px]">
    <div class="font-bold">
      <data class="text-red-400" aria-label="Total expenses" :value="expenses">
        ${{ expenses }}
      </data>
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
