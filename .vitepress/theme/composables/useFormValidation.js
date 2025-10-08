import { ref } from 'vue';

/**
 * @param {Object} initialData
 * @returns {Object}
 */
export function useFormValidation(initialData = {}) {
  const formData = ref({ ...initialData });
  const errors = ref({});

  const initErrors = () => {
    const errorState = {};
    Object.keys(formData.value).forEach(key => {
      errorState[key] = '';
    });
    errors.value = errorState;
  };

  // validation rules configuration
  const validationRules = {
    name: {
      required: true,
      minLength: 2,
      message: {
        required: '請輸入姓名',
      },
    },
    company: {
      required: true,
      minLength: 2,
      message: {
        required: '請輸入單位名稱',
      },
    },
    email: {
      required: true,
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: {
        required: '請輸入電子信箱',
        pattern: '請輸入有效的電子信箱格式',
      },
    },
  };

  /**
   * validate single field
   * @param {string} field
   * @param {any} value
   * @returns {string}
   */
  const validateField = (field, value) => {
    const rule = validationRules[field];
    if (!rule) return '';

    const trimmedValue = typeof value === 'string' ? value.trim() : value;

    if (rule.required && !trimmedValue) {
      return rule.message.required;
    }

    // minimum length validation
    if (rule.minLength && trimmedValue.length < rule.minLength) {
      return rule.message.minLength;
    }

    // format validation
    if (rule.pattern && trimmedValue && !rule.pattern.test(trimmedValue)) {
      return rule.message.pattern;
    }

    return '';
  };

  /**
   * validate all fields
   * @returns {boolean}
   */
  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(formData.value).forEach(field => {
      const error = validateField(field, formData.value[field]);
      newErrors[field] = error;
      if (error) isValid = false;
    });

    errors.value = newErrors;
    return isValid;
  };

  /**
   * validate single field
   * @param {string} field
   */
  const validateSingleField = field => {
    if (validationRules[field]) {
      errors.value[field] = validateField(field, formData.value[field]);
    }
  };

  /**
   * clear all errors
   */
  const clearErrors = () => {
    const clearedErrors = {};
    Object.keys(errors.value).forEach(key => {
      clearedErrors[key] = '';
    });
    errors.value = clearedErrors;
  };

  /**
   * reset form
   */
  const resetForm = () => {
    Object.keys(formData.value).forEach(key => {
      formData.value[key] = '';
    });
    clearErrors();
  };

  /**
   * check if field has error
   * @param {string} field
   * @returns {boolean}
   */
  const hasError = field => {
    return errors.value[field] && errors.value[field] !== '';
  };

  /**
   * get error message for field
   * @param {string} field
   * @returns {string}
   */
  const getError = field => {
    return errors.value[field] || '';
  };

  // initialize errors
  initErrors();

  return {
    formData,
    errors,
    validateField,
    validateForm,
    validateSingleField,
    clearErrors,
    resetForm,
    hasError,
    getError,
  };
}
