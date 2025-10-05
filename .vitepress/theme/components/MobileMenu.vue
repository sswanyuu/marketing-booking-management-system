<template>
  <div v-if="isOpen" ref="menuRef" class="menu position-fixed bg-white">
    <div class="d-flex flex-column start px-2 gap-3">
      <!-- Why fullkeep Section -->
      <div class="d-flex flex-column gap-2">
        <div class="headline-6-bold text-primary">Why fullkeep?</div>
        <div class="body-3 text-black">
          Fullkeep
          是專為精緻餐飲設計的訂位管理系統,支援多裝置與多平台整合。協助餐廳簡化營運流程、優化顧客服務,強化品牌專業形象與競爭力。
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
          <div class="d-flex gap-4">
            <img src="../assets/icons/ux.svg" alt="UX" class="feature__icon" />
            <div class="d-flex flex-column gap-2 flex-grow-1">
              <div class="headline-7-bold text-primary">優良使用體驗</div>
              <div class="body-3 text-black">
                貼近使用者操作習慣,顧客與店家都能享受高效的數位訂位體驗。
              </div>
            </div>
            <img
              :src="arrowRightIcon"
              alt="Arrow right"
              class="align-self-start feature__arrow"
            />
          </div>
          <div class="feature__divider bg-gray-light w-100"></div>
          <div class="d-flex gap-4">
            <img
              src="../assets/icons/marketing.svg"
              alt="Marketing"
              class="feature__icon"
            />
            <div class="d-flex flex-column gap-2 flex-grow-1">
              <div class="headline-7-bold text-primary">行銷再接觸</div>
              <div class="body-3 text-black">
                精準行銷與數據分析,深化與顧客的互動,提升品牌忠誠度與回購率。
              </div>
            </div>
            <img
              :src="arrowRightIcon"
              alt="Arrow right"
              class="align-self-start feature__arrow"
            />
          </div>
          <div class="feature__divider bg-gray-light w-100"></div>
          <div class="d-flex gap-4">
            <img
              src="../assets/icons/tourists.svg"
              class="feature__icon"
              alt="Tourist"
            />
            <div class="d-flex flex-column gap-2 flex-grow-1">
              <div class="headline-7-bold text-primary">觀光客友善</div>
              <div class="body-3 text-black">
                無論語言、介面或聯繫工具,提供世界各地的顧客順暢的訂位流程與服務資訊。
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
      <div class="py-4">
        <div class="headline-8-bold">INTEGRATION</div>
      </div>
      <div class="menu__divider bg-gray-light"></div>

      <!-- Solutions Section -->
      <div class="py-4">
        <div class="headline-8-bold">SOLUTIONS</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
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
import { useMobileMenu } from '../composables/useMobileMenu';

const isFeaturesOpen = ref(false);
const { menuRef } = useMobileMenu(() => props.isOpen);

const toggleFeatures = () => {
  isFeaturesOpen.value = !isFeaturesOpen.value;
};
</script>
