<template>
  <div class="all-connected d-flex flex-column align-items-center">
    <!-- hero -->
    <section
      class="hero d-flex align-items-start align-items-md-center justify-content-center justify-content-md-start"
    >
      <img
        src="../assets/images/pages/all-connected/hero-bg.png"
        alt="hero"
        class="background-image__desktop d-none d-md-block"
      />
      <img
        src="../assets/images/pages/all-connected/hero-bg-mobile.png"
        alt="hero"
        class="background-image__mobile d-block d-md-none"
      />
      <div
        class="hero__content flex-column w-100 gap-md-8 gap-7 justify-content-center text-white d-flex"
      >
        <div
          class="d-flex flex-column gap-2 align-items-center align-items-md-start"
        >
          <div class="md-headline-2-bold headline-3-bold">All Connected</div>
          <div class="md-headline-2-bold headline-3-bold">跨平台整合</div>
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
    <!-- connected brands -->
    <section class="connected-brands d-flex flex-column align-items-center">
      <div
        class="content-container d-flex flex-column gap-3 gap-md-6 align-items-center text-center mx-3"
      >
        <div class="md-headline-1-bold headline-4-bold">無縫銜接服務</div>

        <div class="text-gray body-2 md-headline-1-regular">
          無縫連結多種數位工具與系統，打造整合性強、操作便利的訂位管理生態。
        </div>
      </div>
      <img
        src="../assets/images/pages/all-connected/connected-brands.png"
        alt="connected brands"
        class="connected-brands-image"
      />
    </section>
    <!-- items first section -->
    <section class="items-first-section w-100 bg-tertiary">
      <div class="section-container d-flex flex-column align-items-center">
        <div
          class="items-first-section__title md-headline-1-bold headline-4-bold d-md-none"
        >
          快速上手，安心開跑
        </div>

        <div class="items-first-section__list d-flex flex-column">
          <div
            v-for="item in itemsFirstSection"
            :key="item.title"
            class="item-container d-flex align-items-center"
          >
            <img class="item__image" :src="item.image" :alt="item.title" />
            <div class="item__content d-flex flex-column">
              <div
                class="item__title-container d-flex flex-column gap-3 gap-md-6"
              >
                <div class="item__title md-headline-1-bold headline-4-bold">
                  {{ item.title }}
                </div>
                <div
                  class="item__description text-gray body-2 md-headline-1-regular"
                >
                  {{ item.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- items second section -->
    <section class="items-second-section w-100">
      <div class="section-container d-flex flex-column align-items-center">
        <div
          class="items-second-section__title md-headline-1-bold headline-4-bold"
        >
          輕鬆營運，顧客直送
        </div>
        <div
          class="items-second-section__list d-flex flex-column align-items-center"
        >
          <div
            v-for="item in itemsSecondSection"
            :key="item.title"
            class="item-container d-flex"
          >
            <img class="item__image" :src="item.image" :alt="item.title" />
            <div class="item__content d-flex flex-column">
              <div
                class="item__title-container d-flex flex-column gap-3 gap-md-6"
              >
                <div class="item__title md-headline-1-bold headline-4-bold">
                  {{ item.title }}
                </div>
                <div
                  class="item__description text-gray body-2 md-headline-1-regular"
                >
                  {{ item.description }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useNavigation } from '../composables/useNavigation.js';

const { handleDemoBooking } = useNavigation();

import Item1 from '../assets/images/pages/all-connected/item-1.png';
import Item2 from '../assets/images/pages/all-connected/item-2.png';
import Item3 from '../assets/images/pages/all-connected/item-3.png';
import Item4 from '../assets/images/pages/all-connected/item-4.png';
import Item5 from '../assets/images/pages/all-connected/item-5.png';
import Item6 from '../assets/images/pages/all-connected/item-6.png';
const itemsFirstSection = [
  {
    title: '嵌入式客製化系統',
    description:
      '直接透過 LINE 傳送訂位提醒、促銷訊息。符合台灣主流通訊習慣，提升顧客互動與回流率。',
    image: Item1,
  },
  {
    title: '協助企業導入',
    description:
      '與 Google 預約系統串接，讓消費者可直接從 Google 搜尋結果完成訂位，擴大曝光與訂位管道。',
    image: Item2,
  },
  {
    title: '教育訓練',
    description:
      '提供完善的教育訓練與操作指南，協助店家快速上手並有效運用系統功能。',
    image: Item3,
  },
];
const itemsSecondSection = [
  {
    title: 'LINE 訊息整合',
    description:
      '直接透過 LINE 傳送訂位提醒、通知訊息。符合台灣主流通訊習慣，提升顧客互動與回流率。',
    image: Item4,
  },
  {
    title: 'Google 訂位整合',
    description:
      '與 Google 預約系統串接，讓消費者可直接從 Google 搜尋結果完成訂位，擴大曝光與訂位管道。',
    image: Item5,
  },
  {
    title: '跨店家資訊記憶',
    description:
      '支援顧客跨店家資訊記憶，簡化重複輸入流程，提升訂位收取效率與體驗。',
    image: Item6,
  },
];
</script>

<style lang="scss">
@import '../../../scss/pages/_all-connected.scss';
</style>
