import { defineStore } from 'pinia';
import {PartnerResponse} from "../src/response/partner/partnerResponse";

export const usePartnerModule = defineStore('partners', {
    state: () => ({ partnerResponses: [] as PartnerResponse[] }),
    getters: {
        partners(): PartnerResponse[] {
            return this.partnerResponses
        },
    },
    actions: {
        getPartners() {
            this.partnerResponses = [
                {
                    partnerName: '대전광역시건축사회',
                    partnerType: '협회/단체',
                    partnerDetailType: '협회',
                    partnerTag: '#건축사의 품위보전 #권익옹호 #회원간친목도모 #건축기술연구발전'
                }, {
                    partnerName: '한국여성건축가협회',
                    partnerType: '협회/단체',
                    partnerDetailType: '협회',
                    partnerTag: '#건축문화 홍보 및 교육 #국내외 건축 및 정보교류 및 자료공개'
                }, {
                    partnerName: 'Gpass',
                    partnerType: '협회/단체',
                    partnerDetailType: '협회,단체',
                    partnerTag: '#해외 전시회 및 해외 바이어 상담회 참가지원, #해외조달시장 입찰정보 제공'
                }]
        }
    }
})