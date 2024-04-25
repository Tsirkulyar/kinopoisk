<template>
  <div class="card">
    <Menubar :model="items" class="nuvbar" />
  </div>
</template>
<script setup>
import { ref } from "vue";
import router from "../../router";

const items = ref([
  {
    label: "На Главную",
    command: () => {
      router.push({ name: "GeneralPage" });
    },
    icon: "pi pi-home",
  },
  {
    label: "Профиль",
    command: () => {
      router.push({ name: "UserPage" });
    },
    icon: "pi pi-user",
  },
  {
    label: "Вкладка#1",
    value: "",
    icon: "pi pi-folder-open",
  },
  {
    label: "Вкладка#2",
    value: "",
    icon: "pi pi-folder-open",
  },
]);
</script>
<style>
    .nuvbar{
        display: flex;
        justify-content: center;
    }
</style>
