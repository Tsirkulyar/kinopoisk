<template>
  <Card 
  class="card-general"
  v-tooltip="{value: movie.shortDescription, showDelay: 300, hideDelay: 300}"
  >
    <template #header>
      <div class="img">
        <my-poster :path="movie.poster.url" :size="size" />
      </div>
    </template>
    <template #title>
      <div class="title">
        {{ movie.name }}
      </div>
    </template>
    <template #subtitle class="about-card">
      <i class="pi pi-stopwatch"></i>
      {{ movie.movieLength }}
      <i class="pi pi-calendar"></i>
      {{ movie.year }}
      <i class="pi pi-star"></i>
      {{ movie.rating.kp }}
    </template>
    <p class="pt">
      {{ movie.shortDescription }}
    </p>
  </Card>
</template>

<script setup>
import { ref } from "vue";
import MyPoster from "./UI/MyPoster.vue";
const props = defineProps({
  // ["movie"]
  movie:{
    type: Object
  }
});
const size = ref(280);
</script>
<style scoped>
:root{
    --width-card: `${size.value / 0.66}px`
}
.card-general{
    width: var(--width-card);
     overflow: hidden;
     margin-top: 50px;
     margin-bottom: 50px;
}
.img{
    text-align: center;
}
.title{
    font-size: 20px;
    align-items: center;
    width: 190px;
    height: 80px;
    overflow: hidden;
}
.about-card{
    margin-top: 0;
}
.content-card{
    display: none;
}
</style>
