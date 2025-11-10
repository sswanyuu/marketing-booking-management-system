<template>
  <section
    v-if="isOpen"
    class="header-features-section w-100 d-flex justify-content-center align-items-center bg-white"
  >
    <div
      class="header-features-section__container d-flex justify-content-center gap-xl-7 gap-3"
    >
      <!-- Left: Why kangabook -->
      <div class="d-flex flex-column header-features-section__info gap-3">
        <div class="text-primary headline-5-bold">Why kangabook?</div>
        <div class="body-1 text-black">
          Kangabook is a reservation management system designed for fine dining,
          supporting multi-device and multi-platform integration. It helps
          restaurants streamline operations, optimize customer service, and
          enhance brand professionalism and competitiveness.
        </div>
      </div>
      <div class="header-features-section__divider align-self-center"></div>

      <!-- Right: Features -->
      <div>
        <div class="d-flex gap-xl-5 gap-1">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="feature-card d-flex flex-column align-self-stretch rounded-4 p-xl-8 p-4 gap-7"
            @click="handleClick(feature.link)"
            @mouseenter="handleMouseEnter(index)"
            @mouseleave="handleMouseLeave(index)"
          >
            <div class="d-flex justify-content-between">
              <img
                :src="feature.icon"
                :alt="feature.title"
                class="feature-card__image flex-shrink-0"
              />
              <img
                :src="arrowRightIcon"
                alt="Arrow right"
                class="feature-card__arrow"
                :class="{ 'feature-card__arrow--show': isHovered === index }"
              />
            </div>

            <div class="d-flex flex-column gap-2">
              <div class="headline-6-bold text-primary">
                {{ feature.title }}
              </div>
              <div class="body-2 text-black">{{ feature.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import '../../../scss/components/_features-section.scss';

// Import icons
import uxIcon from '../assets/icons/ux.svg';
import marketingIcon from '../assets/icons/marketing.svg';
import touristsIcon from '../assets/icons/tourists.svg';
import arrowRightIcon from '../assets/icons/arrow-right.svg';
import { ref } from 'vue';

defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});
const features = [
  {
    icon: uxIcon,
    title: 'Excellent User Experience',
    description:
      'Aligned with user operation habits, both customers and restaurants can enjoy an efficient digital reservation experience.',
    link: '/easy-use.html',
  },
  {
    icon: marketingIcon,
    title: 'Marketing & Re-engagement',
    description:
      'Precise marketing and data analysis deepen customer interactions, enhancing brand loyalty and repeat purchase rates.',
    link: '/grow-again.html',
  },
  {
    icon: touristsIcon,
    title: 'Tourist-Friendly',
    description:
      'Regardless of language, interface, or communication tools, we provide smooth reservation processes and service information for customers worldwide.',
    link: '/tourist-ready.html',
  },
];

const isHovered = ref(false);
const handleMouseEnter = index => {
  isHovered.value = index;
};
const handleMouseLeave = () => {
  isHovered.value = null;
};
const handleClick = link => {
  // eslint-disable-next-line no-undef
  window.location.href = link;
};
</script>
