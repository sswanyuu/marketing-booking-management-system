<template>
  <div v-if="isOpen" ref="mobileNavRef" class="menu position-fixed bg-white">
    <div class="d-flex flex-column start menu__content">
      <!-- Why fullkeep Section -->
      <div class="menu__section">
        <h2 class="headline-6-bold text-primary">Why fullkeep?</h2>
        <p class="body-3 text-black mb-0">
          Fullkeep
          是專為精緻餐飲設計的訂位管理系統,支援多裝置與多平台整合。協助餐廳簡化營運流程、優化顧客服務,強化品牌專業形象與競爭力。
        </p>
      </div>

      <!-- Features Section -->
      <div class="menu__section">
        <div
          class="d-flex align-items-center menu__header"
          @click="toggleFeatures"
        >
          <div class="headline-8-bold menu__title">FEATURES</div>
          <img
            :src="chevronDownIcon"
            alt="Chevron down"
            class="menu__chevron"
            :class="{ 'menu__chevron--rotated': isFeaturesOpen }"
          />
        </div>
        <div
          class="feature__dropdown d-flex flex-column"
          :class="{ 'feature__dropdown--show': isFeaturesOpen }"
        >
          <div class="d-flex feature__item">
            <img src="../assets/icons/ux.svg" alt="UX" class="feature__icon" />
            <div class="d-flex flex-column feature__content flex-grow-1">
              <div class="feature__title headline-7-bold text-primary">
                優良使用體驗
              </div>
              <p class="feature__description body-3 text-black">
                貼近使用者操作習慣,顧客與店家都能享受高效的數位訂位體驗。
              </p>
            </div>
            <img
              :src="arrowRightIcon"
              alt="Arrow right"
              class="align-self-start feature__arrow"
            />
          </div>
          <div class="feature__divider bg-gray-light"></div>
          <div class="d-flex feature__item">
            <img
              src="../assets/icons/marketing.svg"
              alt="Marketing"
              class="feature__icon"
            />
            <div class="d-flex flex-column feature__content flex-grow-1">
              <div class="feature__title headline-7-bold text-primary">
                行銷再接觸
              </div>
              <p class="feature__description body-3 text-black">
                精準行銷與數據分析,深化與顧客的互動,提升品牌忠誠度與回購率。
              </p>
            </div>
            <img
              :src="arrowRightIcon"
              alt="Arrow right"
              class="align-self-start feature__arrow"
            />
          </div>
          <div class="feature__divider bg-gray-light"></div>
          <div class="d-flex feature__item">
            <img
              src="../assets/icons/tourists.svg"
              class="feature__icon"
              alt="Tourist"
            />
            <div class="d-flex flex-column feature__content flex-grow-1">
              <div class="feature__title headline-7-bold text-primary">
                觀光客友善
              </div>
              <p class="feature__description body-3 text-black">
                無論語言、介面或聯繫工具,提供世界各地的顧客順暢的訂位流程與服務資訊。
              </p>
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
      <div class="menu__section">
        <div class="headline-8-bold menu__title">INTEGRATION</div>
      </div>
      <div class="menu__divider bg-gray-light"></div>

      <!-- Solutions Section -->
      <div class="menu__section">
        <div class="headline-8-bold menu__title">SOLUTIONS</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue';
import '../../../scss/components/_mobile-menu.scss';

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
const mobileNavRef = ref(null);

// Methods
const toggleFeatures = () => {
  isFeaturesOpen.value = !isFeaturesOpen.value;
};

// Dynamic header height calculation
const updateMobileNavPosition = () => {
  if (mobileNavRef.value) {
    const header = document.querySelector('.header');
    if (header) {
      const headerHeight = header.offsetHeight;
      mobileNavRef.value.style.top = `${headerHeight}px`;
    }
  }
};

// Watch for menu open/close to update position
watch(
  () => props.isOpen,
  async newValue => {
    if (newValue) {
      await nextTick();
      updateMobileNavPosition();
    }
  }
);

// Update position on window resize
const handleResize = () => {
  if (props.isOpen) {
    updateMobileNavPosition();
  }
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
  if (props.isOpen) {
    updateMobileNavPosition();
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>
