<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-3">
    <Input v-model.text="name" type="text" placeholder="name" />
    <Input v-model.number="amount" type="number" placeholder="amount" />
    <Button variant="secondary" type="submit">Submit</Button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "vue-sonner";

const amount = ref(0);
const name = ref("");

const emit = defineEmits(["add-transaction"]);

function handleSubmit() {
  if (amount.value === 0 || name.value === "") {
    toast.error("Missing Info", {
      description: "Both fields must be filled",
    });
    return;
  }

  const newTransaction = {
    id: Date.now(),
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
