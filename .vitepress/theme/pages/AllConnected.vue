<template>
  <div class="all-connected d-flex flex-column align-items-center">
    <!-- hero -->
    <section
      class="hero d-flex align-items-start align-items-md-center justify-content-center justify-content-md-start"
    >
      <img
        src="../assets/images/pages/all-connected/hero-bg.png"
        alt="hero"
        class="hero__bg--desktop d-none d-md-block"
      />
      <img
        src="../assets/images/pages/all-connected/hero-bg-mobile.png"
        alt="hero"
        class="hero__bg--mobile d-block d-md-none"
      />
      <div
        class="hero__content flex-column w-100 gap-md-8 gap-7 justify-content-center text-white d-flex"
      >
        <div
          class="d-flex flex-column gap-2 align-items-center align-items-md-start"
        >
          <div class="md-headline-2-bold headline-3-bold">
            Cross-Platform Integration
          </div>
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
    <!-- connected brands -->
    <section class="connected-brands d-flex flex-column align-items-center">
      <div
        class="content-container d-flex flex-column gap-3 gap-md-6 align-items-center text-center mx-3"
      >
        <div class="md-headline-1-bold headline-4-bold">
          Expanding Your Business Reach
        </div>

        <div class="text-gray body-2 md-headline-1-regular">
          Seamlessly connect multiple digital tools and systems, creating a
          comprehensive and easy-to-operate reservation management ecosystem.
        </div>
      </div>
      <div class="connected-brands__block d-md-block d-none">
        <div class="circle circle--1"></div>
        <div class="circle circle--2"></div>
        <div class="circle circle--3"></div>
        <div class="circle circle--4"></div>
        <img
          src="../assets/images/pages/all-connected/connected-brands.png"
          alt="connected brands"
          class="connected-brands__phone"
        />
      </div>
      <div class="connected-brands__block d-md-none d-block">
        <div class="circle circle--1"></div>
        <div class="circle circle--2"></div>
        <div class="circle circle--3"></div>
        <div class="circle circle--4"></div>
        <img
          src="../assets/images/pages/all-connected/connected-brands-mobile.png"
          alt="connected brands"
          class="connected-brands__phone d-md-none d-block"
        />
      </div>
    </section>
    <!-- items first section -->
    <section class="items-first-section w-100 bg-tertiary position-relative">
      <div class="section-container d-flex flex-column align-items-md-center">
        <div
          class="items-first-section__title md-headline-1-bold headline-4-bold d-md-none text-center"
        >
          Quick Start, Confident Launch
        </div>

        <div class="items-first-section__list d-flex flex-column">
          <div
            v-for="(item, index) in itemsFirstSection"
            :key="item.title"
            data-aos="fade-up"
            class="item-container"
            :data-aos-delay="index * 200"
          >
            <div class="item d-flex">
              <img class="item__image" :src="item.image" :alt="item.title" />
              <div
                class="item__content d-flex flex-column justify-content-md-center px-4 px-md-0"
              >
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
      </div>
      <img
        src="../assets/images/bg.png"
        alt="background"
        class="items-first-section__bg position-absolute d-none d-md-block"
      />
    </section>
    <!-- items second section -->
    <section class="items-second-section w-100">
      <div class="section-container d-flex flex-column align-items-center">
        <div
          class="items-second-section__title md-headline-1-bold headline-4-bold"
        >
          Easy Operations, Direct Customer Connection
        </div>
        <div
          class="items-second-section__list d-flex flex-column align-items-center"
        >
          <div
            v-for="(item, index) in itemsSecondSection"
            :key="item.title"
            class="item-container"
            data-aos="fade-up"
            :data-aos-delay="index * 200"
          >
            <div class="item d-flex">
              <img class="item__image" :src="item.image" :alt="item.title" />
              <div
                class="item__content d-flex flex-column justify-content-md-center px-4 px-md-0"
              >
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
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useNavigation } from '../composables/useNavigation.js';
const { handleDemoBooking } = useNavigation();
import Item1 from '../assets/images/pages/all-connected/item-1.png';
import Item2 from '../assets/images/pages/all-connected/item-2.png';
import Item3 from '../assets/images/pages/all-connected/item-3.png';
import Item4 from '../assets/images/pages/all-connected/item-4.png';
import Item5 from '../assets/images/pages/all-connected/item-5.png';
import Item6 from '../assets/images/pages/all-connected/item-6.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const itemsFirstSection = [
  {
    title: 'Embedded Custom System',
    description:
      "Send booking reminders and promotional messages directly through LINE. Aligned with Taiwan's mainstream communication habits, enhancing customer engagement and return rates.",
    image: Item1,
  },
  {
    title: 'Enterprise Integration Support',
    description:
      "Integrate with Google's booking system, allowing consumers to complete bookings directly from Google search results, expanding exposure and booking channels.",
    image: Item2,
  },
  {
    title: 'Training & Education',
    description:
      'Provide comprehensive training and operation guides to help businesses quickly get started and effectively utilize system features.',
    image: Item3,
  },
];
const itemsSecondSection = [
  {
    title: 'LINE Message Integration',
    description:
      "Send reservation reminders and notifications directly through LINE. Aligned with Taiwan's mainstream communication habits, enhancing customer engagement and return rates.",
    image: Item4,
  },
  {
    title: 'Google Booking Integration',
    description:
      "Integrate with Google's booking system, allowing consumers to complete bookings directly from Google search results, expanding exposure and booking channels.",
    image: Item5,
  },
  {
    title: 'Cross-Location Information Memory',
    description:
      'Support customer information memory across locations, simplifying repetitive input processes and improving booking efficiency and experience.',
    image: Item6,
  },
];

onMounted(() => {
  AOS.init({
    duration: 600,
    easing: 'ease-out',
    once: false,
    offset: 0,
  });
});
</script>
