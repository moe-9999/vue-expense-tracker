<template>
  <h2 class="mb-2">
    Transaction History:
  </h2>
  <div class="flex flex-col gap-3 mb-4">
    <div
      v-for="transaction in transactions"
      :key="transaction.id"
      class="flex group justify-between align-center gap-4 bg-slate-800 p-3 rounded relative after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-1 after:rounded-r"
      :class="
        transaction.amount >= 0 ? 'after:bg-green-500' : 'after:bg-red-600'
      "
    >
      <span>
        {{ transaction.name }}
      </span>
      <span> ${{ transaction.amount }} </span>
      <button
        class="bg-red-600 opacity-0 pointer-none group-hover:opacity-100 group-hover:pointer-auto transition-opacity transition-300 aspect-square cursor-pointer h-6 z-10 rounded-sm absolute top-1/2 -translate-y-1/2 right-0 translate-x-[calc(100%+.25rem)] grid place-content-center"
        @click="remove(transaction.id)"
      >
        <IconClose />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconClose from "~icons/mdi/close";

interface Transaction {
  id: number;
  name: string;
  amount: number;
}

const { transactions } = defineProps<{
  transactions: Transaction[];
}>();

const emit = defineEmits<{
  (e: "remove-transaction", id: number): void;
}>();

function remove(id: number) {
  emit("remove-transaction", id);
}
</script>

<style scoped></style>
