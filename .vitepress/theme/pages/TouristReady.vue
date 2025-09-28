<template>
  <div class="tourist-ready d-flex flex-column align-items-center">
    <!-- hero -->
    <section
      class="hero d-flex align-items-start align-items-md-center justify-content-center justify-content-md-start"
    >
      <img
        src="../assets/images/pages/tourist-ready/hero-bg.png"
        alt="hero"
        class="background-image__desktop d-none d-md-block"
      />
      <img
        src="../assets/images/pages/tourist-ready/hero-bg-mobile.png"
        alt="hero"
        class="background-image__mobile d-block d-md-none"
      />
      <div
        class="hero__content flex-column w-100 gap-md-8 gap-7 justify-content-center text-white d-flex"
      >
        <div
          class="d-flex flex-column gap-2 align-items-center align-items-md-start"
        >
          <div class="md-headline-2-bold headline-3-bold">Tourist Ready</div>
          <div class="md-headline-2-bold headline-3-bold">觀光客友善</div>
        </div>
        <Button variant="primary" class="align-self-start d-none d-md-block">
          預約 Demo
        </Button>
        <Button variant="mobileFull" class="d-block d-md-none">
          預約 Demo
        </Button>
      </div>
    </section>
    <!-- globe -->
    <section class="globe d-flex flex-column align-items-center">
      <div
        class="title-content d-flex flex-column gap-3 gap-md-6 align-items-center text-center"
      >
        <div class="title-content__title md-headline-1-bold headline-4-bold">
          專為精緻餐飲需求打造，與國際無縫接軌
        </div>
        <div class="d-flex flex-column align-items-center">
          <div
            class="title-content__description text-gray body-2 md-headline-1-regular"
          >
            無論語言、介面或聯繫工具，
          </div>
          <div
            class="title-content__description text-gray body-2 md-headline-1-regular"
          >
            提供世界各地的顧客順暢的訂位流程與服務資訊。
          </div>
        </div>
      </div>
      <img
        src="../assets/images/pages/tourist-ready/globe.png"
        alt="globe"
        class="globe-image d-md-block d-none"
      />
      <img
        src="../assets/images/pages/tourist-ready/globe-mobile.png"
        alt="globe"
        class="globe-image d-md-none d-block"
      />
    </section>
    <!-- items -->
    <section
      class="items w-100 d-flex justify-content-center align-items-center bg-tertiary"
    >
      <div class="items__list d-flex flex-column">
        <div class="item-container d-flex">
          <img
            class="item__image d-md-block d-none"
            src="../assets/images/pages/tourist-ready/item-1.png"
            alt="item-1"
          />
          <img
            class="item__image d-md-none d-block"
            src="../assets/images/pages/tourist-ready/item-1-mobile.png"
            alt="item-1"
          />
          <div class="item__content d-flex flex-column">
            <div
              class="item__title-container d-flex flex-column gap-3 gap-md-6"
            >
              <div class="item__title md-headline-1-bold headline-4-bold">
                多國語言支援
              </div>
              <div
                class="item__description text-gray body-2 md-headline-1-regular"
              >
                無論來自哪個國家，都能以熟悉的語言瀏覽、預約與溝通，打造真正國際化的用餐體驗。
              </div>
            </div>
            <div class="item__list gap-2 gap-md-3 flex-column d-flex">
              <div
                class="list-point-container d-flex gap-2"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <img src="../assets/icons/check.svg" alt="check-icon" />
                <div class="list-point body-2 md-headline-2-regular">
                  多語介面，流程簡單易懂
                </div>
              </div>
              <div
                class="list-point-container d-flex gap-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src="../assets/icons/check.svg" alt="check-icon" />
                <div class="list-point body-2 md-headline-2-regular">
                  自動偵測地區語言，也可手動切換
                </div>
              </div>
              <div
                class="list-point-container d-flex gap-2"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img src="../assets/icons/check.svg" alt="check-icon" />
                <div class="list-point body-2 md-headline-2-regular">
                  菜單與通知信件自動翻譯
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item-container d-flex">
          <img
            class="item__image d-md-block d-none"
            src="../assets/images/pages/tourist-ready/item-2.png"
            alt="item-2"
          />
          <img
            class="item__image d-md-none d-block"
            src="../assets/images/pages/tourist-ready/item-2-mobile.png"
            alt="item-2"
          />
          <div class="item__content d-flex flex-column">
            <div
              class="item__title-container d-flex flex-column gap-3 gap-md-6"
            >
              <div class="item__title md-headline-1-bold headline-4-bold">
                自動切換貨幣
              </div>
              <div
                class="item__description text-gray body-2 md-headline-1-regular"
              >
                旅客在出發前就能掌握餐廳菜單與價格，安心預訂、從容用餐。
              </div>
            </div>
            <div class="item__list gap-2 gap-md-3 flex-column d-flex">
              <div
                class="list-point-container d-flex gap-2"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <img src="../assets/icons/check.svg" alt="check-icon" />
                <div class="list-point body-2 md-headline-2-regular">
                  根據用戶所在位置，自動顯示對應幣別
                </div>
              </div>
              <div
                class="list-point-container d-flex gap-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src="../assets/icons/check.svg" alt="check-icon" />
                <div class="list-point body-2 md-headline-2-regular">
                  價格資訊清楚透明，預約更安心
                </div>
              </div>
              <div
                class="list-point-container d-flex gap-2"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <img src="../assets/icons/check.svg" alt="check-icon" />
                <div class="list-point body-2 md-headline-2-regular">
                  提升旅客滿意度與轉單率
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="integration d-flex justify-content-center flex-column">
      <div
        class="title-content d-flex flex-column gap-3 gap-md-6 align-items-center text-center"
      >
        <div class="title-content__title md-headline-1-bold headline-4-bold">
          各國系統整合
        </div>
        <div class="d-flex flex-column align-items-center">
          <div
            class="title-content__description text-gray body-2 md-headline-1-regular"
          >
            支援 LINE、WhatsApp 等常見通訊軟體，
          </div>
          <div
            class="title-content__description text-gray body-2 md-headline-1-regular"
          >
            來自不同地區的顧客也能即時接收提醒與行銷訊息。
          </div>
        </div>
      </div>
      <img
        src="../assets/images/pages/tourist-ready/integration.png"
        alt="integration phone"
        class="integration-phone d-md-block d-none"
      />
      <img
        src="../assets/images/pages/tourist-ready/integration-mobile.png"
        alt="integration phone"
        class="integration-phone d-md-none d-block"
      />
    </section>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'EasyUse',
  setup() {
    onMounted(() => {
      // 初始化 AOS
      AOS.init({
        duration: 600,
        easing: 'ease-out',
        once: false,
        offset: 12,
      });
    });
  },
};
</script>
<style lang="scss">
@import '../../../scss/pages/_tourist-ready.scss';
</style>
