<template>
  <div class="wrapper">
    <div style="float: right">
      <my-filter />
    </div>
    <div class="grid-table">
      <router-link
        style="text-decoration: none"
        v-for="movie in movies"
        :key="movie.id"
        :to="{ name: 'MoviePage', params: { id: movie.id } }"
      >
        <movie-item :movie="movie" />
      </router-link>
    </div>
  </div>
</template>
<script setup>
import MyFilter from "./UI/MyFilter.vue";
import MovieItem from "./MovieItem.vue";


const props = defineProps({
  movies:{
    type:Array
  }
  });
</script>
<style scoped>
.grid-table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  gap: 26px;
}
.wrapper {
  width: 80%;
  margin: auto;
}
</style>
