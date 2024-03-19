<template>
  <div>
    <MainPagePopularMaterialSec/>
    <MainPageMoreMaterialSec/>
    <MainPageMaterialCategorySec/>
  </div>
</template>
<script>
import MainPagePopularMaterialSec from "../section/material/mainPagePopularMaterialSec.vue";
import MainPageMoreMaterialSec from '../section/material/mainPageMoreMaterialSec.vue';
import MainPageMaterialCategorySec from "../section/material/mainPageMaterialCategorySec.vue";

export default {
  components: {
    MainPagePopularMaterialSec, MainPageMoreMaterialSec, MainPageMaterialCategorySec
  }
}
</script>