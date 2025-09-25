<template>
  <div class="home d-flex flex-column align-items-center">
    <!-- hero -->
    <section class="hero">
      <Button variant="primary">預約 Demo</Button>
    </section>
    <!-- brands -->
    <section
      class="brands d-flex flex-column align-items-center gap-4 gap-md-8"
    >
      <div class="brands__title text-gray">領先品牌率先採用</div>
      <div class="brands__list row justify-content-center">
        <img
          src="../assets/images/pages/home/brand-1.png"
          class="col-auto brand__logo"
          alt="brand-1"
        />
        <img
          src="../assets/images/pages/home/brand-2.png"
          class="col-auto brand__logo"
          alt="brand-2"
        />
        <img
          src="../assets/images/pages/home/brand-3.png"
          class="col-auto brand__logo"
          alt="brand-3"
        />
        <img
          src="../assets/images/pages/home/brand-4.png"
          class="col-auto brand__logo"
          alt="brand-4"
        />
        <img
          src="../assets/images/pages/home/brand-5.png"
          class="col-auto brand__logo"
          alt="brand-5"
        />
      </div>
    </section>
    <!-- features -->
    <section
      class="features rounded-4 bg-primary text-white d-flex justify-content-center"
    >
      <div
        class="header-container d-flex flex-column align-items-center gap-4 gap-md-6"
      >
        <div class="header-container__title">不只是訂位這麼簡單</div>
        <div class="header-container__description text-center">
          全方位解決方案，零門檻上手，桌位管理、拓展客源，一套搞定。領先品牌率先採用
        </div>
      </div>
    </section>
    <!-- pain points -->
    <section
      ref="painPointsSection"
      class="painpoints d-flex align-items-center flex-column gap-8"
    >
      <div class="painpoints-background" />
      <div
        class="header-container d-flex flex-column align-items-center gap-4 gap-md-6"
      >
        <div class="header-container__title">管理的難題，我們懂</div>
        <div class="header-container__description text-center text-gray">
          不是只能習慣混亂，我們提供更好的選擇，讓餐廳管理回到你能掌握的節奏，痛點不再是日常。
        </div>
      </div>
      <div class="painpoints__list row g-5 d-none d-md-flex">
        <img
          src="../assets/images/pages/home/painpoint-1.png"
          alt="painpoint-1"
          class="painpoints_item1 col-12"
        />
        <img
          src="../assets/images/pages/home/painpoint-2.png"
          alt="painpoint-2"
          class="painpoints_item2 col-auto"
        />
        <img
          src="../assets/images/pages/home/painpoint-3.png"
          alt="painpoint-3"
          class="painpoints_item3 col-auto"
        />
      </div>
      <div
        class="painpoints__list gap-5 d-flex d-md-none flex-column align-items-stretch"
      >
        <img
          src="../assets/images/pages/home/painpoint-1-mobile.png"
          alt="painpoint-1"
          class="painpoints_item1"
        />
        <img
          src="../assets/images/pages/home/painpoint-2-mobile.png"
          alt="painpoint-2"
          class="painpoints_item2"
        />
        <img
          src="../assets/images/pages/home/painpoint-3-mobile.png"
          alt="painpoint-3"
          class="painpoints_item3"
        />
      </div>
    </section>
    <!-- background image -->
    <section class="background-image w-100 d-flex justify-content-end">
      <img src="../assets/images/pages/home/bg.png" alt="background-image" />
    </section>
    <!-- solutions -->
    <section class="solutions d-flex flex-column align-items-center">
      <div
        class="header-container d-flex flex-column align-items-center gap-4 gap-md-6"
      >
        <div class="header-container__title">
          全方位的營運體驗，讓你專注把餐廳做到最好
        </div>
      </div>
      <div class="row g-5">
        <div
          v-for="solution in solutions"
          :key="solution.title"
          class="col-md-6"
          :class="solution.containerClass"
        >
          <div
            class="solution d-flex justify-content-between align-items-center flex-column bg-gray-light rounded-4 pt-md-9 px-md-9 pt-7 px-7 mx-0"
            :class="solution.solutionClass"
          >
            <div class="info d-flex flex-column gap-3 gap-md-4">
              <div class="info__title">{{ solution.title }}</div>
              <div class="info__description text-gray">
                {{ solution.description }}
              </div>
            </div>
            <div
              class="solution__image-container h-20 d-flex flex-column-reverse"
            >
              <img :src="solution.image" alt="solution-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Solution1 from '../assets/images/pages/home/solution-1.png';
import Solution2 from '../assets/images/pages/home/solution-2.png';
import Solution3 from '../assets/images/pages/home/solution-3.png';
import Solution4 from '../assets/images/pages/home/solution-4.png';
import Solution5 from '../assets/images/pages/home/solution-5.png';

// import FeatureCard from './components/FeatureCard.vue';

const features = [
  {
    title: '一鍵預約・輕鬆回訪',
    image: '../assets/images/pages/home/feature-1.png',
  },
  {
    title: '從本地到國際',
    image: '../assets/images/pages/home/feature-2.png',
  },
  {
    title: '客製系統・輕鬆嵌入',
    image: '../assets/images/pages/home/feature-3.png',
  },
];
const solutions = [
  {
    title: 'LINE 訊息整合',
    description:
      '自動發送訂位與候補通知，不再依賴人工逐一聯繫，讓顧客即時收到更新，也讓員工有更多時間專注服務現場。',
    image: Solution1,
  },
  {
    title: 'Google 訂位整合',
    description:
      '搜尋結果不只是曝光，而能直接轉化為訂位機會。搜尋結果同時出現訂位連結，大幅提升轉單效率。',
    image: Solution2,
  },
  {
    title: '預付訂金與提醒功能',
    description:
      '彈性設定訂金金額與付款方式，搭配自動提醒機制，有效降低 No Show 率，讓每一份食材與座位都被善用，提升營運效率。',
    image: Solution3,
  },
  {
    title: 'CRM 與再行銷工具',
    description:
      '內建顧客資料系統與行銷模組，輕鬆設定推播優惠、新菜單通知與節日問候，從一次性客人養成忠誠熟客。',
    image: Solution4,
  },
  {
    title: '跨店共用付款與備註資料',
    description:
      '記錄每位顧客的付款紀錄與訂位偏好，不論哪家分店，一次輸入即可通用，讓回訪體驗更加順暢，服務更有溫度。',
    image: Solution5,
    containerClass: ['col-md-12'],
    solutionClass: ['col-md-12', 'flex-md-row'],
  },
];

import { ref, onMounted, onUnmounted } from 'vue';

const painPointsSection = ref(null);

const handleScroll = () => {
  if (!painPointsSection.value) return;

  const painpointsElement = painPointsSection.value;
  if (!painpointsElement) return;

  const rect = painpointsElement.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  const scrollProgress = Math.max(
    0,
    Math.min(1, (windowHeight - rect.bottom) / windowHeight)
  );

  // Keep opacity at 1 when scrollProgress is 0-0.5, then fade from 0.5-1
  const opacity =
    scrollProgress <= 0.5 ? 1 : Math.max(0, 2 - 2 * scrollProgress);
  painPointsSection.value.style.opacity = opacity;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  console.log('🚀 ~ window:', window);
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss">
@import '../../../scss/pages/_home.scss';
</style>
