<template>
  <div class="easy-use d-flex flex-column align-items-center">
    <!-- hero -->
    <section
      class="hero d-flex align-items-start align-items-md-center justify-content-center justify-content-md-start"
    >
      <img
        src="../assets/images/pages/easy-use/hero-bg.png"
        alt="hero"
        class="hero__bg--desktop d-none d-md-block"
      />
      <img
        src="../assets/images/pages/easy-use/hero-bg-mobile.png"
        alt="hero"
        class="hero__bg--mobile d-block d-md-none"
      />
      <div
        class="hero__content flex-column w-100 gap-md-8 gap-7 justify-content-center text-white d-flex"
      >
        <div
          class="d-flex flex-column gap-2 align-items-center align-items-md-start"
        >
          <div class="md-headline-2-bold headline-3-bold">Easy Use</div>
          <div class="md-headline-2-bold headline-3-bold">優良使用體驗</div>
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
    <!-- items -->
    <section
      class="items w-100 d-flex justify-content-center align-items-center position-relative"
    >
      <img
        src="../assets/images/bg.png"
        alt="background"
        class="items__bg position-absolute d-none d-md-block"
      />
      <div class="items__list d-flex flex-column">
        <div v-for="item in easyUseItems" :key="item.title" class="item d-flex">
          <img class="item__image" :src="item.image" :alt="item.title" />
          <div class="item__content d-flex flex-column px-4 px-md-0">
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
            <div class="item__list gap-2 gap-md-3 flex-column d-flex">
              <div
                v-for="(point, pointIndex) in item.points"
                :key="point"
                class="item__point d-flex gap-2"
                data-aos="fade-up"
                :data-aos-delay="pointIndex * 200"
              >
                <img src="../assets/icons/check.svg" alt="check-icon" />
                <div class="item__point-text body-2 md-headline-2-regular">
                  {{ point }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- bottom banner -->
    <section class="bottom-banner-container d-flex justify-content-center">
      <div
        class="bottom-banner d-flex align-items-start align-items-md-center justify-content-center justify-content-md-start bg-primary rounded-4"
      >
        <img
          src="../assets/images/pages/easy-use/bottom-banner-bg.png"
          alt="hero"
          class="bottom-banner__bg--desktop d-none d-md-block rounded-4"
        />
        <img
          src="../assets/images/pages/easy-use/bottom-banner-bg-mobile.png"
          alt="hero"
          class="bottom-banner__bg--mobile d-block d-md-none rounded-4"
        />
        <div
          class="bottom-banner__content flex-column gap-md-3 gap-2 justify-content-center text-white d-flex align-items-center align-items-md-start"
        >
          <div class="md-headline-1-bold headline-4-bold">
            經營不必將就，你值得更好的系統
          </div>
          <div class="md-headline-1-regular body-2">
            從預約到現場管理，Fullkeep
            貼近餐廳的每一個日常操作。我們打造的是一套真正符合店家需求的數位工具。高效、好用，讓經營更順手，省時又省力。
          </div>
        </div>
        <div class="bottom-banner__ring">
          <li class="bottom-banner__circle-container" style="--i: 0">
            <div
              class="circle justify-content-center align-items-center d-flex flex-column border border-primary bg-white"
            >
              <div
                class="circle__content d-flex flex-column align-items-center w-100 gap-1 gap-md-2"
              >
                <img
                  class="circle__icon"
                  src="../assets/images/pages/easy-use/circle1.png"
                />
                <span class="circle__text body-3 text-center">
                  預付訂金機制
                </span>
              </div>
            </div>
          </li>
          <li class="bottom-banner__circle-container" style="--i: 1">
            <div
              class="circle justify-content-center align-items-center d-flex flex-column border border-primary bg-white"
            >
              <div
                class="circle__content d-flex flex-column align-items-center w-100 gap-1 gap-md-2"
              >
                <img
                  class="circle__icon"
                  src="../assets/images/pages/easy-use/circle2.png"
                />
                <span class="circle__text body-3 text-center">
                  顧客確認與取消提醒
                </span>
              </div>
            </div>
          </li>
          <li class="bottom-banner__circle-container" style="--i: 2">
            <div
              class="circle justify-content-center align-items-center d-flex flex-column border border-primary bg-white"
            >
              <div
                class="circle__content d-flex flex-column align-items-center w-100 gap-1 gap-md-2"
              >
                <img
                  class="circle__icon"
                  src="../assets/images/pages/easy-use/circle3.png"
                />
                <span class="circle__text body-3 text-center">
                  併桌與拆桌操作
                </span>
              </div>
            </div>
          </li>
          <li class="bottom-banner__circle-container" style="--i: 3">
            <div
              class="circle justify-content-center align-items-center d-flex flex-column border border-primary bg-white"
            >
              <div
                class="circle__content d-flex flex-column align-items-center w-100 gap-1 gap-md-2"
              >
                <img
                  class="circle__icon"
                  src="../assets/images/pages/easy-use/circle4.png"
                />
                <span class="circle__text body-3 text-center">
                  封鎖與解除桌位
                </span>
              </div>
            </div>
          </li>
          <li class="bottom-banner__circle-container" style="--i: 4">
            <div
              class="circle justify-content-center align-items-center d-flex flex-column border border-primary bg-white"
            >
              <div
                class="circle__content d-flex flex-column align-items-center w-100 gap-1 gap-md-2"
              >
                <img
                  class="circle__icon"
                  src="../assets/images/pages/easy-use/circle5.png"
                />
                <span class="circle__text body-3 text-center">
                  內部備註與溝通欄
                </span>
              </div>
            </div>
          </li>
          <li class="bottom-banner__circle-container" style="--i: 5">
            <div
              class="circle justify-content-center align-items-center d-flex flex-column border border-primary bg-white"
            >
              <div
                class="circle__content d-flex flex-column align-items-center w-100 gap-1 gap-md-2"
              >
                <img
                  class="circle__icon"
                  src="../assets/images/pages/easy-use/circle6.png"
                />
                <span class="circle__text body-3 text-center">
                  拖曳式桌位圖編輯器
                </span>
              </div>
            </div>
          </li>
          <li class="bottom-banner__circle-container" style="--i: 6">
            <div
              class="circle justify-content-center align-items-center d-flex flex-column border border-primary bg-white"
            >
              <div
                class="circle__content d-flex flex-column align-items-center w-100 gap-1 gap-md-2"
              >
                <img
                  class="circle__icon"
                  src="../assets/images/pages/easy-use/circle7.png"
                />
                <span class="circle__text body-3 text-center">
                  支援多店共用管理
                </span>
              </div>
            </div>
          </li>
        </div>
      </div>

      <div
        class="bottom-banner-container__background-image bg-tertiary w-100 z-n1"
      />
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import { useNavigation } from '../composables/useNavigation.js';

const { handleDemoBooking } = useNavigation();
import Item1 from '../assets/images/pages/easy-use/item-1.png';
import Item2 from '../assets/images/pages/easy-use/item-2.png';
import Item3 from '../assets/images/pages/easy-use/item-3.png';
import Item4 from '../assets/images/pages/easy-use/item-4.png';
import 'aos/dist/aos.css';

const easyUseItems = [
  {
    title: '直覺化介面',
    description: '依桌型、時段彈性安排，優化現場動線與翻桌率。',
    image: Item1,
    points: [
      '顧客線上訂位、店員也能代客填寫',
      '支援手機、平板與桌機操作',
      '店員可代客快速建檔訂位',
    ],
  },
  {
    title: '桌位管理',
    description: '依桌型、時段彈性安排，優化現場動線與翻桌率。',
    image: Item2,
    points: [
      'VIP包廂、吧台區域都能納入排位邏輯',
      '自動避開重疊、按桌型優先建議配置',
      '提升翻桌率與現場動線效率',
    ],
  },
  {
    title: '彈性調整機制',
    description: '顧客可變更人數或餐點，無需取消重訂，彈性又省時。',
    image: Item3,
    points: [
      '現場人數變動，店員也能即時更新預約資訊',
      '調整人數、時間、餐點，無需重新預約',
      '前台與後台同時掌握最新資訊',
    ],
  },
  {
    title: '平假日設定功能',
    description: '自由設定不同日子的訂位規則與營運時間，彈性營運無負擔。',
    image: Item4,
    points: [
      '自由設定不同日子的營運規則',
      '自動對應營業時段與人力排程',
      '特別營業日、臨時公休一鍵調整',
    ],
  },
];

onMounted(() => {
  AOS.init({
    duration: 600,
    easing: 'ease-out',
    once: false,
    offset: 12,
  });
});
</script>
