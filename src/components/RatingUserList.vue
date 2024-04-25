<template>
  <div class="general-wrap">
    <div class="text-star">
      <h1>Ваши нескромные оценки:</h1>
    </div>

    <Listbox
      :options="dataStore.userRating"
      optionLabel="name"
      class="wrap-star"
    >
      <template #option="slotProps">
        <div class="star-list">
          {{ slotProps.option.name }}
          <Rating
            v-model="slotProps.option.star"
            readonly
            :cancel="false"
            :stars="10"
          />
          <Button @click="deleteBookMark(slotProps.option.id)">Delete</Button>
        </div>
      </template>
    </Listbox>
  </div>
</template>

<script setup>
import { useDataStore } from "../store/dataStore";

const dataStore = useDataStore();


const deleteBookMark = (idMark) =>{
  dataStore.userRating = dataStore.userRating.filter(e => e.id != idMark)
  console.log(dataStore.userBookmarks)
}
</script>

<style scoped>
.star-list {
  display: flex;
  justify-content: space-between;
}
.wrap-star {
  max-height: 300px;
  overflow: auto;
  width: 70%;
  margin: auto;
}
.general-wrap {
  width: 80%;
  margin: auto;
}
</style>
