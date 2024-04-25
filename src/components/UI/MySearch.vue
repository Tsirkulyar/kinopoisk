<template>
  <div class="logo">
    <div class="logo-sm">
        <div style="display: flex; justify-content: center; align-items: center;">
      <h1 style="font-family: 'Press Start 2P';">ПоискКино</h1>
      <i class="pi pi-video" style="font-size: 2.5rem; "/>
    </div >
      <p style="margin-top: 0px;">Все лучшие фильмы в одном месте</p>
    </div>
    <div class="input-text-div">
    <span class="p-input-icon-left ">
      <i class="pi pi-search" />
      <InputText v-model="input" placeholder="Поиск по названию" class="input"/>
    </span>
</div>


    <div v-if="input !== ''" style="width: 50%; margin: auto;">
      <Listbox
        v-model="selectedMovie"
        :options="arrSearch"
        optionLabel="name"
        class="search-list w-full"
      />
    </div>
  </div>
</template>
<script setup>
import { useDataStore } from "../../store/dataStore";
import { ref, watchEffect, watch } from "vue";
import router from "../../router";

const input = ref("");
const arrSearch = ref([]);
const selectedMovie = ref("");

const dataStore = useDataStore();

const filteredList = (text) => {
  arrSearch.value = dataStore.movieArr.filter((p) =>
    p.name.toLowerCase().includes(text)
  );
  while (arrSearch.value.length > 3) {
    arrSearch.value.pop();
  }
};
watchEffect(() => {
  const test = input.value;
  filteredList(test.toLowerCase());
});
watch(
  () => selectedMovie,
  (state) => {
    router.push({ name: "MoviePage", params: { id: state.value.id } });
  },
  { deep: true }
);
</script>
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Press+Start+2P:regular);
    .logo-sm{
        padding-top: 7%;
        margin: auto;
        text-align: center;
    }
    .logo{
        margin: auto;
        padding-bottom: 5%;
    }
    .input-text-div{
        text-align: center;
        margin-top: 40px;
    }
    .input{
        width: 100%;
    }
    .p-input-icon-left{
        width: 50%;
    }
    .search-list{
      width: 100%;
    }
</style>
