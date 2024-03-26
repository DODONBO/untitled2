<template>
  <div id="pop_con" class="main_sec">
    <div class="inner">
      <div class="title_wrap right">
        <div class="see_more_btn"><span>더보기</span>
            <font-awesome-icon icon="plus"/>
        </div>
      </div>
      <div class="contents_wrap">
        <div class="contents_box">
          <div class="img_box contents">
            <div class="img"></div>
          </div>
          <span class="box_title">어반스케치</span>
        </div>
        <div class="contents_box">
          <div class="img_box contents">
            <div class="img"></div>
          </div>
          <span class="box_title">요양병원</span>
        </div>
        <div class="contents_box">
          <div class="img_box contents">
            <div class="img"></div>
          </div>
          <span class="box_title">영월 체육관</span>
        </div>
        <div class="contents_box">
          <div class="img_box contents">
            <div class="img"></div>
          </div>
          <span class="box_title">영월 체육관</span>
        </div>
        <div class="contents_box">
          <div class="img_box contents">
            <div class="img"></div>
          </div>
          <span class="box_title">밤하늘에 달빛을 담은 달님이네</span>
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