<script setup>
import { useStorage } from "@vueuse/core";
import { computed } from "vue";
import { Toaster } from "vue-sonner";
import AddTransaction from "@/components/AddTransaction.vue";

import Balance from "@/components/Balance.vue";
import IncomeExpenseSummary from "@/components/IncomeExpenseSummary.vue";

import TransactionHistory from "@/components/TransactionHistory.vue";

const transactions = useStorage("transactions", []);

const balance = computed(() => {
  return transactions.value
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0)
    .toFixed(2);
});

const income = computed(() => {
  return transactions.value
    .filter(transaction => transaction.amount >= 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);
});

const expenses = computed(() => {
  return transactions.value
    .filter(transaction => transaction.amount < 0)
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);
});

function addTransaction(newTransaction) {
  transactions.value.push(newTransaction);
  localStorage.setItem("transactions", transactions.value);
}

function removeTransaction(id) {
  transactions.value = transactions.value.filter(t => t.id !== id);
}
</script>

<template>
  <Toaster rich-colors theme="dark" position="top-right" />
  <div class="bg-slate-900 p-9 rounded">
    <h1 class="text-xl mb-4">
      Expense Tracker:
    </h1>
    <Balance :balance="+balance" />
    <IncomeExpenseSummary :income="+income" :expenses="+expenses" />
    <TransactionHistory

      :transactions="transactions"
      @remove-transaction="removeTransaction"
    />

    <AddTransaction @add-transaction="addTransaction" />
  </div>
</template>
