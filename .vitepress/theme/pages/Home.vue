<template>
  <div class="home d-flex flex-column align-items-center">
    <!-- hero -->
    <section
      class="hero d-flex align-items-start align-items-md-center justify-content-center justify-content-md-start"
    >
      <img
        src="../assets/images/pages/home/hero-bg.png"
        alt="hero"
        class="hero__bg--desktop d-none d-md-block"
      />
      <img
        src="../assets/images/pages/home/hero-bg-mobile.png"
        alt="hero"
        class="hero__bg--mobile d-block d-md-none"
      />
      <div
        class="hero__content d-flex flex-column gap-9 justify-content-center"
      >
        <div class="d-flex flex-column headline-3-bold md-headline-2-bold">
          <div class="d-flex">
            <div class="text-white align-self-end">THE</div>
            <div class="position-relative">
              <div class="hero__smartest ps-4 pe-2 pb-4 pe-md-0">
                SMARTEST WAY
              </div>
              <img
                src="../assets/images/pages/home/hero-slogan-decoration.png"
                alt="smartest-way"
                class="hero__smartest-decoration position-absolute end-0 bottom-2"
              />
            </div>
          </div>
          <div class="text-white">TO GROW YOUR EXPERIENCE BUSINESS.</div>
        </div>
        <div class="d-flex flex-column gap-2">
          <Button
            variant="primary"
            class="align-self-start"
            @click="handleDemoBooking"
          >
            Book Demo
          </Button>
        </div>
      </div>
    </section>
    <!-- brands -->
    <section
      class="brands d-flex flex-column align-items-center gap-4 gap-md-8"
    >
      <div class="headline-2-regular md-headline-1-regular text-gray">
        Trusted by Leading Brands
      </div>
      <div class="brands__container">
        <div class="row justify-content-center gy-1 w-100">
          <div
            v-for="brand in brands"
            :key="brand.title"
            class="col-auto brand d-flex align-items-center justify-content-center"
          >
            <img :src="brand.image" alt="brand-image" />
          </div>
        </div>
      </div>
    </section>
    <!-- features -->
    <section
      class="features d-flex justify-content-center flex-column align-items-center"
    >
      <div class="features__background rounded-4" />
      <div
        class="header-container text-white d-flex flex-column align-items-center gap-4 gap-md-6 px-4"
      >
        <div class="headline-5-bold md-headline-2-bold">
          More Than Just Booking
        </div>
        <div class="body-1 md-headline-1-regular text-center">
          A comprehensive solution with zero learning curve. Experience
          management, customer growth, all in one system. Trusted by leading
          brands.
        </div>
      </div>
      <!-- features desktop -->
      <div class="features__list d-none d-md-flex">
        <div class="row gx-7 gx-xl-9">
          <div v-for="feature in features" :key="feature.title" class="col-4">
            <div
              class="feature-card d-flex flex-column gap-4 bg-gray-light rounded-4 pt-9 justify-content-between align-items-center h-100"
            >
              <div class="headline-6-bold xl-headline-5-bold mx-3 text-center">
                {{ feature.title }}
              </div>
              <img
                :src="feature.image"
                alt="feature-image"
                class="object-fit-cover overflow-hidden rounded-4"
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
        class="painpoints__header d-flex flex-column align-items-center gap-4 gap-md-6"
      >
        <div class="headline-6-bold md-headline-2-bold text-center">
          We Understand Your Management Challenges
        </div>
        <div class="body-1 md-headline-1-regular text-center text-gray">
          You don't have to accept chaos. We provide better solutions to restore
          control over your experience management, turning pain points into
          smooth operations.
        </div>
      </div>
      <div class="painpoints__list w-100 row gx-5 gy-5">
        <div class="col-12">
          <div
            class="painpoint-card painpoint-card--first d-flex flex-column flex-md-row align-items-center rounded-4 px-md-9 justify-content-between overflow-hidden"
          >
            <div
              class="painpoint-card__content d-flex flex-column gap-3 gap-md-4 text-white mt-7 mt-md-0 px-7 px-md-0 text-center text-md-start"
            >
              <div class="headline-7-bold md-headline-5-bold">
                {{ painPoints[0].title }}
              </div>
              <div class="body-3 md-body-1">
                {{ painPoints[0].description }}
              </div>
            </div>
            <div
              class="align-self-end d-flex align-items-center align-items-md-end px-7 px-md-0"
            >
              <img
                :src="painPoints[0].image"
                alt="painpoint-image"
                class="object-fit-cover d-none d-md-block"
              />
              <img
                :src="painPoints[0].mobileImage"
                alt="painpoint-image"
                class="object-fit-cover d-block d-md-none"
              />
            </div>
          </div>
        </div>

        <div class="col-12 col-md-5">
          <div
            class="painpoint-card painpoint-card--second d-flex flex-column pt-7 gap-4 pt-md-9 align-items-center rounded-4 justify-content-between bg-gray-dark"
          >
            <div
              class="painpoint-card__content d-flex flex-column gap-3 gap-md-4 text-white text-center px-7 px-md-0"
            >
              <div class="headline-7-bold md-headline-5-bold">
                {{ painPoints[1].title }}
              </div>
              <div class="body-3 md-body-1">
                {{ painPoints[1].description }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-7">
          <div
            class="painpoint-card d-flex flex-column gap-4 pt-md-9 bg-primary align-items-center rounded-4 justify-content-between"
          >
            <div
              class="painpoint-card__content d-flex flex-column gap-3 gap-md-4 text-white mt-7 mt-md-0 px-7 px-md-0 text-center"
            >
              <div class="headline-7-bold md-headline-5-bold">
                {{ painPoints[2].title }}
              </div>
              <div class="body-3 md-body-1">
                {{ painPoints[2].description }}
              </div>
            </div>
            <img
              :src="painPoints[2].image"
              alt="painpoint-image"
              class="overflow-hidden d-none d-md-block"
            />
            <img
              :src="painPoints[2].mobileImage"
              alt="painpoint-image"
              class="overflow-hidden d-block d-md-none"
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
            <div class="headline-6-bold md-headline-1-bold text-center px-5">
              Comprehensive Operations Experience, Let You Focus on Making Your
              Experience Business the Best
            </div>
          </div>
        </div>
        <div class="row gx-5 gy-5">
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
                'solution-card d-flex bg-gray-light rounded-4 pt-7 pt-md-9 justify-content-between align-items-center',
                index === solutions.length - 1
                  ? 'flex-column flex-md-row'
                  : 'flex-column',
                'gap-4',
              ]"
            >
              <div class="d-flex flex-column gap-3 gap-md-4 px-7 px-md-9">
                <div class="headline-6-bold md-headline-4-bold">
                  {{ solution.title }}
                </div>
                <div class="body-3 md-headline-2-regular text-gray">
                  {{ solution.description }}
                </div>
              </div>
              <img
                :src="solution.image"
                alt="solution-image"
                class="overflow-hidden d-none d-md-block"
              />
              <img
                :src="solution.mobileImage"
                alt="solution-image"
                class="overflow-hidden d-block d-md-none object-fit-cover"
                :class="solution.mobileImageClass"
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
import { useNavigation } from '../composables/useNavigation.js';

