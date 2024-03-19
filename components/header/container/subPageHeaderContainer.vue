<template>
  <header id="sub_page_header">
    <div class="inner">
      <a href="#" class="logo">LOGO</a>
      <SubPageGnb/>
      <div class="user_menu_wrap">
        <div class="search_wrap">
          <div class="search_icon" @click="toggleSearchWrap">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          </div>
          <div class="search_input">
            <input type="text">
          </div>
          <div class="search_close_btn" @click="minimizeSearchWrap()">
            <font-awesome-icon :icon="['fas', 'xmark']" />
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
import {createApp} from "vue";
import {library} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import $ from 'jquery';
import SubPageGnb from "../gnb/subPageGnb.vue";

  const app = createApp({});

  library.add(fas, far)
  app.component('font-awesome-icon', FontAwesomeIcon)

  function toggleSearchWrap(event: Event): void {
    const $currentTargetParent = $(event.currentTarget!).parent('.search_wrap');

    if ($currentTargetParent.hasClass('on')) {
      $currentTargetParent.removeClass('on');

    } else {
      $currentTargetParent.addClass('on');
    }
  }

  function minimizeSearchWrap(): void {
    $('.search_wrap').removeClass('on');
  }
</script>
