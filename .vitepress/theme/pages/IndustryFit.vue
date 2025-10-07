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
    <!-- successful cases -->
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
    <!--items-->
    <section
      class="items w-100 d-flex justify-content-center align-items-center"
    >
      <div class="items__list d-flex flex-column">
        <div
          v-for="item in industryFeatures"
          :key="item.title"
          class="item-container d-flex align-items-center"
        >
          <img class="item__image" :src="item.image" :alt="item.title" />

          <div class="d-flex flex-column gap-3 gap-md-7">
            <div class="item__title md-headline-3-bold headline-4-bold">
              {{ item.title }}
            </div>
            <div class="item__list gap-2 gap-md-3 flex-column d-flex text-gray">
              <div
                v-for="(point, pointIndex) in item.points"
                :key="point"
                class="list-point-container d-flex gap-2"
                data-aos="fade-up"
                :data-aos-delay="pointIndex * 200"
              >
                <img src="../assets/icons/check.svg" alt="check-icon" />
                <div class="list-point body-2 md-headline-2-regular">
                  {{ point }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--best solutions-->
    <section
      class="best-solutions w-100 d-flex justify-content-center align-items-center flex-column"
    >
      <div class="headline-4-bold md-headline-1-bold text-center">
        最佳解決方案，適用更多餐飲型態
      </div>
      <div class="row gx-9 gy-9">
        <div
          v-for="solution in solutions"
          :key="solution.title"
          class="col-6 col-md-3 d-flex flex-column align-items-center justify-content-center gap-3"
        >
          <img :src="solution.image" :alt="solution.title" />

          <div class="icon-title body-2 md-body-1">{{ solution.title }}</div>
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
import Feature1 from '../assets/images/pages/industry-fit/feature-1.png';
import Feature2 from '../assets/images/pages/industry-fit/feature-2.png';
import Feature3 from '../assets/images/pages/industry-fit/feature-3.png';
import Solution1 from '../assets/images/pages/industry-fit/solution-1.png';
import Solution2 from '../assets/images/pages/industry-fit/solution-2.png';
import Solution3 from '../assets/images/pages/industry-fit/solution-3.png';
import Solution4 from '../assets/images/pages/industry-fit/solution-4.png';
import Solution5 from '../assets/images/pages/industry-fit/solution-5.png';
import Solution6 from '../assets/images/pages/industry-fit/solution-6.png';
import Solution7 from '../assets/images/pages/industry-fit/solution-7.png';
import Solution8 from '../assets/images/pages/industry-fit/solution-8.png';

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

    const industryFeatures = [
      {
        title: '精準時段與座位控管',
        description:
          'Fullkeep 的桌型與時段預約規則可精準安排每個檯位座次，避免空檯與重複預約。',
        image: Feature1,

        points: [
          'Fullkeep 的桌型與時段預約規則可精準安排每個檯位座次，避免空檯與重複預約。',
          '支援「吧檯座位」與「包廂」區分，讓訂位分配更靈活。',
        ],
      },
      {
        title: '預付訂金機制',
        description:
          '自由設定每人訂金，確保高價食材（如和牛、龍蝦）備料充足，降低臨時取消的損失。',
        image: Feature2,

        points: [
          '自由設定每人訂金，確保高價食材（如和牛、龍蝦）備料充足，降低臨時取消的損失。',
          '可在訂位時讓顧客選擇餐點套餐（如主廚套餐、龍蝦套餐），可備註過敏、熟度偏好等資訊，廚房能提前準備',
        ],
      },
      {
        title: '行銷與再接觸',
        description:
          '記錄顧客消費金額、用餐日期與喜好，後續針對節慶（如情人節、週年慶）推送高端套餐優惠。',
        image: Feature3,

        points: [
          '記錄顧客消費金額、用餐日期與喜好，後續針對節慶（如情人節、週年慶）推送高端套餐優惠。',
          '用過餐的熟客轉化為回頭客，例如推送新菜單、主廚特別料理體驗。',
        ],
      },
    ];

    const solutions = [
      {
        title: '酒莊',
        image: Solution1,
      },
      {
        title: '公路餐廳',
        image: Solution2,
      },
      {
        title: '無菜單料理',
        image: Solution3,
      },
      {
        title: '主題餐廳',
        image: Solution4,
      },
      {
        title: '米其林餐廳',
        image: Solution5,
      },
      {
        title: '日式料理',
        image: Solution6,
      },
      {
        title: '景觀餐廳',
        image: Solution7,
      },
      {
        title: '度假村',
        image: Solution8,
      },
    ];

    return {
      successfulCasesIcons,
      industryFeatures,
      solutions,
    };
  },
};
</script>
<style lang="scss">
@import '../../../scss/pages/_industry-fit.scss';
</style>
