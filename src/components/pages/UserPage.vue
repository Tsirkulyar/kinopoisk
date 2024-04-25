<template>
  <div style="width: 90%; margin: auto">
    <my-nuvbar />
  </div>
  <RatingUserList />
  <div style=" margin: auto">
    <div class="text-star" style="margin: auto; width: 80%;">
      <h1>Фильмы, которые Вы сохранили:</h1>
    </div>
    <div v-if="dataStore.userBookmarks.length > 0" >
      <MovieList :movies="dataStore.userBookmarks" style="margin: auto;"/>
    </div>
    <div v-else style="text-align: center">
      <h3>Время делать закладки :)</h3>
    </div>
    <div style="text-align: center; margin-top: 90px">
      <Button label="Очистить базу данных" severity="danger" @click="clear()" />
    </div>
  </div>
</template>

<script setup>
import MyNuvbar from "../UI/MyNuvbar.vue";
import MovieList from "../MovieList.vue";
import RatingUserList from "../RatingUserList.vue";
import { useDataStore } from "../../store/dataStore";

const dataStore = useDataStore();

const clear = () => {
  localStorage.clear();
  dataStore.userBookmarks = [];
  dataStore.userRating = [];
};
</script>
<style scoped>
.text-star {
  margin-top: 30px;
}
</style>
