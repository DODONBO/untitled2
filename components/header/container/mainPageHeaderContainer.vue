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
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
          </div>
        </div>
        <div class="right_sec"></div>
      </div>
    </div>
    <div class="header_bottom_wrap">
      <div class="inner">
        <MainGnb/>
        <div class="user_menu_container">
          <div class="sign_in_btn btn">회원가입</div>
          <div class="cs_btn btn">고객센터</div>
          <div class="write_btn btn">글쓰기</div>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import MainGnb from "../gnb/mainGnb.vue";
import {createApp} from "vue";
import {library} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const app = createApp({});

library.add(fas, far)
app.component('font-awesome-icon', FontAwesomeIcon)
</script>
