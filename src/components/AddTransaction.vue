<template>
  <form class="flex flex-col gap-3" @submit.prevent="handleSubmit">
    <div class="flex gap-3">
      <Input v-model="name" type="text" placeholder="Name" aria-label="Transaction name" />
      <Input v-model.number="amount" step="0.01" type="number" placeholder="Amount" aria-label="Transaction amount" />
    </div>
    <Button variant="secondary" type="submit" aria-label="Add transaction">
      Add
    </Button>
  </form>
</template>

<script setup lang="ts">
import type { Transaction } from "@/types/transactions";
import { ref, useId } from "vue";
import { toast } from "vue-sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const emit = defineEmits<{
  (e: "add-transaction", transaction: Transaction): void;
}>();

const amount = ref(0);
const name = ref("");

function handleSubmit() {
  if (name.value === "") {
    toast.error("Missing Info", {
      description: "Both fields must be filled",
    });
    return;
  }
  if (amount.value === 0) {
    toast.error("Missing Info", {
      description: "Amount can not be zero",
    });
    return;
  }

  const newTransaction: Transaction = {
    id: useId(),
    name: name.value,
    amount: amount.value,
  };

  emit("add-transaction", newTransaction);

  toast.success("Success", {
    description: "Added new transaction",
  });

  amount.value = 0;
  name.value = "";
}
</script>

<style scoped></style>
