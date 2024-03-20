<template>
  <div>
    <SubPageHeaderContainer/>
    <SubPageContainer/>
    <SubPageFooterContainer/>
  </div>
</template>

<script lang="ts">
import SubPageHeaderContainer from "../../components/header/container/subPageHeaderContainer.vue";
import SubPageContainer from "../../components/body/subPage/container/subPageContainer.vue";
import SubPageFooterContainer from "../../components/footer/container/subPageFooterContainer.vue";

export default {
  components: {
    SubPageHeaderContainer,
    SubPageContainer,
    SubPageFooterContainer

  }
}
</script>