const { handleDemoBooking } = useNavigation();

import Brand1 from '../assets/images/pages/home/brand-1.png';
import Brand2 from '../assets/images/pages/home/brand-2.png';
import Brand3 from '../assets/images/pages/home/brand-3.png';
import Brand4 from '../assets/images/pages/home/brand-4.png';
import Brand5 from '../assets/images/pages/home/brand-5.png';
import Feature1 from '../assets/images/pages/home/feature-1.png';
import Feature2 from '../assets/images/pages/home/feature-2.png';
import Feature3 from '../assets/images/pages/home/feature-3.png';
import Solution1 from '../assets/images/pages/home/solution-1.png';
import Solution1Mobile from '../assets/images/pages/home/solution-1-mobile.png';
import Solution2 from '../assets/images/pages/home/solution-2.png';
import Solution2Mobile from '../assets/images/pages/home/solution-2-mobile.png';
import Solution3 from '../assets/images/pages/home/solution-3.png';
import Solution3Mobile from '../assets/images/pages/home/solution-3-mobile.png';
import Solution4 from '../assets/images/pages/home/solution-4.png';
import Solution4Mobile from '../assets/images/pages/home/solution-4-mobile.png';
import Solution5 from '../assets/images/pages/home/solution-5.png';
import Solution5Mobile from '../assets/images/pages/home/solution-5-mobile.png';
import Painpoint1 from '../assets/images/pages/home/painpoint-1.png';
import Painpoint1Mobile from '../assets/images/pages/home/painpoint-1-mobile.png';
import Painpoint3 from '../assets/images/pages/home/painpoint-3.png';
import Painpoint3Mobile from '../assets/images/pages/home/painpoint-3-mobile.png';
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

