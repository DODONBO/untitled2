<template>
    <div class="list_section">
        <div class="inner">
            <div class="partner_wrap">
                <div class="partner_box" v-for="partner in store.partners">
                    <div class="partner_box_top_wrap">
                        <div class="partner_logo">
                            <div class="partner_logo_img"></div>
                        </div>
                        <div class="partner_name_wrap">
                            <span class="partner_name">{{ partner.partnerName }}</span>
                            <span class="partner_type">{{ partner.partnerType }} <span class="partner_detail_type">{{ partner.partnerDetailType }}</span></span>
                            <span class="partner_tag">
                                {{ partner.partnerTag }}
                            </span>
                        </div>
                    </div>
                    <div class="partner_box_bottom_wrap">
                        <div class="partner_main_img"></div>
                        <div class="partner_main_img"></div>
                        <div class="partner_main_img"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import {usePartnerModule} from "~/store/partnerModule";

const store = usePartnerModule();
store.getPartners();
</script>