<template>
  <button
    type="button"
    class="btn"
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <template v-if="variant === 'arrow'">
      <svg xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19 12L5 12M19 12L13 18M19 12L13 6"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </template>
    <template v-else>
      <slot>{{ text }}</slot>
    </template>
  </button>
</template>

<script setup>
import '../../scss/components/_button.scss';
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: value =>
      ['primary', 'secondary', 'mobile', 'arrow', 'mobileFull'].includes(value),
  },

  disabled: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['click']);
const classesMap = {
  primary: 'btn-primary headline-5-bold',
  secondary: 'btn-secondary headline-5-bold',
  mobile: 'btn-mobile headline-6-bold',
  mobileFull: 'btn-mobile-full headline-6-bold',
  arrow: 'btn-arrow',
};

const buttonClasses = computed(() => {
  const classes = [classesMap[props.variant]];
  return classes;
});

const handleClick = event => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>
