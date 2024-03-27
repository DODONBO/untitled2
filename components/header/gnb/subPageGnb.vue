<template>
  <nav class="gnb_wrap on">
    <ul id="gnb">
      <li>
        <a @click="toggleClassOn($event)">건축모델
          <font-awesome-icon icon="fa-solid fa-caret-down"/>
        </a>
        <div class="gnb_sub_menu_wrap">
          <ul class="gnb_sub_menu">
            <li @click="checkBoxAndRemoveOthers($event)">
              <div class="check_box_wrap">
                <div class="check_box on">
                    <font-awesome-icon icon="check"/>
                </div>
              </div>
              인기순
            </li>
            <li @click="checkBoxAndRemoveOthers($event)">
              <div class="check_box_wrap">
                <div class="check_box">
                    <font-awesome-icon icon="check"/>
                </div>
              </div>
              추천순
            </li>
            <li @click="checkBoxAndRemoveOthers($event)">
              <div class="check_box_wrap">
                <div class="check_box">
                    <font-awesome-icon icon="check"/>
                </div>
              </div>
              등록순
            </li>
            <li>
              <div class="gnb_sub_menu_btn">조회하기</div>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a @click="toggleClassOn($event)">파트너
          <font-awesome-icon icon="fa-solid fa-caret-down"/>
        </a>
        <div class="gnb_sub_menu_wrap">
          <ul class="gnb_sub_menu">
            <li @click="checkBoxAndRemoveOthers($event)">
              <div class="check_box_wrap">
                <div class="check_box on">
                    <font-awesome-icon icon="check"/>
                </div>
              </div>
              인기순
            </li>
            <li @click="checkBoxAndRemoveOthers($event)">
              <div class="check_box_wrap">
                <div class="check_box">
                    <font-awesome-icon icon="check"/>
                </div>
              </div>
              추천순
            </li>
            <li @click="checkBoxAndRemoveOthers($event)">
              <div class="check_box_wrap">
                <div class="check_box">
                  <font-awesome-icon icon="check"/>
                </div>
              </div>
              등록순
            </li>
            <li>
              <div class="gnb_sub_menu_btn">조회하기</div>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a @click="toggleClassOn($event)">건축자재
          <font-awesome-icon icon="fa-solid fa-caret-down"/>
        </a>
        <div class="gnb_sub_menu_wrap">
          <ul class="gnb_sub_menu">
            <li @click="checkBoxAndRemoveOthers($event)">
              <div class="check_box_wrap">
                <div class="check_box on">
                    <font-awesome-icon icon="check"/>
                </div>
              </div>
              인기순
            </li>
            <li @click="checkBoxAndRemoveOthers($event)">
              <div class="check_box_wrap">
                <div class="check_box">
                    <font-awesome-icon icon="check"/>
                </div>
              </div>
              추천순
            </li>
            <li @click="checkBoxAndRemoveOthers($event)">
              <div class="check_box_wrap">
                <div class="check_box">
                    <font-awesome-icon icon="check"/>
                </div>
              </div>
              등록순
            </li>
            <li>
              <div class="gnb_sub_menu_btn">조회하기</div>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="#">콘텐츠</a>
      </li>
      <li>
        <a href="#">멤버스샵(준비중)</a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import {createApp} from "vue";
import {library} from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import $ from 'jquery';

const app = createApp({});

library.add(fas, far)
app.component('font-awesome-icon', FontAwesomeIcon)

const checkBoxAndRemoveOthers = (e: Event) => {
    const $currentTarget: JQuery<EventTarget> = $(e.currentTarget!);

    $currentTarget.siblings().children('.check_box_wrap').children('.check_box').removeClass('on');
    $currentTarget.children('.check_box_wrap').children('.check_box').addClass('on');
}

const toggleClassOn = (e: Event) => {
    const $currentTargetParents: JQuery<EventTarget> = $(e.currentTarget!).parent('li');

    if ($currentTargetParents.hasClass('on')) {
        $('#gnb>li').removeClass('on');

    } else {
        $('#gnb>li').removeClass('on');

        $currentTargetParents.addClass('on');
    }
}
</script>
