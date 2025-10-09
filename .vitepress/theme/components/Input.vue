<template>
  <div class="form-group mb-4">
    <label class="form-label" :for="inputId">
      {{ label }}
    </label>

    <input
      :id="inputId"
      ref="inputRef"
      v-model="inputValue"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :class="inputClasses"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="handleInput"
      @keydown="handleKeydown"
    />

    <div v-if="errorMessage" class="body-3 text-danger mt-2">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue';
import '../../../scss/components/_input.scss';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
    validator: value =>
      ['text', 'email', 'password', 'number', 'tel', 'url', 'search'].includes(
        value
      ),
  },
  state: {
    type: String,
    default: 'default',
    validator: value => ['default', 'error'].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  required: {
    type: Boolean,
    default: false,
  },
  errorMessage: {
    type: String,
    default: '',
  },
});

const emit = defineEmits([
  'update:modelValue',
  'focus',
  'blur',
  'input',
  'keydown',
]);

const inputRef = ref(null);
const inputId = computed(
  () => `input-${Math.random().toString(36).substr(2, 9)}`
);

const inputValue = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
});

const inputClasses = computed(() => {
  const classes = ['form-control'];

  if (props.state === 'error') {
    classes.push('is-invalid');
  }
  return classes;
});

const handleFocus = event => {
  emit('focus', event);
};

const handleBlur = event => {
  emit('blur', event);
};

const handleInput = event => {
  emit('input', event);
};

const handleKeydown = event => {
  emit('keydown', event);
};

// Expose methods for parent components
defineExpose({
  focus: () => {
    nextTick(() => {
      inputRef.value?.focus();
    });
  },
  blur: () => {
    inputRef.value?.blur();
  },
  select: () => {
    inputRef.value?.select();
  },
});
</script>
