<template>
  <div v-if="isOpen" ref="menuRef" class="menu position-fixed bg-white">
    <div class="d-flex flex-column start px-2 gap-3">
      <!-- Why kangabook Section -->
      <div class="d-flex flex-column gap-2">
        <div class="headline-6-bold text-primary">Why kangabook?</div>
        <div class="body-3 text-black">
          Kangabook - Premium dining booking system with multi-device support.
          Simplify operations, optimize service, strengthen your brand.
        </div>
      </div>

      <!-- Features Section -->
      <div class="menu__list">
        <div
          class="d-flex align-items-center menu__list__header py-4 gap-2"
          @click="toggleFeatures"
        >
          <div class="headline-8-bold">FEATURES</div>
          <img
            :src="chevronDownIcon"
            alt="Chevron down"
            class="chevron text-black"
            :class="{ 'chevron--rotated': isFeaturesOpen }"
          />
        </div>
        <div
          class="feature__dropdown d-flex flex-column gap-3 overflow-hidden"
          :class="{ 'feature__dropdown--show': isFeaturesOpen }"
        >
          <div
            class="d-flex gap-4"
            @click="handleFeaturesClick(ROUTES.EASY_USE)"
          >
            <img src="../assets/icons/ux.svg" alt="UX" class="feature__icon" />
            <div class="d-flex flex-column gap-2 flex-grow-1">
              <div class="headline-7-bold text-primary">
                Excellent User Experience
              </div>
              <div class="body-3 text-black">
                Intuitive interface for customers and merchants. Enjoy efficient
                digital booking experience.
              </div>
            </div>
            <img
              :src="arrowRightIcon"
              alt="Arrow right"
              class="align-self-start feature__arrow"
            />
          </div>
          <div class="feature__divider bg-gray-light w-100"></div>
          <div
            class="d-flex gap-4"
            @click="handleFeaturesClick(ROUTES.GROW_AGAIN)"
          >
            <img
              src="../assets/icons/marketing.svg"
              alt="Marketing"
              class="feature__icon"
            />
            <div class="d-flex flex-column gap-2 flex-grow-1">
              <div class="headline-7-bold text-primary">
                Marketing & Re-engagement
              </div>
              <div class="body-3 text-black">
                Precise marketing and data analysis, deepening customer
                interaction, improving brand loyalty and repurchase rates.
              </div>
            </div>
            <img
              :src="arrowRightIcon"
              alt="Arrow right"
              class="align-self-start feature__arrow"
            />
          </div>
          <div class="feature__divider bg-gray-light w-100"></div>
          <div
            class="d-flex gap-4"
            @click="handleFeaturesClick(ROUTES.TOURIST_READY)"
          >
            <img
              src="../assets/icons/tourists.svg"
              class="feature__icon"
              alt="Tourist"
            />
            <div class="d-flex flex-column gap-2 flex-grow-1">
              <div class="headline-7-bold text-primary">Tourist-Friendly</div>
              <div class="body-3 text-black">
                Whether language, interface or contact tools, provide smooth
                booking processes and service information for customers
                worldwide.
              </div>
            </div>
            <img
              :src="arrowRightIcon"
              alt="Arrow right"
              class="align-self-start feature__arrow"
            />
          </div>
        </div>
      </div>
      <div class="menu__divider bg-gray-light"></div>
      <!-- Integration Section -->
      <div class="py-4" @click="handleNavigationClick(ROUTES.ALL_CONNECTED)">
        <div class="headline-8-bold">INTEGRATION</div>
      </div>
      <div class="menu__divider bg-gray-light"></div>

      <!-- Solutions Section -->
      <div class="py-4" @click="handleNavigationClick(ROUTES.INDUSTRY_FIT)">
        <div class="headline-8-bold">SOLUTIONS</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import '../../../scss/components/_mobile-menu.scss';
import { useNavigation } from '../composables/useNavigation.js';
const { navigateTo, ROUTES } = useNavigation();
// Import icons
import chevronDownIcon from '../assets/icons/chevron-down.svg';
import arrowRightIcon from '../assets/icons/arrow-right-mobile.svg';
// Props
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});

// Emits
const emit = defineEmits(['close']);

// Local state
const isFeaturesOpen = ref(false);

const handleNavigationClick = route => {
  navigateTo(route);
  emit('close');
};
const handleFeaturesClick = route => {
  toggleFeatures();
  navigateTo(route);
  emit('close');
};

const toggleFeatures = () => {
  isFeaturesOpen.value = !isFeaturesOpen.value;
};

import { useMobileMenu } from '../composables/useMobileMenu.js';
const { menuRef } = useMobileMenu(() => props.isOpen);
</script>
