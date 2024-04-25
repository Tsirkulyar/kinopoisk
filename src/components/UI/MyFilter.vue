<template>
  <div class="card flex justify-content-center">
    <Dropdown
      v-model="select"
      :options="dataStore.arrFilterTitle"
      optionLabel="body"
      placeholder="Сортировать"
      class="w-full md:w-14rem"
    />
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { useDataStore } from "../../store/dataStore";

const dataStore = useDataStore();
const select = ref("");

watch(
  () => select,
  (state) => {
    dataStore.movieFilter(state.value.value);
  },
  { deep: true }
);

</script>
