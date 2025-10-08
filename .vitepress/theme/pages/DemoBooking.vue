<template>
  <div class="demo-booking">
    <section
      class="hero d-flex align-items-center justify-content-center bg-primary"
    >
      <div class="hero-content text-center text-white">
        <h1 class="headline-3-bold md-headline-1-bold mb-1 mb-md-0">
          Coming Soon
        </h1>
        <p class="headline-3-bold md-headline-1-bold">即將上線</p>
      </div>
    </section>

    <!-- Form Section -->
    <section
      class="form-section w-100 d-flex justify-content-center align-items-center px-3"
    >
      <div
        class="form-card d-flex flex-column w-100 rounded-4 border border-primary align-items-center justify-content-center"
      >
        <div v-if="!isSubmitted" class="form-card__content d-flex flex-column">
          <div
            class="text-center d-flex flex-column gap-4 gap-md-6 align-items-center"
          >
            <div class="headline-4-bold md-headline-1-bold">
              立即登記體驗名單
            </div>
            <div
              class="body-1 md-headline-1-regular text-gray d-flex flex-column align-items-center"
            >
              <div>前100位加入的名單，</div>
              <div>將優先解鎖 Fullkeep 最新功能，搶先一步引領市場</div>
            </div>
          </div>
          <div class="form-divider bg-primary"></div>
          <form
            class="d-flex flex-column gap-6 gap-md-7"
            @submit.prevent="handleSubmit"
          >
            <div class="input-container d-flex flex-column">
              <Input
                v-model="formData.name"
                label="姓名"
                placeholder="輸入您的姓名"
                type="text"
                required
                :state="hasError('name') ? 'error' : 'default'"
                :error-message="getError('name')"
                @blur="() => handleFieldValidation('name')"
                @input="() => handleFieldValidation('name')"
              />

              <Input
                v-model="formData.company"
                label="單位"
                placeholder="輸入您的單位名稱"
                type="text"
                required
                :state="hasError('company') ? 'error' : 'default'"
                :error-message="getError('company')"
                @blur="() => handleFieldValidation('company')"
                @input="() => handleFieldValidation('company')"
              />

              <Input
                v-model="formData.email"
                label="信箱"
                placeholder="輸入您的E-mail"
                type="email"
                required
                :state="hasError('email') ? 'error' : 'default'"
                :error-message="getError('email')"
                @blur="() => handleFieldValidation('email')"
                @input="() => handleFieldValidation('email')"
              />
            </div>
            <Button class="self-align-center" @click="handleSubmit">
              加入體驗名單
            </Button>
          </form>
        </div>
        <div
          v-else
          class="form-card__success d-flex flex-column align-items-center justify-content-center"
        >
          <img
            src="../assets/icons/submit.svg"
            alt="submit"
            class="submit-icon"
          />
          <div
            class="text-center d-flex flex-column gap-4 gap-md-6 align-items-center"
          >
            <div class="headline-4-bold md-headline-1-bold">收到您的資料</div>
            <div
              class="body-1 md-headline-1-regular text-gray d-flex flex-column align-items-center"
            >
              我們會盡快聯繫你
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Input from '../components/Input.vue';
import Button from '../components/Button.vue';
import { useFormValidation } from '../composables/useFormValidation.js';

const {
  formData,
  errors,
  validateForm,
  validateSingleField,
  hasError,
  getError,
} = useFormValidation({
  name: '',
  company: '',
  email: '',
});

const isSubmitted = ref(false);

const handleFieldValidation = field => {
  validateSingleField(field);
};

const handleSubmit = () => {
  //validation
  if (validateForm()) {
    //add backend logic here

    isSubmitted.value = true;
  } else {
    //error handling here
  }
};
</script>

<style lang="scss">
@import '../../../scss/pages/_demo-booking.scss';
</style>
