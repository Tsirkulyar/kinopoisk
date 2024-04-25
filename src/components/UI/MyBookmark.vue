<template>
    <Button style="padding-left: 5px; padding-right: 5px;">

        <p v-if="yesOrNo">Убрать из закладок</p>
        <p v-else>Добавить в закладки</p>
        <i class="pi pi-bookmark"/>
    </Button>
</template>

<script setup>
import {defineProps} from "vue"

const props = defineProps({
  yesOrNo:{
    type: Boolean
  }
});



</script>