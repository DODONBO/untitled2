<template>
  <div id="pop_con" class="main_sec">
    <div class="inner">
      <div class="title_wrap right">
        <div class="see_more_btn"><span>더보기</span>
            <font-awesome-icon :icon="['fas', 'plus']" />
        </div>
      </div>
      <div class="contents_wrap">
        <div class="contents_box">
          <div class="img_box contents">
            <div class="img"></div>
          </div>
          <span class="box_title">나만 알고 싶은 뷰~</span>
        </div>
        <div class="contents_box">
          <div class="img_box contents">
            <div class="img"></div>
          </div>
          <span class="box_title">나만 알고 싶은 뷰~</span>
        </div>
        <div class="contents_box">
          <div class="img_box contents">
            <div class="img"></div>
          </div>
          <span class="box_title">나만 알고 싶은 뷰~</span>
        </div>
        <div class="contents_box">
          <div class="img_box contents">
            <div class="img"></div>
          </div>
          <span class="box_title">나만 알고 싶은 뷰~</span>
        </div>
        <div class="contents_box">
          <div class="img_box contents">
            <div class="img"></div>
          </div>
          <span class="box_title">나만 알고 싶은 뷰~</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {createApp} from "vue";
import {library} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const app = createApp({});

library.add(fas, far)
app.component('font-awesome-icon', FontAwesomeIcon)
</script>