const brands = [
  {
    title: 'brand-1',
    image: Brand1,
  },
  {
    title: 'brand-2',
    image: Brand2,
  },
  {
    title: 'brand-3',
    image: Brand3,
  },
  {
    title: 'brand-4',
    image: Brand4,
  },
  {
    title: 'brand-5',
    image: Brand5,
  },
];
const features = [
  {
    title: 'One-Click Booking, Easy Returns',
    image: Feature1,
    class: ['w-50'],
  },
  {
    title: 'From Local to International',
    image: Feature2,
  },
  {
    title: 'Custom System, Easy Integration',
    image: Feature3,
    class: ['mb-9'],
  },
];
const painPoints = [
  {
    title: 'Need to Change Group Size? Cancel and Rebook?',
    description:
      'Kangabook supports real-time adjustments to group size, time, and notes. Edit bookings directly for smoother processes and more flexible service.',
    image: Painpoint1,
    mobileImage: Painpoint1Mobile,
  },
  {
    title: 'International Guests Struggling to Book?',
    description:
      'Kangabook supports multi-language interfaces, email/international phone verification, and online payment. International customers can easily complete bookings without losing experience slots.',
  },
  {
    title: "Can't Book Directly from Your Brand Website?",
    description:
      'Kangabook provides embedded APIs for quick integration into your brand website. No page redirects needed, maintaining brand consistency and seamless customer experience.',
    image: Painpoint3,
    mobileImage: Painpoint3Mobile,
  },
];
const solutions = [
  {
    title: 'LINE Message Integration',
    description:
      'Automatically send booking and waitlist notifications. No more manual follow-ups. Customers receive instant updates while staff focus on in-person service.',
    image: Solution1,
    mobileImage: Solution1Mobile,
    mobileImageClass: 'w-75',
  },
  {
    title: 'Google Booking Integration',
    description:
      "Search results don't just create exposure—they convert directly into bookings. Booking links appear in search results, dramatically improving conversion efficiency.",
    image: Solution2,
    mobileImage: Solution2Mobile,
  },
  {
    title: 'Deposit Payment & Reminder Features',
    description:
      'Flexibly set deposit amounts and payment methods, paired with automatic reminders. Effectively reduce no-show rates, ensuring every experience slot is utilized, boosting operational efficiency.',
    image: Solution3,
    mobileImage: Solution3Mobile,
  },
  {
    title: 'CRM & Remarketing Tools',
    description:
      'Built-in customer database and marketing modules. Easily set up promotional pushes, new experience notifications, and holiday greetings. Turn one-time customers into loyal regulars.',
    image: Solution4,
    mobileImage: Solution4Mobile,
  },
  {
    title: 'Cross-Location Shared Payment & Notes',
    description:
      "Record each customer's payment history and booking preferences. Enter once, use across all locations. Make return bookings smoother and service more personalized.",
    image: Solution5,
    class: ['col-md-12', 'flex-md-row'],
    mobileImage: Solution5Mobile,
  },
];
</script>
