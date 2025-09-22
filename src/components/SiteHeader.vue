<template>
  <nav class="d-flex justify-content-between align-items-center site-header navbar navbar-dark bg-primary">
    <!-- Mobile Close Button -->
    <div class="d-flex w-100 justify-content-between align-items-center header-container">
  <!-- Logo -->
    <div class="logo-container d-flex align-items-center">
      <!-- Hamburger Menu -->
      <div class="features-toggle-container">
        <button v-if='isMenuOpen' @click="toggleMenu">
          <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
          <g clip-path="url(#clip0_195_1747)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4545 10.9545C10.7557 10.6533 11.2442 10.6533 11.5454 10.9545L19.9999 19.409L28.4545 10.9545C28.7557 10.6533 29.2442 10.6533 29.5454 10.9545C29.8467 11.2558 29.8467 11.7442 29.5454 12.0455L21.0909 20.5L29.5453 28.9544C29.8466 29.2557 29.8466 29.7441 29.5453 30.0454C29.2441 30.3466 28.7556 30.3466 28.4544 30.0454L19.9999 21.591L11.5454 30.0455C11.2442 30.3467 10.7557 30.3467 10.4545 30.0455C10.1532 29.7442 10.1532 29.2558 10.4545 28.9545L18.909 20.5L10.4545 12.0455C10.1532 11.7442 10.1532 11.2558 10.4545 10.9545Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_195_1747">
<rect width="40" height="40" fill="white" transform="translate(0 0.5)"/>
            </clipPath>
          </defs>
        </svg>
        </button>
        <button @click="toggleMenu" v-else>
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="41" viewBox="0 0 40 41" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.50009 8.83329C5.50009 8.18896 6.02243 7.66663 6.66676 7.66663H33.3334C33.9778 7.66663 34.5001 8.18896 34.5001 8.83329C34.5001 9.47762 33.9778 9.99996 33.3334 9.99996H6.66676C6.02243 9.99996 5.50009 9.47762 5.50009 8.83329Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.50009 20.5C5.50009 19.8556 6.02243 19.3333 6.66676 19.3333H33.3334C33.9778 19.3333 34.5001 19.8556 34.5001 20.5C34.5001 21.1443 33.9778 21.6666 33.3334 21.6666H6.66676C6.02243 21.6666 5.50009 21.1443 5.50009 20.5Z" fill="white"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.50009 32.1666C5.50009 31.5223 6.02243 30.9999 6.66676 30.9999H33.3334C33.9778 30.9999 34.5001 31.5223 34.5001 32.1666C34.5001 32.8109 33.9778 33.3333 33.3334 33.3333H6.66676C6.02243 33.3333 5.50009 32.8109 5.50009 32.1666Z" fill="white"/>
        </svg>
        </button>
      </div>  
      <img src="../assets/images/logo.png" alt="fullkeep" />
    </div>
    <!-- Desktop Navigation -->
    <div class="d-flex align-items-center">
        <ul class="navbar-nav flex-row">
          <li class="nav-item d-flex align-items-center features">
            <a href="#features" class="nav-link" @click="toggleDesktopFeatures">
              FEATURES
            </a>
             <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none" class="chevron-icon" :class="{ 'rotated': isDesktopFeaturesOpen }">
<path d="M1.1522 0.348762C1.09651 0.288617 1.03099 0.241597 0.959402 0.210387C0.88781 0.179176 0.811541 0.164387 0.734948 0.166863C0.658355 0.169339 0.582939 0.189033 0.513006 0.224818C0.443072 0.260604 0.379991 0.311782 0.327364 0.375429C0.274737 0.439076 0.233594 0.513947 0.206285 0.595767C0.178976 0.677586 0.166035 0.76475 0.168202 0.852285C0.170369 0.93982 0.1876 1.02601 0.218913 1.10593C0.250225 1.18586 0.295006 1.25795 0.350697 1.3181L5.6007 6.98476C5.709 7.10179 5.8524 7.16699 6.00145 7.16699C6.1505 7.16699 6.29389 7.10179 6.4022 6.98476L11.6528 1.3181C11.7097 1.25835 11.7556 1.18627 11.788 1.10605C11.8203 1.02583 11.8384 0.939074 11.8411 0.850812C11.8439 0.762549 11.8312 0.674542 11.804 0.591904C11.7767 0.509266 11.7353 0.433644 11.6823 0.369431C11.6292 0.305217 11.5655 0.253691 11.4949 0.217847C11.4243 0.182003 11.3481 0.162555 11.2709 0.160632C11.1936 0.158709 11.1168 0.174349 11.0448 0.206645C10.9729 0.238941 10.9073 0.287249 10.8519 0.348762L6.00145 5.58343L1.1522 0.348762Z" fill="white"/>
</svg>
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
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Button from './Button.vue'
import MobileMenu from './MobileMenu.vue'
import '../../scss/components/_header.scss'

// Reactive state
const isMenuOpen = ref(false)
const isDesktopFeaturesOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const toggleDesktopFeatures = () => {
  isDesktopFeaturesOpen.value = !isDesktopFeaturesOpen.value
}

// Click outside to close desktop features
const handleClickOutside = (event) => {
  const header = event.target.closest('.site-header')
  if (!header && isDesktopFeaturesOpen.value) {
    isDesktopFeaturesOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})

// Expose methods for parent components
defineExpose({
  toggleMenu,
  toggleDesktopFeatures
})
</script>

