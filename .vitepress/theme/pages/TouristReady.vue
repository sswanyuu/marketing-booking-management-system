<template>
  <div class="tourist-ready d-flex flex-column align-items-center">
    <!-- hero -->
    <section
      class="hero d-flex align-items-start align-items-md-center justify-content-center justify-content-md-start"
    >
      <img
        src="../assets/images/pages/tourist-ready/hero-bg.png"
        alt="hero"
        class="hero__bg--desktop d-none d-md-block"
      />
      <img
        src="../assets/images/pages/tourist-ready/hero-bg-mobile.png"
        alt="hero"
        class="hero__bg--mobile d-block d-md-none"
      />
      <div
        class="hero__content flex-column w-100 gap-md-8 gap-7 justify-content-center text-white d-flex"
      >
        <div
          class="d-flex flex-column gap-2 align-items-center align-items-md-start"
        >
          <div class="md-headline-2-bold headline-3-bold">Tourist Ready</div>
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
    <!-- globe -->
    <section class="globe d-flex flex-column align-items-center">
      <div
        class="d-flex flex-column gap-3 gap-md-6 align-items-center text-center mx-md-7 mx-3 py-5 px-5 px-md-0"
      >
        <div class="md-headline-1-bold headline-4-bold">
          International Standards
        </div>
        <div class="d-flex flex-column align-items-center">
          <div class="text-gray body-2 md-headline-1-regular">
            Regardless of language, interface, or communication tools,
          </div>
          <div class="text-gray body-2 md-headline-1-regular">
            we provide smooth reservation processes and service information for
            customers worldwide.
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
        <div
          v-for="item in touristFeatures"
          :key="item.title"
          class="item-container d-flex"
        >
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
    <section
      class="integration d-flex justify-content-center flex-column align-items-center"
    >
      <div
        class="integration__content-container d-flex flex-column gap-3 gap-md-6 align-items-center text-center mx-md-7 p-5 px-md-0"
      >
        <div class="md-headline-1-bold headline-4-bold">
          International System Integration
        </div>
        <div class="d-flex flex-column align-items-center">
          <div class="text-gray body-2 md-headline-1-regular">
            Support for LINE, WhatsApp, and other common communication
            platforms,
          </div>
          <div class="text-gray body-2 md-headline-1-regular">
            customers from different regions can also receive reminders and
            marketing messages in real-time.
          </div>
        </div>
      </div>
      <div class="integration__block d-md-block d-none">
        <div class="circle circle--1"></div>
        <div class="circle circle--2"></div>
        <div class="circle circle--3"></div>
        <div class="circle circle--4"></div>
        <img
          src="../assets/images/pages/tourist-ready/integration.png"
          alt="integration phone"
          class="integration__phone"
        />
      </div>
      <div class="integration__block d-md-none d-block">
        <div class="circle circle--1"></div>
        <div class="circle circle--2"></div>
        <div class="circle circle--3"></div>
        <div class="circle circle--4"></div>
        <img
          src="../assets/images/pages/tourist-ready/integration-mobile.png"
          alt="integration phone"
          class="integration__phone d-md-none d-block"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigation } from '../composables/useNavigation.js';

const { handleDemoBooking } = useNavigation();
import Item1 from '../assets/images/pages/tourist-ready/item-1.png';
import Item2 from '../assets/images/pages/tourist-ready/item-2.png';
const touristFeatures = [
  {
    title: 'Multi-Language Support',
    description:
      "Regardless of which country they're from, customers can browse, book, and communicate in their familiar language, creating a truly international dining experience.",
    image: Item1,
    points: [
      'Multi-language interface with simple, easy-to-understand processes',
      'Automatically detect regional language, also supports manual switching',
      'Automatic translation of menus and notification emails',
    ],
  },
  {
    title: 'Automatic Currency Conversion',
    description:
      'Travelers can view restaurant menus and prices before departure, booking with confidence and dining at ease.',
    image: Item2,
    points: [
      'Automatically display corresponding currency based on user location',
      'Clear and transparent pricing information for more confident bookings',
      'Improve traveler satisfaction and conversion rates',
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
