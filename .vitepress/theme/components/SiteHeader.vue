<template>
  <nav
    class="d-flex justify-content-between align-items-center header navbar navbar-dark bg-primary"
  >
    <!-- Mobile Close Button -->
    <div
      class="d-flex w-100 justify-content-between align-items-center header__container"
    >
      <!-- Logo -->
      <div class="header__logo d-flex align-items-center">
        <!-- Hamburger Menu -->
        <div class="header__features-toggle">
          <button v-if="isMenuOpen" @click="toggleMenu">
            <img :src="closeIcon" alt="Close menu" />
          </button>
          <button v-else @click="toggleMenu">
            <img :src="menuIcon" alt="Open menu" />
          </button>
        </div>
        <img class="header__logo-img" src="../assets/images/logo.png" alt="fullkeep" />
      </div>
      <!-- Desktop Navigation -->
      <div class="d-flex align-items-center">
        <ul class="nav flex-row">
          <li class="nav__item">
            <!-- Design System 🕹️ Remove if not needed -->
            <a href="/design-system" class="nav__link">DESIGN SYSTEM</a>
          </li>
          <li class="nav__item d-flex align-items-center header__features">
            <a href="#features" class="nav__link" @click="toggleDesktopFeatures">
              FEATURES
            </a>
            <img
              :src="chevronUpIcon"
              alt="Chevron up"
              class="header__chevron"
              :class="{ 'header__chevron--rotated': isDesktopFeaturesOpen }"
            />
          </li>
          <li class="nav__item">
            <a href="#integration" class="nav__link">INTEGRATION</a>
          </li>
          <li class="nav__item">
            <a href="#solutions" class="nav__link">SOLUTIONS</a>
          </li>
        </ul>
        <!-- Demo Button -->
        <Button variant="mobile">預約 Demo</Button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <MobileMenu :is-open="isMenuOpen" @close="toggleMenu" />

    <!-- Desktop Features Section -->
    <div
      class="header__features-dropdown"
      :class="{ 'header__features-dropdown--show': isDesktopFeaturesOpen }"
    >
      <FeaturesSection />
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Button from './Button.vue';
import FeaturesSection from './FeaturesSection.vue';
import MobileMenu from './MobileMenu.vue';
import closeIcon from '../assets/icons/close.svg';
import menuIcon from '../assets/icons/menu.svg';
import chevronUpIcon from '../assets/icons/chevron-up.svg';
// import logo from '../assets/images/logo.png';
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

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

// Expose methods for parent components
defineExpose({
  toggleMenu,
  toggleDesktopFeatures,
});
</script>
