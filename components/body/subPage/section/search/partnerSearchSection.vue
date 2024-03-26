<template>
    <div class="search_section partner">
        <div class="inner">
            <div class="search_wrap">
                <div class="search_icon">
                    <font-awesome-icon icon="magnifying-glass"/>
                </div>
                <div class="search_input">
                    <input type="text" placeholder="검색">
                </div>
                <div class="search_type_btn_wrap">
                    <div class="search_type_btn on">건축모델</div>
                    <div class="search_type_btn">파트너</div>
                    <div class="search_type_btn">건축자재</div>
                </div>
            </div>
            <div class="category_btn_wrap">
                <div class="category_btn">주거</div>
                <div class="category_btn">업무</div>
                <div class="category_btn">상업판매</div>
                <div class="category_btn">교육/공공/문화</div>
                <div class="category_btn">숙박/위락</div>
                <div class="category_btn">스포츠/레저</div>
                <div class="category_btn">공장/창고</div>
                <div class="category_btn">의료</div>
                <div class="category_btn">종교</div>
                <div class="category_btn">기타</div>
            </div>
        </div>
        <div class="tag_btn_container">
            <div class="inner">
                <div class="tag_btn_wrap">
                    <div class="tag_btn">명품명장</div>
                    <div class="tag_btn">방염</div>
                    <div class="tag_btn">자동</div>
                    <div class="tag_btn">방수재</div>
                    <div class="tag_btn">시스템</div>
                    <div class="tag_btn">흡음</div>
                    <div class="tag_btn">도료</div>
                    <div class="tag_btn">바닥재</div>
                    <div class="tag_btn">지붕재</div>
                    <div class="tag_btn">커튼월</div>
                    <div class="tag_btn">간편</div>
                    <div class="tag_btn">유리</div>
                    <div class="tag_btn">조달</div>
                    <div class="tag_btn">불연</div>
                    <div class="tag_btn">친환경</div>
                    <div class="tag_btn">단열</div>
                    <div class="tag_btn">안전</div>
                    <div class="tag_btn">고강도</div>
                    <div class="tag_btn">경량</div>
                    <div class="tag_btn">미장재</div>
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