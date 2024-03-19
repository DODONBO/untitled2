<template>
  <div>
    <MainPageHeaderContainer/>
    <MainPageContainer/>
    <MainPageFooterContainer/>
  </div>
</template>
<script>
  import MainPageHeaderContainer from '/components/header/container/mainPageHeaderContainer.vue';
  import MainPageContainer from '/components/body/mainPage/container/mainPageContainer.vue';
  import MainPageFooterContainer from '/components/footer/container/mainPagefooterContainer.vue';

  export default {
    components: {
      MainPageHeaderContainer,
      MainPageContainer,
      MainPageFooterContainer
    }
  }
</script>