<template>
  <header id="sub_page_header">
    <div class="inner">
      <a href="#" class="logo">LOGO</a>
<!--      <SubPageGnb/>-->
      <div class="user_menu_wrap">
        <div class="search_wrap">
          <div class="search_icon" @click="toggleSearchWrap">
<!--            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />-->
          </div>
          <div class="search_input">
            <input type="text">
          </div>
          <div class="search_close_btn" @click="minimizeSearchWrap()">
<!--            <font-awesome-icon :icon="['fas', 'xmark']" />-->
          </div>
        </div>
        <div class="user_menu_container">
          <div class="sign_in_btn btn">회원가입</div>
          <div class="write_btn btn">글쓰기</div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
// import {Component, Vue} from 'vue-property-decorator';
// import $ from 'jquery';
// import SubPageGnb from "~/components/header/gnb/subPageGnb.vue";
//
// @Component({
//   components: {SubPageGnb }
// })
// export default  {
//
//
//
//   private minimizeSearchWrap(): void {
//     $('.search_wrap').removeClass('on');
//   }
//
// }
  function toggleSearchWrap(event: Event) {
    const $currentTarget = event.currentTarget as HTMLElement;
    const $currentTargetParent = $currentTarget.parent('.search_wrap');

    if ($currentTargetParent.hasClass('on')) {
      $currentTargetParent.removeClass('on');

    } else {
      $currentTargetParent.addClass('on');
    }
  }
</script>
