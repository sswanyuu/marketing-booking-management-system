<template>
  <div class="grow-again d-flex flex-column align-items-center">
    <!-- hero -->
    <section
      class="hero d-flex align-items-start align-items-md-center justify-content-center justify-content-md-start"
    >
      <img
        src="../assets/images/pages/grow-again/hero-bg.png"
        alt="hero"
        class="hero__bg--desktop d-none d-md-block"
      />
      <img
        src="../assets/images/pages/grow-again/hero-bg-mobile.png"
        alt="hero"
        class="hero__bg--mobile d-block d-md-none"
      />
      <div
        class="hero__content flex-column w-100 gap-md-8 gap-7 justify-content-center text-white d-flex"
      >
        <div
          class="d-flex flex-column gap-2 align-items-center align-items-md-start"
        >
          <div class="md-headline-2-bold headline-3-bold">Grow Again</div>
        </div>
        <Button
          variant="primary"
          class="align-self-start"
          @click="handleDemoBooking"
        >
          Book Demo
        </Button>
      </div>
    </section>

    <!-- awareness -->
    <section class="awareness d-flex flex-column align-items-center">
      <div
        class="content-container d-flex flex-column gap-3 gap-md-6 align-items-center text-center px-5 px-md-0"
      >
        <div class="md-headline-1-bold headline-4-bold">
          Industry-Wide Business Exposure
        </div>

        <div class="text-gray body-2 md-headline-1-regular">
          Help businesses increase brand exposure opportunities through partner
          and platform recommendations, expand customer base, and create a
          win-win ecosystem
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
        <div class="md-headline-1-bold headline-4-bold">Customer CRM</div>
        <div class="text-gray body-2 md-headline-1-regular">
          Build a complete customer database, record booking habits and
          preferences, support segmented marketing and personalized
          recommendations, improving marketing precision.
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
        <div
          class="d-flex flex-column gap-3 gap-md-9 w-100 align-self-center px-4 px-md-0"
        >
          <div class="md-headline-1-bold headline-4-bold">
            Reports & Analytics
          </div>
          <div class="text-gray body-2 md-headline-1-regular">
            Provide visual reports and key metric tracking to help businesses
            understand operational status and marketing effectiveness, enabling
            quick strategy adjustments
          </div>
        </div>
      </div>
      <div
        class="services__banner-2 d-flex flex-column flex-md-row gap-6 gap-md-5 bg-white rounded-4 border border-gray-light"
      >
        <div
          class="d-flex flex-column gap-3 gap-md-9 w-100 align-self-center px-4 px-md-0"
        >
          <div class="md-headline-1-bold headline-4-bold">
            Diverse Promotions & Coupons
          </div>
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
                Actively reach customers through multiple channels, push
                exclusive offers and event notifications, strengthening customer
                retention and brand loyalty.
              </div>
            </div>
            <div class="d-flex gap-1 gap-md-3">
              <img
                src="../assets/icons/gift.svg"
                alt="gift-icon"
                class="services__banner-2__icon align-self-start"
              />
              <div>
                Flexibly set diverse promotional plans and digital coupons,
                attracting new customers while incentivizing returning
                customers, promoting sales growth.
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
          class="bottom-banner__slogan md-headline-1-bold headline-4-bold text-white px-4 px-md-0 text-center"
        >
          Checkout isn't the end—it's the beginning of the next meeting.
        </div>
      </div>
      <div
        class="row align-items-center bottom-banner__images d-none d-md-flex"
      >
        <div class="col d-flex flex-column gap-8">
          <img
            src="../assets/images/pages/grow-again/bottom-banner-web-1.png"
            alt="bottom-banner-web-1"
            class="rounded-4"
            data-aos="fade-in"
            data-aos-once="false"
            data-aos-delay="0"
          />
          <img
            src="../assets/images/pages/grow-again/bottom-banner-web-2.png"
            alt="bottom-banner-web-2"
            class="rounded-4"
            data-aos="fade-in"
            data-aos-once="false"
            data-aos-delay="200"
          />
        </div>
        <div class="col">
          <img
            src="../assets/images/pages/grow-again/bottom-banner-web-3.png"
            alt="bottom-banner-web-3"
            class="rounded-4"
            data-aos="fade-in"
            data-aos-once="false"
            data-aos-delay="1400"
          />
        </div>
        <div class="col">
          <img
            src="../assets/images/pages/grow-again/bottom-banner-web-4.png"
            alt="bottom-banner-web-4"
            class="rounded-4"
            style="margin-top: 124px"
            data-aos="fade-in"
            data-aos-once="false"
            data-aos-delay="600"
          />
        </div>
        <div class="col">
          <img
            src="../assets/images/pages/grow-again/bottom-banner-web-5.png"
            alt="bottom-banner-web-5"
            class="rounded-4"
            data-aos="fade-in"
            data-aos-once="false"
            data-aos-delay="400"
          />
        </div>
        <div class="col d-flex flex-column gap-8">
          <img
            src="../assets/images/pages/grow-again/bottom-banner-web-6.png"
            alt="bottom-banner-web-6"
            class="rounded-4"
            data-aos="fade-in"
            data-aos-once="false"
            data-aos-delay="1200"
          />
          <img
            src="../assets/images/pages/grow-again/bottom-banner-web-7.png"
            alt="bottom-banner-web-7"
            class="rounded-4"
            data-aos="fade-in"
            data-aos-once="false"
            data-aos-delay="800"
          />
        </div>
      </div>
      <img
        src="../assets/images/pages/grow-again/bottom-banner-photo-mobile.png"
        alt="bottom-banner"
        class="bottom-banner__photo d-block d-md-none object-fit-contain"
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

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

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
