<template>
  <nav
    class="d-flex justify-content-between align-items-center site-header navbar navbar-dark bg-primary"
  >
    <!-- Mobile Close Button -->
    <div
      class="d-flex w-100 justify-content-between align-items-center header-container"
    >
      <!-- Logo -->
      <div class="logo-container d-flex align-items-center">
        <!-- Hamburger Menu -->
        <div class="features-toggle-container">
          <button v-if="isMenuOpen" @click="toggleMenu">
            <img :src="closeIcon" alt="Close menu" />
          </button>
          <button v-else @click="toggleMenu">
            <img :src="menuIcon" alt="Open menu" />
          </button>
        </div>
        <img class="logo-img" src="../assets/images/logo.png" alt="fullkeep" />
      </div>
      <!-- Desktop Navigation -->
      <div class="d-flex align-items-center">
        <ul class="navbar-nav flex-row">
          <li class="nav-item d-flex align-items-center features">
            <a href="#features" class="nav-link" @click="toggleDesktopFeatures">
              FEATURES
            </a>
            <img
              :src="chevronUpIcon"
              alt="Chevron up"
              class="chevron-icon"
              :class="{ rotated: isDesktopFeaturesOpen }"
            />
          </li>
          <li class="nav-item">
            <a href="#integration" class="nav-link">INTEGRATION</a>
          </li>
          <li class="nav-item">
            <a href="#solutions" class="nav-link">SOLUTIONS</a>
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
      class="desktop-features-section"
      :class="{ show: isDesktopFeaturesOpen }"
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
import '../../scss/components/_header.scss';

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
  const header = event.target.closest('.site-header');
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
