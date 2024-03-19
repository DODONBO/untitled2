<template>
  <div>
    <MainPageWeekPartnerSec/>
    <MainPagePartnerCategorySec/>
  </div>
</template>
<script>
import MainPageWeekPartnerSec from "../section/partner/mainPageWeekPartnerSec.vue";
import MainPagePartnerCategorySec from "../section/partner/mainPagePartnerCategorySec.vue";

export default {
  components: {MainPagePartnerCategorySec, MainPageWeekPartnerSec}
}
</script>