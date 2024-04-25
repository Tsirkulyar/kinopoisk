<template>
  <div class="wrapper">
    <div class="div-flex">
      <div class="wrapper-poster">
        <my-poster
          :path="dataStore.movieObj.poster.url"
          style="border-radius: 10px"
        />
      </div>
      <div class="description-wrapper">
        <Card style="float: right">
          <template #header>
            <div class="wrapper-logo">
              <my-poster :path="dataStore.movieObj.logo.url" />
            </div>
          </template>
          <template #title>
            <div v-if="dataStore.movieObj.alternativeName">
              <h3>{{ dataStore.movieObj.alternativeName }}*</h3>
            </div>
          </template>
          <template #subtitle>
            <div v-if="dataStore.movieObj.alternativeName">
              *альтернативное название
            </div>
            <br />
            <i class="pi pi-calendar"></i>
            {{ dataStore.movieObj.year }}
            <i class="pi pi-stopwatch"></i>
            {{ dataStore.movieObj.movieLength }}
            <i class="pi pi-star"></i>
            {{ dataStore.movieObj.rating.kp }}
          </template>
          <template #content>
            {{ dataStore.movieObj.description }}<br />
            <div style="padding-top: 20px">
              Оцените фильм: <my-rating style="padding-top: 20px" />
            </div>
          </template>
          <template #footer>
            <div class="bookmark">
              <my-bookmark :yesOrNo="tr" @click="addBookmark(dataStore.movieObj.id)"/>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup>
import MyPoster from "../components/UI/MyPoster.vue";
import { useDataStore } from "../store/dataStore";
import MyBookmark from "../components/UI/MyBookmark.vue";
import MyRating from "./UI/MyRating.vue";
import { ref } from "vue";

const dataStore = useDataStore();
let tr = ref(false)

const addBookmark = (idMark) => {
  dataStore.userBookmarks.forEach(e => e.id == dataStore.movieObj.id ? tr.value=true : tr.value = false)

  
if(tr.value){
    dataStore.userBookmarks = dataStore.userBookmarks.filter(el => el.id != idMark)
}else{
  dataStore.userBookmarks.push(dataStore.movieObj);
}

tr.value = !tr.value
};

const calcMark = () =>{
  dataStore.userBookmarks.forEach(e => {e.id == dataStore.movieObj.id ? tr.value=true : tr.value = false})
}

calcMark()

// onMounted(() => {
//   dataStore.userBookmarks.forEach(e => {e.id == dataStore.movieObj.id ? tr.value=true : tr.value = false})
// });
</script>

<style scoped>
:root {
  --width-column: 400px;
}
.wrapper {
  padding-top: 80px;
  width: 75%;
  margin: auto;
}
.wrapper-poster {
  border-radius: 10px;
  width: 400px;
  text-align: center;
}
.div-flex {
  display: flex;
  justify-content: space-between;
}
.description-wrapper {
  float: right;
  width: 50%;
  top: 0;
}
.wrapper-logo {
  width: 400px;
  text-align: center;
  padding-top: 20px;
  margin: auto;
}
.bookmark {
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
