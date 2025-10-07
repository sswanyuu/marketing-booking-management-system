<template>
  <div class="home d-flex flex-column align-items-center">
    <!-- hero -->
    <section
      class="hero d-flex align-items-start align-items-md-center justify-content-center justify-content-md-start"
    >
      <img
        src="../assets/images/pages/home/hero-bg.png"
        alt="hero"
        class="background-image__desktop d-none d-md-block"
      />
      <img
        src="../assets/images/pages/home/hero-bg-mobile.png"
        alt="hero"
        class="background-image__mobile d-block d-md-none"
      />
      <div
        class="hero__content d-md-flex d-none flex-column w-50 gap-9 justify-content-center"
      >
        <img
          src="../assets/images/pages/home/hero-slogan.png"
          alt="hero"
          class="d-none d-md-block hero__slogan"
        />
        <Button variant="primary" class="align-self-start">預約 Demo</Button>
      </div>
      <div
        class="hero__content d-flex d-md-none flex-column w-50 gap-9 justify-content-center"
      >
        <img
          src="../assets/images/pages/home/hero-slogan-mobile.png"
          alt="hero"
          class="d-block d-md-none hero__slogan-mobile"
        />
        <Button variant="mobileFull">預約 Demo</Button>
      </div>
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
      class="features d-flex justify-content-center flex-column align-items-center"
    >
      <div class="features__background rounded-4" />
      <div
        class="header-container text-white d-flex flex-column align-items-center gap-4 gap-md-6"
      >
        <div class="headline-4-bold md-headline-1-bold">不只是訂位這麼簡單</div>
        <div class="body-1 md-headline-1-regular text-center">
          全方位解決方案，零門檻上手，桌位管理、拓展客源，一套搞定。領先品牌率先採用
        </div>
      </div>
      <!-- features desktop -->
      <div class="features__list d-none d-md-flex">
        <div class="row gx-7 gx-xl-9">
          <div v-for="feature in features" :key="feature.title" class="col-4">
            <div
              class="feature-card d-flex flex-column gap-4 bg-gray-light rounded-4 pt-9 justify-content-between align-items-center"
            >
              <div class="headline-6-bold xl-headline-5-bold mx-3">
                {{ feature.title }}
              </div>
              <img
                :src="feature.image"
                alt="feature-image"
                class="object-fit-cover overflow-hidden"
                :class="feature.class"
              />
            </div>
          </div>
        </div>
      </div>
      <!-- features mobile -->
      <swiper
        class="features__list d-flex d-md-none gap-2 flex-nowrap swiper"
        :slides-per-view="1.2"
        :space-between="12"
        :centered-slides="false"
        :grab-cursor="true"
      >
        <swiper-slide v-for="feature in features" :key="feature.title">
          <div
            class="feature-card d-flex flex-column gap-4 bg-gray-light rounded-4 pt-9 justify-content-between align-items-center"
          >
            <div class="headline-6-bold xl-headline-5-bold mx-3">
              {{ feature.title }}
            </div>
            <img
              :src="feature.image"
              alt="feature-image"
              class="object-fit-cover overflow-hidden"
              :class="feature.class"
            />
          </div>
        </swiper-slide>
      </swiper>
    </section>
    <!-- pain points -->
    <section
      ref="painPointsSection"
      class="painpoints d-flex align-items-center flex-column gap-8"
    >
      <div class="painpoints__background" />
      <div
        class="header-container d-flex flex-column align-items-center gap-4 gap-md-6"
      >
        <div class="header-container__title">管理的難題，我們懂</div>
        <div class="header-container__description text-center text-gray">
          不是只能習慣混亂，我們提供更好的選擇，讓餐廳管理回到你能掌握的節奏，痛點不再是日常。
        </div>
      </div>
      <div class="painpoints__list row gx-4 gy-4">
        <div class="col-12">
          <div
            class="painpoint-card painpoint-card--first d-flex flex-column flex-md-row gap-4 px-md-9 bg-secondary align-items-center rounded-4 justify-content-between"
          >
            <div
              class="d-flex flex-column gap-2 text-white col-md-5 mt-7 mt-md-0 mx-7 mx-md-0"
            >
              <div class="headline-6-bold md-headline-5-bold">
                {{ painPoints[0].title }}
              </div>
              <div class="body-3 md-body-1">
                {{ painPoints[0].description }}
              </div>
            </div>
            <div class="col-md-7 overflow-hidden mx-5 mx-md-0 align-self-end">
              <img
                :src="painPoints[0].image"
                alt="painpoint-image"
                class="object-fit-cover"
              />
            </div>
          </div>
        </div>

        <div class="col-12 col-md-5">
          <div
            class="painpoint-card d-flex flex-column pt-7 gap-4 pt-md-9 bg-gray-dark align-items-center rounded-4 justify-content-between"
          >
            <div
              class="painpoint-card__tourists-content d-flex flex-column gap-2 text-white w-75"
            >
              <div class="headline-6-bold md-headline-5-bold">
                {{ painPoints[1].title }}
              </div>
              <div class="body-3 md-body-1">
                {{ painPoints[1].description }}
              </div>
            </div>
            <img
              :src="painPoints[1].image"
              alt="painpoint-image"
              class="painpoint-card__tourists-image overflow-hidden w-100 object-fit-cover rounded-4"
            />
          </div>
        </div>
        <div class="col-12 col-md-7">
          <div
            class="painpoint-card d-flex flex-column gap-4 pt-md-9 bg-primary align-items-center rounded-4 justify-content-between"
          >
            <div
              class="d-flex flex-column gap-2 text-white w-75 mt-7 mt-md-0 mx-7 mx-md-0"
            >
              <div class="headline-6-bold md-headline-5-bold">
                {{ painPoints[2].title }}
              </div>
              <div class="body-3 md-body-1">
                {{ painPoints[2].description }}
              </div>
            </div>
            <img
              :src="painPoints[2].image"
              alt="painpoint-image"
              class="overflow-hidden"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- background image -->
    <section class="background-image w-100 d-flex justify-content-end">
      <img src="../assets/images/bg.png" alt="background-image" />
    </section>
    <!-- solutions -->
    <section class="solutions py-5">
      <div class="solutions__container d-flex flex-column">
        <div class="row">
          <div class="col-12">
            <div class="headline-4-bold md-headline-1-bold text-center">
              全方位的營運體驗，讓你專注把餐廳做到最好
            </div>
          </div>
        </div>
        <div class="row gx-4 gy-4">
          <div
            v-for="(solution, index) in solutions"
            :key="solution.title"
            :class="[
              'col-12',
              index === solutions.length - 1 ? 'col-md-12' : 'col-md-6',
            ]"
          >
            <div
              :class="[
                'solution-card d-flex bg-gray-light rounded-4 pt-7 pt-md-9 px-7 px-md-9 justify-content-between align-items-center',
                index === solutions.length - 1
                  ? 'flex-column flex-md-row'
                  : 'flex-column',
                'gap-4',
              ]"
            >
              <div class="d-flex flex-column gap-3 gap-md-4">
                <div class="headline-6-bold md-headline-4-bold">
                  {{ solution.title }}
                </div>
                <div class="body-3 md-headline-2-regular">
                  {{ solution.description }}
                </div>
              </div>
              <img
                :src="solution.image"
                alt="solution-image"
                class="overflow-hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Feature1 from '../assets/images/pages/home/feature-1.png';
