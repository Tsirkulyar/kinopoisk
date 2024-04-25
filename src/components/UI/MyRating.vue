<template>
  <div class="star-wrapper">
    <Rating
      v-model="inputValue"
      :stars="10"
      :cancel="false"
      class="star"
      v-tooltip.right="{
        value: `Данный фильм на «Кинопоиск» оценили более ${dataStore.movieObj.votes.kp} пользователей`,
        showDelay: 300,
        hideDelay: 700,
      }"
    />
  </div>
</template>

<script setup>
import { useDataStore } from "../../store/dataStore";
import { ref, watch } from "vue";

const tr = ref(false)


// const obj = ref(dataStore.movieObj)

let inputValue = ref('');
const ratingId = ref({
  'id': "",
  'name': "",
  'star': ""
  
});

const dataStore = useDataStore();

const recalculationStar = () =>{
  console.log('start')

  for(let index = 0; index < dataStore.userRating.length; index++){
      console.log(dataStore.userRating[index].id)
      console.log(dataStore.movieObj.id)
      if(dataStore.userRating[index].id == dataStore.movieObj.id){
        inputValue.value = dataStore.userRating[index].star
        console.log(inputValue.value)
      }else{
        inputValue.value =''
      }
    }


  // dataStore.userRating.forEach(e => {
  //   if(e.id == dataStore.movieObj.id){
  //     tr.value=true
  //   }else{
  //     tr.value = false
  //   }})
  // console.log(tr.value)
  // if(tr.value){
  // console.log(tr.value)
  //   for(let index = 0; index < dataStore.userRating.length; index++){
  //     if(dataStore.userRating[index].id == dataStore.movieObj.id){
  //       inputValue.value = dataStore.userRating[index].star
  //       console.log(inputValue.value)
  //     }
  //   }
  // }
}


const saveRatingData = (star)=>{
  if (star != ''){
    dataStore.userRating = dataStore.userRating.filter(el => el.id != dataStore.movieObj.id)
    ratingId.value.id = dataStore.movieObj.id
    ratingId.value.name = dataStore.movieObj.name
    ratingId.value.star = star
    dataStore.userRating.push(ratingId.value)
  }
  }

// onMounted(() => {
  recalculationStar()
// });

watch(
        () => dataStore.movieObj,
        (state) => {
        recalculationStar()
          // console.log('00001')
        },
        { deep: true }
    );

watch(
        () => inputValue,
        (state) => {
          saveRatingData(state.value)
          // console.log('555555555555')
        },
        { deep: true }
      );


</script>

<style scoped>
.star-wrapper {
  display: flex;
  justify-content: center;
}
</style>
