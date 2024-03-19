<template>
  <div>
    <MainPageVisual/>
    <MainPageHotSec/>
    <TopBanner/>
    <MainPagePopularContentsSec/>
    <TopBanner/>
    <MainPageMaterialContainer/>
    <MainPageModelContainer/>
    <MainPagePartnerContainer/>
  </div>
</template>

<script>
import MainPageVisual from '../section/mainPageVisualSec.vue';
import MainPageHotSec from '../section/mainPageHotSec.vue';
import TopBanner from '../banner/topBanner.vue'
import MainPagePopularContentsSec from "../section/contents/mainPagePopularContentsSec.vue";
import MainPagePopularMaterialSec from "../section/material/mainPagePopularMaterialSec.vue";
import MainPageMaterialContainer from "../container/mainPageMaterialContainer.vue";
import MainPageModelContainer from "../container/mainPageModelContainer.vue";
import MainPagePartnerContainer from "../container/mainPagePartnerContainer.vue";
//
//
// library.add(fas, far)
// Vue.component('font-awesome-icon', FontAwesomeIcon)
// Vue.config.productionTip = false
//

export default {
  components: {
    MainPagePartnerContainer,
    MainPageModelContainer,
    MainPageMaterialContainer,
    MainPagePopularMaterialSec, MainPagePopularContentsSec, TopBanner, MainPageHotSec, MainPageVisual
  }
}
</script>
