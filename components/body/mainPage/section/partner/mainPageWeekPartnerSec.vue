<template>
  <div class="main_sec">
    <div class="inner">
      <div class="title_wrap">
        <h2 class="main_sec_title">가장 많이 본 <span class="blue">파트너</span></h2>
        <div class="see_more_btn"><span>더보기</span>
            <font-awesome-icon icon="plus"/>
        </div>
      </div>
      <div class="contents_wrap partner">
        <div class="contents_box">
          <div class="partner_name_wrap">
            <div class="partner_logo_box">
              <div class="partner_logo"></div>
            </div>
            <div class="partner_name_box">
              <span class="partner_name">한국건축가협회</span>
              <span class="partner_type">협회/단체</span>
            </div>
          </div>
          <div class="partner_img_wrap">
            <div class="partner_img_box">
              <div class="partner_img">
              </div>
            </div>
            <div class="partner_img_box">
              <div class="partner_img">
              </div>
            </div>
            <div class="partner_img_box">
              <div class="partner_img">
              </div>
            </div>
          </div>
        </div>
        <div class="contents_box">
          <div class="partner_name_wrap">
            <div class="partner_logo_box">
              <div class="partner_logo"></div>
            </div>
            <div class="partner_name_box">
              <span class="partner_name">(주)토문건축사사무소</span>
              <span class="partner_type">건축사사무소(설계,감리,디자인)</span>
            </div>
          </div>
          <div class="partner_img_wrap">
            <div class="partner_img_box">
              <div class="partner_img">
              </div>
            </div>
            <div class="partner_img_box">
              <div class="partner_img">
              </div>
            </div>
            <div class="partner_img_box">
              <div class="partner_img">
              </div>
            </div>
          </div>
        </div>
        <div class="contents_box">
          <div class="partner_name_wrap">
            <div class="partner_logo_box">
              <div class="partner_logo"></div>
            </div>
            <div class="partner_name_box">
              <span class="partner_name">타이가</span>
              <span class="partner_type">시공사(종합건설가,돔구조,막구조시공사)</span>
            </div>
          </div>
          <div class="partner_img_wrap">
            <div class="partner_img_box">
              <div class="partner_img">
              </div>
            </div>
            <div class="partner_img_box">
              <div class="partner_img">
              </div>
            </div>
            <div class="partner_img_box">
              <div class="partner_img">
              </div>
            </div>
          </div>
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