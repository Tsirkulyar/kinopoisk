<template>
  <div class="wrapper">
    <my-nuvbar />
    <my-search />
    <movie-list :movies="dataStore.movieArr" />
  </div>
</template>

<script setup>
import MovieList from "../MovieList.vue";
import { useDataStore } from "../../store/dataStore";
import MySearch from "../UI/MySearch.vue";
import MyNuvbar from "../UI/MyNuvbar.vue";
import { onBeforeMount } from "vue";

const dataStore = useDataStore();

onBeforeMount(() => {
  dataStore.getMovies();
});
</script>

<style scoped>
.wrapper {
  width: 90%;
  margin: auto;
}
</style>
