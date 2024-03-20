<template>
    <div class="detail_top_section">
        <div class="detail_main_img partner">

        </div>
        <div class="detail_txt_wrap">
            <div class="name_box">
                <div class="logo_img"></div>
                <span class="name">씨엠엑스</span>
            </div>
            <div class="badge_box">
                <div class="badge">
                    <div class="badge_icon"><font-awesome-icon :icon="['fas', 'hourglass-half']" /></div>
                    <div class="badge_name">업력 15년차</div>
                    <div class="badge_txt">2009년 01월</div>
                </div>
                <div class="badge">
                    <div class="badge_icon"><font-awesome-icon :icon="['far', 'building']" /></div>
                    <div class="badge_name">중소기업</div>
                    <div class="badge_txt">기업형태</div>
                </div>
                <div class="badge">
                    <div class="badge_icon"><font-awesome-icon :icon="['fas', 'ribbon']" /></div>
                    <div class="badge_name">3건</div>
                    <div class="badge_txt">인증현황</div>
                </div>
            </div>
            <div class="tag_box">
                모바일 건설앱 개발, 건설 소프트웨어 개발, 건설협업 플랫폼 개발
            </div>
            <div class="detail_info_wrap">
                <div class="name">주식회사 씨엠엑스</div>
                <div class="addr"><font-awesome-icon :icon="['fas', 'location-dot']" /> 서울 금천구 디지털로9길 32 (가산동, 갑을그레이트밸리) B동 16층 1603,1604호</div>
                <div class="link_btn_wrap">
                    <div class="link_btn"><font-awesome-icon :icon="['fas', 'phone']" /> 연락처</div>
                    <div class="link_btn"><font-awesome-icon :icon="['fas', 'envelope']" /> 이메일</div>
                    <div class="link_btn"><font-awesome-icon :icon="['fas', 'link']" /> 사이트</div>
                    <div class="link_btn"><font-awesome-icon :icon="['far', 'calendar']" /> 문의하기</div>
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