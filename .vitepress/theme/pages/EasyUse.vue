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
                <img
                  src="../assets/icons/check.svg"
                  alt="check-icon"
                  class="align-self-start"
                />
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
            Don't Settle for Less
          </div>
          <div class="md-headline-1-regular body-2">
            From bookings to on-site management, Kangabook adapts to every daily
            operation in your business. We've built a digital tool that truly
            meets your needs. Efficient, user-friendly, making operations
            smoother, saving time and effort.
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
                  Deposit Payment
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
                <span class="circle__text body-3 text-center">Calendar</span>
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
                  Session Merging
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
                <span class="circle__text body-3 text-center">Block Slots</span>
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
                  Internal Notes
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
                  Floor Plan Editor
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
                  Multi-Location
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
    title: 'Intuitive Interface',
    description:
      'Flexibly arrange by experience type and time slot, optimizing on-site flow and capacity utilization.',
    image: Item1,
    points: [
      'Customers can book online, staff can also book on their behalf',
      'Supports mobile, tablet, and desktop operation',
      'Staff can quickly create bookings for customers',
    ],
  },
  {
    title: 'Capacity Management',
    description:
      'Flexibly arrange by experience type and time slot, optimizing on-site flow and capacity utilization.',
    image: Item2,
    points: [
      'VIP sessions and premium experiences can be included in booking logic',
      'Automatically avoid overlaps, prioritize by experience type',
      'Improve capacity utilization and on-site flow efficiency',
    ],
  },
  {
    title: 'Flexible Adjustment System',
    description:
      'Customers can change group size or experience selections without canceling and rebooking, flexible and time-saving.',
    image: Item3,
    points: [
      'On-site group size changes, staff can update booking info in real-time',
      'Adjust group size, time, experiences without rebooking',
      'Front and back office simultaneously access the latest information',
    ],
  },
  {
    title: 'Weekday/Holiday Settings',
    description:
      'Freely set booking rules and operating hours for different days, flexible operations without burden.',
    image: Item4,
    points: [
      'Freely set operating rules for different days',
      'Automatically correspond to business hours and staffing schedules',
      'One-click adjustment for special business days and temporary closures',
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
