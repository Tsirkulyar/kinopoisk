<template>
  <div>
    <my-nuvbar />
    <div v-if="dataStore.movieObj">
      <MovieData />
      <WatchFilms />
      <div style="width: 75%; margin: auto; padding-top: 20px;">
        <h2>Фильмы и сериалы с похожим рейтингом:</h2>
      </div>
      <div v-if="dataStore.selectedArr.length > 0">
        <MovieList :movies="dataStore.selectedArr" />
      </div>
    </div>
  </div>
</template>

<script setup>
import MyNuvbar from "../UI/MyNuvbar.vue";
import MovieData from "../MovieData.vue";
import { useRoute } from "vue-router";
import { useDataStore } from "../../store/dataStore";
import WatchFilms from "../WatchFilms.vue";
import MovieList from "../MovieList.vue";
import { watch, ref,  onBeforeMount, onMounted, getCurrentInstance } from "vue";

const dataStore = useDataStore();

const route = useRoute();
let id = ref(route.params.id)

dataStore.getMovies()

watch(
  () => route.params.id,
  (state) => {
    
    dataStore.getMovie(state);
    dataStore.selectRatingFilm()
    const instance = getCurrentInstance()
    instance.proxy.$forceUpdate()
  },
  { deep: true }
);


watch(
  () => dataStore.movieObj.value,
  () => {
    window.scrollTo(0, 0)
    dataStore.selectRatingFilm()
  },
  { deep: true }
);


onBeforeMount(()=>{
   dataStore.getMovie(id.value);
  //  dataStore.selectRatingFilm()

})
onMounted(()=>{
   dataStore.selectRatingFilm()
})
</script>
