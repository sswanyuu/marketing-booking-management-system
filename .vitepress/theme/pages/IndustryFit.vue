<template>
  <div class="industry-fit d-flex flex-column align-items-center">
    <!-- hero -->
    <section
      class="hero d-flex align-items-start align-items-md-center justify-content-center justify-content-md-start"
    >
      <img
        src="../assets/images/pages/industry-fit/hero-bg.png"
        alt="hero"
        class="background-image__desktop d-none d-md-block"
      />
      <img
        src="../assets/images/pages/industry-fit/hero-bg-mobile.png"
        alt="hero"
        class="background-image__mobile d-block d-md-none"
      />
      <div
        class="hero__content flex-column w-100 gap-md-8 gap-7 justify-content-center text-white d-flex"
      >
        <div
          class="d-flex flex-column gap-2 align-items-center align-items-md-start"
        >
          <div class="md-headline-2-bold headline-3-bold">Industry Fit</div>
          <div class="md-headline-2-bold headline-3-bold">產業專屬方案</div>
        </div>
        <Button variant="primary" class="align-self-start">預約 Demo</Button>
      </div>
    </section>
    <section class="successful-cases w-100 bg-primary">
      <div
        class="successful-cases__container d-flex flex-column align-items-center"
      >
        <div
          class="d-flex flex-column gap-3 gap-md-6 align-items-center text-center mx-3 text-white"
        >
          <div class="md-headline-1-bold headline-4-bold">產業成功案例</div>

          <div class="body-2 md-headline-1-regular">
            Fullkeep
            專為不同餐飲業態設計。從高價私廚到婚宴會館，我們提供靈活預約、預付訂金、多語系整合與顧客資料管理，幫助各類型餐廳打造穩定、流暢的訂位體驗，提升每一場用餐的品質與效率。
          </div>
        </div>
        <img
          src="../assets/images/pages/industry-fit/successful-cases-banner.png"
          alt="successful-cases"
          class="successful-cases__image w-100 rounded-4"
        />
        <div
          class="successful-cases__info bg-white rounded-4 d-flex flex-column flex-md-row justify-content-md-center border border-gray align-items-center px-6 py-6 py-md-0"
        >
          <div class="content-container d-flex flex-column gap-4">
            <div class="md-headline-3-bold headline-4-bold">精緻鐵板燒</div>
            <div class="body-2 md-headline-2-regular text-gray">
              Fullkeep
              專為不同餐飲業態設計。從高價私廚到婚宴會館，我們提供靈活預約、預付訂金、多語系整合與顧客資料管理，幫助各類型餐廳打造穩定、流暢的訂位體驗，提升每一場用餐的品質與效率。
            </div>
          </div>
          <div class="row gx-4 gy-2">
            <div
              v-for="icon in successfulCasesIcons"
              :key="icon.title"
              class="col-6 col-md-3 d-flex flex-column align-items-center justify-content-center gap-3"
            >
              <div
                class="icon-container d-flex align-items-center justify-content-center rounded-4 border border-gray"
              >
                <img :src="icon.image" :alt="icon.title" />
              </div>
              <div class="icon-title body-2 md-body-1">{{ icon.title }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import SuccessfulCasesIcon1 from '../assets/images/pages/industry-fit/successful-case-icon-1.png';
import SuccessfulCasesIcon2 from '../assets/images/pages/industry-fit/successful-case-icon-2.png';
import SuccessfulCasesIcon3 from '../assets/images/pages/industry-fit/successful-case-icon-3.png';
import SuccessfulCasesIcon4 from '../assets/images/pages/industry-fit/successful-case-icon-4.png';

export default {
  name: 'IndustryFit',
  setup() {
    const successfulCasesIcons = [
      {
        title: '翻桌率低',
        image: SuccessfulCasesIcon1,
      },
      {
        title: '桌位特殊',
        image: SuccessfulCasesIcon2,
      },
      {
        title: '套餐制',
        image: SuccessfulCasesIcon3,
      },
      {
        title: '食材高價',
        image: SuccessfulCasesIcon4,
      },
    ];
    return {
      successfulCasesIcons,
    };
  },
};
</script>
<style lang="scss">
@import '../../../scss/pages/_industry-fit.scss';
</style>
