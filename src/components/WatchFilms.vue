<template>
  <div class="wrapper">
    <h2>Смотрите фильм на известных площадках:</h2>
    <div class="btn-list-general">
      <div
        v-for="film in dataStore.movieObj.watchability.items"
        class="btn-list-wrapper"
      >
        <div style="height: 72px; width: 72px">
          <a :href="film.url">
            <button class="btn_link">
              <my-poster :path="film.logo.url" style="border-radius: 20px" />
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDataStore } from "../store/dataStore";
import MyPoster from "../components/UI/MyPoster.vue";

const dataStore = useDataStore();
</script>

<style scoped>
.btn_link {
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  height: 50px;
  border-radius: 50px;
}
.wrapper {
  width: 75%;
  margin: auto;
  padding-top: 50px;
}
.btn-list-general {
  padding-top: 20px;
  display: flex;
  justify-content: flex-start;
  gap: 30px;
}
</style>
