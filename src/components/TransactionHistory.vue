<template>
  <h2 id="transaction-history-heading" class="mb-2 not-[]:text-slate-300 uppercase font-bold">
    Transaction History
  </h2>
  <p class="sr-only">
    List of {{ transactions.length }} transactions. Each transaction
    shows the name, amount, and includes a delete button.
  </p>
  <ul
    class="flex flex-col gap-3"
    aria-labelledby="transaction-history-heading"
  >
    <li
      v-for="transaction in transactions"
      :key="transaction.id"
      class="flex group justify-between align-center gap-4 bg-slate-800 px-4 py-2 rounded-md relative after:content-[''] after:absolute after:top-0 after:right-0 after:h-full after:w-1 after:rounded-r"
      :class="{
        'after:bg-green-400': transaction.amount >= 0,
        'after:bg-red-400': transaction.amount < 0,
      }"
    >
      <span aria-label="Transaction name">
        {{ transaction.name }}
      </span>
      <data
        :value="transaction.amount"
        :class="{
          'text-green-400': transaction.amount >= 0,
          'text-red-400': transaction.amount < 0,
        }"
        :aria-label="`Amount: ${transaction.amount >= 0 ? 'Credit' : 'Debit'} of $${Math.abs(transaction.amount)}`"
      >
        ${{ transaction.amount }}
      </data>
      <button
        class="bg-destructive-foreground opacity-0 pointer-none group-hover:opacity-100 group-hover:pointer-auto transition-opacity transition-300 aspect-square cursor-pointer h-6 z-10 rounded-sm absolute top-1/2 -translate-y-1/2 right-0 translate-x-[calc(100%+.4rem)] grid place-content-center"
        :aria-label="`Delete transaction: ${transaction.name}`"
        tabindex="0"
        @click="remove(transaction.id)"
      >
        <IconClose />
        <span class="sr-only">Delete</span>
      </button>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Transaction } from "@/types/transactions";
import IconClose from "~icons/mdi/close";

const { transactions } = defineProps<{
  transactions: Transaction[];
}>();

const emit = defineEmits<{
  (e: "remove-transaction", id: string): void;
}>();

function remove(id: string) {
  emit("remove-transaction", id);
}
</script>

<style scoped></style>
