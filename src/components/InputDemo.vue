<template>
  <div class="row">
    <h2>Custom Input</h2>
    <Input
      v-model="formData.email.value"
      label="信箱"
      placeholder="輸入您的信箱"
      type="email"
      :state="formData.email.isValid ? 'default' : 'error'"
      :errorMessage="formData.email.errorMessage"
    />

    <Input
      v-model="formData.name.value"
      label="姓名"
      placeholder="輸入您的姓名"
      type="text"
      required
      :state="formData.name.isValid ? 'default' : 'error'"
      :errorMessage="formData.name.errorMessage"
    />

    <Input
      v-model="formData.disabledField"
      label="Error"
      placeholder="此欄位已禁用"
      type="text"
      disabled
    />
  </div>
</template>

<script setup>
import { ref, reactive, watch, computed } from 'vue';
import Input from './Input.vue';

// Form data
const formData = reactive({
  email: {
    value: '',
    errorMessage: '',
    isValid: true,
  },
  name: {
    value: '',
    errorMessage: '',
    isValid: true,
  },
});

// Dynamic demo
const dynamicState = ref('default');
const dynamicValue = ref('');

// Validation functions
const validateEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return { isValid: false, message: '電子郵件為必填欄位' };
  }
  if (!emailRegex.test(email)) {
    return { isValid: false, message: '請輸入有效的電子郵件格式' };
  }
  return { isValid: true, message: '' };
};

const validateName = name => {
  if (!name) {
    return { isValid: false, message: '姓名為必填欄位' };
  }
  if (name.length < 2) {
    return { isValid: false, message: '姓名至少需要2個字符' };
  }
  return { isValid: true, message: '' };
};

// Validation handlers
const validateField = (fieldName, value) => {
  let validation;
  switch (fieldName) {
    case 'email':
      validation = validateEmail(value);
      break;
    case 'name':
      validation = validateName(value);
      break;
    default:
      validation = { isValid: true, message: '' };
  }

  formData[fieldName].isValid = validation.isValid;
  formData[fieldName].errorMessage = validation.message;
};

// Watch for changes and validate
watch(
  () => formData.email.value,
  newValue => validateField('email', newValue)
);
watch(
  () => formData.name.value,
  newValue => validateField('name', newValue)
);

// Form validation summary
const isFormValid = computed(() => {
  return Object.values(formData).every(field => field.isValid);
});
</script>
