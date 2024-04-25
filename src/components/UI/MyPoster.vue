<template>
  <img :src="path" class="photo" />
</template>
<script setup>
const props = defineProps({
  path:{
    type: String
  }
});
</script>
<style scoped>
.photo {
  width: 100%;
}
</style>
