<template>
    <div class="tag_modal">
        <div class="modal_title_wrap">
            <div class="modal_title">키워드</div>
            <div class="close_btn">
                <font-awesome-icon :icon="['fas', 'xmark']" />
            </div>
        </div>
        <div class="tag_wrap">
            <div class="left_tag_wrap">
                <div class="left_tag">파트너 분류</div>
            </div>
            <div class="right_tag_wrap">
                <div class="right_tag">건축사사무소</div>
                <div class="right_tag">엔지니어링</div>
                <div class="right_tag">실내디자인</div>
                <div class="right_tag">건설사</div>
                <div class="right_tag">건축자재</div>
                <div class="right_tag">미디어</div>
                <div class="right_tag">사진</div>
                <div class="right_tag">영상</div>
                <div class="right_tag">디자인</div>
                <div class="right_tag">감리</div>
                <div class="right_tag">설비</div>
                <div class="right_tag">전기</div>
                <div class="right_tag">토목</div>
                <div class="right_tag">도시계획</div>
                <div class="right_tag">설계</div>
                <div class="right_tag">신인작가</div>
                <div class="right_tag">기성작가</div>
                <div class="right_tag">시공</div>
                <div class="right_tag">유통</div>
                <div class="right_tag">제조</div>
                <div class="right_tag">한국건축가</div>
                <div class="right_tag">명품명장</div>
                <div class="right_tag">한국여성건축가</div>
            </div>
        </div>
        <div class="tag_wrap">
            <div class="left_tag_wrap">
                <div class="left_tag">입력키워드</div>
            </div>
            <div class="right_tag_wrap">
            </div>
        </div>
        <div class="tag_wrap">
            <div class="left_tag_wrap">
                <div class="left_tag">직접입력</div>
            </div>
            <div class="right_tag_wrap">
                <div class="tag_input_wrap">
                    <input type="text">
                    <div class="create_tag_btn">등록</div>
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