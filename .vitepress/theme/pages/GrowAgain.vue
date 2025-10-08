<template>
  <div class="grow-again d-flex flex-column align-items-center">
    <!-- hero -->
    <section
      class="hero d-flex align-items-start align-items-md-center justify-content-center justify-content-md-start"
    >
      <img
        src="../assets/images/pages/grow-again/hero-bg.png"
        alt="hero"
        class="background-image__desktop d-none d-md-block"
      />
      <img
        src="../assets/images/pages/grow-again/hero-bg-mobile.png"
        alt="hero"
        class="background-image__mobile d-block d-md-none"
      />
      <div
        class="hero__content flex-column w-100 gap-md-8 gap-7 justify-content-center text-white d-flex"
      >
        <div
          class="d-flex flex-column gap-2 align-items-center align-items-md-start"
        >
          <div class="md-headline-2-bold headline-3-bold">Grow Again</div>
          <div class="md-headline-2-bold headline-3-bold">行銷與再接觸</div>
        </div>
        <Button
          variant="primary"
          class="align-self-start"
          @click="handleDemoBooking"
        >
          預約 Demo
        </Button>
      </div>
    </section>
    <!--top-banner-->
    <section
      class="top-banner d-flex flex-column justify-content-center align-items-center w-100 position-relative"
    >
      <div
        class="top-banner__container bg-primary w-100 rounded-4 d-flex flex-column justify-content-center align-items-center"
      >
        <div
          class="lg-headline-1-bold headline-4-bold text-white text-center w-100 position-relative"
        >
          跨越時空留客於心，
          <br />
          延續美好的用餐體驗
          <img
            src="../assets/images/pages/grow-again/top-slogan-decoration.png"
            alt="slogan-decoration"
            class="top-banner__slogan-decoration d-none d-md-flex position-absolute"
          />
        </div>
      </div>
      <img
        src="../assets/images/pages/grow-again/top-banner-photo-left.png"
        alt="top-banner-photo"
        class="top-banner__left-photo d-none d-md-flex object-fit-contain position-absolute"
      />
      <img
        src="../assets/images/pages/grow-again/top-banner-photo-right.png"
        alt="top-banner-photo"
        class="top-banner__right-photo d-none d-md-flex object-fit-contain position-absolute"
      />
      <img
        src="../assets/images/pages/grow-again/top-banner-photo-left-mobile.png"
        alt="top-banner-photo"
        class="top-banner__left-photo d-block d-md-none object-fit-contain position-absolute"
      />
      <img
        src="../assets/images/pages/grow-again/top-banner-photo-right-mobile.png"
        alt="top-banner-photo"
        class="top-banner__right-photo d-block d-md-none object-fit-contain position-absolute"
      />
    </section>
    <!-- awareness -->
    <section class="awareness d-flex flex-column align-items-center">
      <div
        class="content-container d-flex flex-column gap-3 gap-md-6 align-items-center text-center"
      >
        <div class="md-headline-1-bold headline-4-bold">同產業餐飲曝光</div>

        <div class="text-gray body-2 md-headline-1-regular">
          協助餐廳透過合作夥伴及平台推薦，增加品牌曝光機會，拓展客源，創造共贏生態圈
        </div>
      </div>

      <!-- Logo Animation Container -->
      <div
        class="awareness__logo-container d-flex w-100 justify-content-center bg-tertiary rounded-4"
      >
        <template v-for="i in 6" :key="i">
          <div :class="getTrackClasses(i)">
            <template
              v-for="(brand, index) in brandSequence"
              :key="`${i}-${index}`"
            >
              <div class="awareness__logo-item">
                <img :src="getBrandImage(brand)" :alt="getBrandName(brand)" />
              </div>
            </template>
          </div>
        </template>
      </div>
    </section>
    <!-- client -->
    <section class="client d-flex flex-column w-100 align-items-center">
      <div
        class="content-container d-flex flex-column gap-3 gap-md-6 align-items-center text-center mx-3"
      >
        <div class="md-headline-1-bold headline-4-bold">客戶 CRM</div>
        <div class="text-gray body-2 md-headline-1-regular">
          建立完整顧客資料庫，記錄訂位習慣與偏好，
          支援分眾行銷與個人化推薦，提升營銷精準度。
        </div>
      </div>
      <div
        class="client__list d-none d-md-flex w-100 justify-content-center gap-7"
      >
        <div>
          <img
            src="../assets/images/pages/grow-again/client-1.png"
            alt="client-card-1"
          />
        </div>
        <div>
          <img
            src="../assets/images/pages/grow-again/client-2.png"
            alt="client-card-2"
          />
        </div>
        <div>
          <img
            src="../assets/images/pages/grow-again/client-3.png"
            alt="client-card-3"
          />
        </div>
        <div>
          <img
            src="../assets/images/pages/grow-again/client-4.png"
            alt="client-card-4"
          />
        </div>
      </div>
      <swiper
        class="client__list d-flex d-md-none flex-nowrap gap-3 swiper px-4 w-100"
        :slides-per-view="1.2"
        :space-between="12"
        :centered-slides="false"
        :grab-cursor="true"
      >
        <swiper-slide>
          <img
            src="../assets/images/pages/grow-again/client-1-mobile.png"
            alt="client-1"
            class="item w-100 swiper-slide"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="../assets/images/pages/grow-again/client-2-mobile.png"
            alt="client-2"
            class="item w-100 swiper-slide"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="../assets/images/pages/grow-again/client-3-mobile.png"
            alt="client-3"
            class="item w-100 swiper-slide"
          />
        </swiper-slide>
        <swiper-slide>
          <img
            src="../assets/images/pages/grow-again/client-4-mobile.png"
            alt="client-4"
            class="item w-100 swiper-slide"
          />
        </swiper-slide>
      </swiper>
    </section>
    <!-- services -->
    <section class="services d-flex flex-column">
      <div
        class="services__banner-1 d-flex flex-column flex-md-row gap-6 gap-md-9 bg-white rounded-4"
      >
        <img
          src="../assets/images/pages/grow-again/banner-1.png"
          alt="services-1-banner"
          class="d-none d-md-block object-fit-contain w-50"
        />
        <img
          src="../assets/images/pages/grow-again/banner-1-mobile.png"
          alt="services-1-banner"
          class="d-block d-md-none object-fit-contain"
        />
        <div class="d-flex flex-column gap-3 gap-md-9 w-100 align-self-center">
          <div class="md-headline-1-bold headline-4-bold">資料報告與分析</div>
          <div class="text-gray body-2 md-headline-1-regular">
            提供視覺化報表與關鍵指標追蹤，協助餐廳了解營運狀況與行銷效益，快速調整策略
          </div>
        </div>
      </div>
      <div
        class="services__banner-2 d-flex flex-column flex-md-row gap-6 gap-md-5 bg-white rounded-4 border border-gray-light"
      >
        <div class="d-flex flex-column gap-3 gap-md-9 w-100 align-self-center">
          <div class="md-headline-1-bold headline-4-bold">多元促銷與優惠券</div>
          <div
            class="d-flex flex-column gap-2 gap-md-3 text-gray body-2 md-headline-2-regular"
          >
            <div class="d-flex gap-1 gap-md-3">
              <img
                src="../assets/icons/megaphone.svg"
                alt="megaphone-icon"
                class="services__banner-2__icon align-self-start"
              />
              <div>
                利用多元通路主動觸達顧客，推送專屬優惠與活動訊息，強化顧客回流與品牌黏著度。
              </div>
            </div>
            <div class="d-flex gap-1 gap-md-3">
              <img
                src="../assets/icons/gift.svg"
                alt="gift-icon"
                class="services__banner-2__icon align-self-start"
              />
              <div>
                彈性設定多樣化優惠方案與電子優惠券，吸引新客同時激勵舊客回訪，促進銷售成長。
              </div>
            </div>
          </div>
        </div>
        <img
          src="../assets/images/pages/grow-again/banner-2.png"
          alt="services-2-banner"
          class="d-none d-md-block object-fit-contain w-50"
        />
        <img
          src="../assets/images/pages/grow-again/banner-2-mobile.png"
          alt="services-2-banner"
          class="d-block d-md-none object-fit-contain"
        />
      </div>
    </section>
    <!-- bottom banner -->
    <section
      class="bottom-banner bg-primary d-flex flex-column justify-content-center align-items-center"
    >
      <div
        class="position-relative w-100 d-flex flex-column justify-content-center align-items-center"
      >
        <img
          src="../assets/images/pages/grow-again/bottom-slogan-decoration.png"
          alt="slogan-decoration"
          class="bottom-banner__slogan-decoration d-none d-md-flex position-absolute"
        />
        <div
          class="bottom-banner__slogan md-headline-1-bold headline-4-bold text-white mx-3 text-center"
        >
          結帳不是結束，而是下一次相見的開始。
        </div>
      </div>
      <img
        src="../assets/images/pages/grow-again/bottom-banner-photo-mobile.png"
        alt="bottom-banner"
        class="bottom-banner__photo d-block d-md-none object-fit-contain"
      />
      <img
        src="../assets/images/pages/grow-again/bottom-banner-photo.png"
        alt="bottom-banner"
        class="bottom-banner__photo d-none d-md-flex object-fit-contain"
      />
    </section>
    <!-- revenue -->
  </div>
