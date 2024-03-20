<template>
  <div>
    <SubPageHeaderContainer/>
      <DetailPageContainer/>
    <SubPageFooterContainer/>
  </div>
</template>

<script lang="ts">
import SubPageHeaderContainer from "../../../components/header/container/subPageHeaderContainer.vue";
import SubPageFooterContainer from "../../../components/footer/container/subPageFooterContainer.vue";
import DetailPageContainer from "../../../components/body/subPage/container/detailPageContainer.vue";

export default {
  components: {
      DetailPageContainer,
    SubPageHeaderContainer,
    SubPageFooterContainer

  }
}
</script>
