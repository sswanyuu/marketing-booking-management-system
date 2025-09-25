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
      <!-- painpoints desktop -->
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
      <!-- painpoints mobile -->
      <div
        class="painpoints__list gap-4 d-flex d-md-none flex-column align-items-stretch"
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
      <!-- solutions desktop -->
      <div class="row g-5 d-flex d-none d-md-flex">
        <img
          src="../assets/images/pages/home/solution-1.png"
          alt="solution-1"
          class="col-md-6"
        />
        <img
          src="../assets/images/pages/home/solution-2.png"
          alt="solution-2"
          class="col-md-6"
        />
        <img
          src="../assets/images/pages/home/solution-3.png"
          alt="solution-3"
          class="col-md-6"
        />
        <img
          src="../assets/images/pages/home/solution-4.png"
          alt="solution-4"
          class="col-md-6"
        />
        <img
          src="../assets/images/pages/home/solution-5.png"
          alt="solution-5"
          class="col-md-12"
        />
        <div
          v-for="solution in solutions"
          :key="solution.title"
          class="col-md-6"
          :class="solution.containerClass"
        ></div>
      </div>
      <!-- solutions mobile -->
      <div class="row g-5 d-flex d-md-none">
        <img
          src="../assets/images/pages/home/solution-1-mobile.png"
          alt="solution-1"
          class="col-md-12"
        />
        <img
          src="../assets/images/pages/home/solution-2-mobile.png"
          alt="solution-2"
          class="col-md-12"
        />
        <img
          src="../assets/images/pages/home/solution-3-mobile.png"
          alt="solution-3"
          class="col-md-12"
        />
        <img
          src="../assets/images/pages/home/solution-4-mobile.png"
          alt="solution-4"
          class="col-md-12"
        />
        <img
          src="../assets/images/pages/home/solution-5-mobile.png"
          alt="solution-5"
          class="col-md-12"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
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
