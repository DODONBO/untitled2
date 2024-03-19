<template>
  <div>
    <MainPagePopularModelSec/>
    <MainPageMoreModelSec/>
    <MainPageModelCategorySec/>
  </div>
</template>
<script>
import MainPagePopularModelSec from "../section/model/mainPagePopularModelSec.vue";
import MainPageMoreModelSec from '../section/model/mainPageMoreModelSec.vue';
import MainPageModelCategorySec from "../section/model/mainPageModelCategorySec.vue";

export default {
  components: {
    MainPagePopularModelSec, MainPageMoreModelSec, MainPageModelCategorySec
  }
}
</script>
