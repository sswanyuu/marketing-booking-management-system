<template>
  <section class="features-section bg-white">
    <div class="container d-flex justify-content-center">
      <!-- Left: Why fullkeep -->
      <div class="d-flex flex-column info-container">
        <div class="text-primary headline-5-bold">Why fullkeep?</div>
        <div class="body-1 text-black">
          Fullkeep
          是專為精緻餐飲設計的訂位管理系統,支援多裝置與多平台整合。協助餐廳簡化營運流程、優化顧客服務,強化品牌專業形象與競爭力。
        </div>
      </div>
      <div class="divider d"></div>

      <!-- Right: Features -->
      <div>
        <div class="d-flex features-grid">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-card d-flex flex-column align-self-stretch"
          >
            <div class="d-flex justify-content-between">
              <img
                :src="feature.icon"
                :alt="feature.title"
                class="feature-icon-img"
              />
              <img :src="arrowRightIcon" alt="Arrow right" class="arrow-icon" />
            </div>

            <div class="d-flex flex-column feature-content">
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
import { ref } from 'vue';
import '../../../scss/components/_features-section.scss';

// Import icons
import uxIcon from '../assets/icons/ux.svg';
import marketingIcon from '../assets/icons/marketing.svg';
import touristsIcon from '../assets/icons/tourists.svg';
import arrowRightIcon from '../assets/icons/arrow-right.svg';

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
</script>
