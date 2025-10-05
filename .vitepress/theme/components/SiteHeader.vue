<template>
  <section class="header-wrapper">
    <div
      class="header d-flex justify-content-center align-items-center navbar navbar-dark bg-primary"
    >
      <div
        class="header__container d-flex w-100 justify-content-between align-items-center"
      >
        <div class="gap-3 d-flex align-items-center">
          <div class="header__features-toggle d-block d-md-none">
            <button v-if="isMenuOpen" @click="toggleMenu">
              <img :src="closeIcon" alt="Close menu" />
            </button>
            <button v-else @click="toggleMenu">
              <img :src="menuIcon" alt="Open menu" />
            </button>
          </div>
          <img
            class="header__logo"
            src="../assets/images/logo.png"
            alt="fullkeep"
          />
        </div>
        <!-- Desktop Navigation -->
        <div class="d-flex align-items-center gap-5">
          <ul class="d-none d-md-flex align-items-baseline m-0 gap-5">
            <li>
              <!-- Design System 🕹️ Remove if not needed -->
              <a
                href="/design-system"
                class="text-white headline-8-bold text-decoration-none"
              >
                DESIGN SYSTEM
              </a>
            </li>
            <li class="d-flex align-items-center gap-1">
              <a
                href="#features"
                class="text-white headline-8-bold text-decoration-none"
                @click="toggleDesktopFeatures"
              >
                FEATURES
              </a>
              <img
                :src="chevronUpIcon"
                alt="Chevron up"
                class="header__chevron"
                :class="{ 'header__chevron--rotated': isDesktopFeaturesOpen }"
              />
            </li>
            <li>
              <a
                href="#integration"
                class="text-white headline-8-bold text-decoration-none"
              >
                INTEGRATION
              </a>
            </li>
            <li>
              <a
                href="#solutions"
                class="text-white headline-8-bold text-decoration-none"
              >
                SOLUTIONS
              </a>
            </li>
          </ul>
          <!-- Demo Button -->
          <Button variant="mobile" class="header__demo-button">
            預約 Demo
          </Button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <MobileMenu
        :is-open="isMenuOpen"
        data-aos="slide-down"
        data-aos-duration="400"
        data-aos-easing="ease-out"
        @close="toggleMenu"
      />

      <!-- Desktop Features Section -->
      <FeaturesSection
        :is-open="isDesktopFeaturesOpen"
        data-aos="slide-down"
        data-aos-duration="400"
        data-aos-easing="ease-out"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from './Button.vue';
import FeaturesSection from './FeaturesSection.vue';
import MobileMenu from './MobileMenu.vue';
import closeIcon from '../assets/icons/close.svg';
import menuIcon from '../assets/icons/menu.svg';
import chevronUpIcon from '../assets/icons/chevron-up.svg';
import { useHeaderHeight } from '../composables/useHeaderHeight';
import '../../../scss/components/_header.scss';

// Reactive state
const isMenuOpen = ref(false);
const isDesktopFeaturesOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleDesktopFeatures = () => {
  isDesktopFeaturesOpen.value = !isDesktopFeaturesOpen.value;
};

// Click outside to close desktop features
const handleClickOutside = event => {
  const header = event.target.closest('.header');
  if (!header && isDesktopFeaturesOpen.value) {
    isDesktopFeaturesOpen.value = false;
  }
};

// Use header height composable
useHeaderHeight();

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  AOS.init({
    duration: 400,
    easing: 'ease-out',
    once: false,
  });
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  AOS.refresh();
});

watch(isDesktopFeaturesOpen, newValue => {
  if (newValue) {
    nextTick(() => {
      AOS.refresh();
    });
  }
});
watch(isMenuOpen, newValue => {
  if (newValue) {
    nextTick(() => {
      AOS.refresh();
    });
  }
});
// Expose methods for parent components
defineExpose({
  toggleMenu,
  toggleDesktopFeatures,
});
</script>