import Feature2 from '../assets/images/pages/home/feature-2.png';
import Feature3 from '../assets/images/pages/home/feature-3.png';
import Solution1 from '../assets/images/pages/home/solution-1.png';
import Solution2 from '../assets/images/pages/home/solution-2.png';
import Solution3 from '../assets/images/pages/home/solution-3.png';
import Solution4 from '../assets/images/pages/home/solution-4.png';
import Solution5 from '../assets/images/pages/home/solution-5.png';
import Painpoint1 from '../assets/images/pages/home/painpoint-1.png';
import Painpoint2 from '../assets/images/pages/home/painpoint-2.png';
import Painpoint3 from '../assets/images/pages/home/painpoint-3.png';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

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
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const features = [
  {
    title: '一鍵預約‧輕鬆回訪',
    image: Feature1,
    class: ['w-50'],
  },
  {
    title: '從本地到國際',
    image: Feature2,
  },
  {
    title: '客製系統‧輕鬆嵌入',
    image: Feature3,
    class: ['mb-9'],
  },
];
const painPoints = [
  {
    title: '想改人數只能取消重訂?',
    description:
      'Fullkeep 支援即時調整人數、時間與備註，可直接編輯預約內容，流程更順暢，服務更彈性。',
    image: Painpoint1,
  },
  {
    title: '外籍旅客訂位困難?',
    description:
      'Fullkeep 支援多語介面、Email/國際電話驗證與線上付款，跨國顧客輕鬆完成預約，不再流失訂單。',
    image: Painpoint2,
  },
  {
    title: '無法由品牌網站直接訂位?',
    description:
      'Fullkeep 提供嵌入式API，快速整合進品牌網站，無需跳轉頁面，維持品牌一致性，客戶體驗不中斷。',
    image: Painpoint3,
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
    class: ['col-md-12', 'flex-md-row'],
  },
];
</script>

<style lang="scss">
@import '../../../scss/pages/_home.scss';
</style>
