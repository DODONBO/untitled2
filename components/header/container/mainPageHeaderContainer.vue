<template>
  <header id="header">
    <div class="header_top_wrap">
      <div class="inner">
        <a href="#" class="logo">LOGO</a>
        <div class="main_page_search_input_wrap">
          <select name="" id="">
            <option value="">건축모델</option>
            <option value="">파트너</option>
            <option value="">건축자재</option>
          </select>
          <input type="text" placeholder="어떤 건축물이 궁금하세요?">
          <div class="main_page_search_btn">
<!--            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />-->
          </div>
        </div>
        <div class="right_sec"></div>
      </div>
    </div>
    <div class="header_bottom_wrap">
      <div class="inner">
<!--        <MainGnb/>-->
        <div class="user_menu_container">
          <div class="sign_in_btn btn">회원가입</div>
          <div class="cs_btn btn">고객센터</div>
          <div class="write_btn btn">글쓰기</div>
        </div>
      </div>
    </div>
  </header>
</template>
<!--<script lang="ts">-->
<!--import {Component, Vue} from 'vue-property-decorator'-->
<!--import MainGnb from "~/components/header/gnb/mainGnb.vue";-->
<!--import $ from 'jquery';-->

<!--@Component({-->
<!--  components: { MainGnb }-->
<!--})-->
<!--export default class MainPageHeaderContainer extends Vue {-->

<!--  private toggleSearchWrap(e: Event): void {-->
<!--    const $currentTargetParent: JQuery<EventTarget> = $(e.currentTarget!).parent('.search_wrap');-->

<!--    if ($currentTargetParent.hasClass('on')) {-->
<!--      $currentTargetParent.removeClass('on');-->

<!--    } else {-->
<!--      $currentTargetParent.addClass('on');-->
<!--    }-->
<!--  }-->

<!--  private minimizeSearchWrap(): void {-->
<!--    $('.search_wrap').removeClass('on');-->
<!--  }-->

<!--}-->
<!--</script>-->
