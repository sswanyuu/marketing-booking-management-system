<template>
  <section
    v-if="isOpen"
    class="header-features-section w-100 d-flex justify-content-center align-items-center bg-white"
  >
    <div
      class="header-features-section__container d-flex justify-content-center gap-xl-7 gap-3"
    >
      <!-- Left: Why fullkeep -->
      <div class="d-flex flex-column header-features-section__info gap-3">
        <div class="text-primary headline-5-bold">Why fullkeep?</div>
        <div class="body-1 text-black">
          Fullkeep
          是專為精緻餐飲設計的訂位管理系統,支援多裝置與多平台整合。協助餐廳簡化營運流程、優化顧客服務,強化品牌專業形象與競爭力。
        </div>
      </div>
      <div class="header-features-section__divider align-self-center"></div>

      <!-- Right: Features -->
      <div>
        <div class="d-flex gap-xl-5 gap-1">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-card d-flex flex-column align-self-stretch rounded-4 p-xl-8 p-4 gap-7"
            @mouseenter="handleMouseEnter(index)"
            @mouseleave="handleMouseLeave(index)"
          >
            <div class="d-flex justify-content-between">
              <img
                :src="feature.icon"
                :alt="feature.title"
                class="feature-card__image flex-shrink-0"
              />
              <img
                :src="arrowRightIcon"
                alt="Arrow right"
                class="feature-card__arrow"
                :class="{ 'feature-card__arrow--show': isHovered === index }"
              />
            </div>

            <div class="d-flex flex-column gap-2">
              <div class="headline-6-bold text-primary">
                {{ feature.title }}
              </div>
              <div class="body-2 text-black">{{ feature.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import '../../../scss/components/_features-section.scss';

// Import icons
import uxIcon from '../assets/icons/ux.svg';
import marketingIcon from '../assets/icons/marketing.svg';
import touristsIcon from '../assets/icons/tourists.svg';
import arrowRightIcon from '../assets/icons/arrow-right.svg';
import { ref } from 'vue';

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});
const features = [
  {
    icon: uxIcon,
    title: '優良使用體驗',
    description: '貼近使用者操作習慣,顧客與店家都能享受高效的數位訂位體驗。',
  },
  {
    icon: marketingIcon,
    title: '行銷再接觸',
    description: '精準行銷與數據分析,深化與顧客的互動,提升品牌忠誠度與回購率。',
  },
  {
    icon: touristsIcon,
    title: '觀光客友善',
    description:
      '無論語言、介面或聯繫工具,提供世界各地的顧客順暢的訂位流程與服務資訊。',
  },
];

const isHovered = ref(false);
const handleMouseEnter = index => {
  isHovered.value = index;
};
const handleMouseLeave = () => {
  isHovered.value = null;
};
</script>