</template>

<script setup>
import { useNavigation } from '../composables/useNavigation.js';

const { handleDemoBooking } = useNavigation();

import Brand1 from '../assets/images/pages/grow-again/brand-1.png';
import Brand2 from '../assets/images/pages/grow-again/brand-2.png';
import Brand3 from '../assets/images/pages/grow-again/brand-3.png';
import Brand4 from '../assets/images/pages/grow-again/brand-4.png';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
const brandData = {
  1: { name: '明水然‧樂', image: Brand1 },
  2: { name: '辣國際餐飲集團', image: Brand2 },
  3: { name: '初海', image: Brand3 },
  4: { name: 'LeDD 樂多多集團', image: Brand4 },
};

const brandSequence = [1, 2, 3, 4, 1, 2, 3, 4];

const getBrandName = brand => brandData[brand].name;

const getBrandImage = brand => brandData[brand].image;

const getTrackClasses = trackIndex => {
  return [
    'awareness__logo-track',
    `awareness__logo-track--${trackIndex}`,
    trackIndex <= 3
      ? 'd-flex'
      : trackIndex <= 4
        ? 'd-none d-md-flex'
        : 'd-none d-xl-flex',
  ];
};
</script>
<style lang="scss">
@import '../../../scss/pages/_grow-again.scss';
</style>
