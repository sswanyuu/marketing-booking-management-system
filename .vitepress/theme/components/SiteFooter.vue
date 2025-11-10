<template>
  <footer class="footer">
    <!-- Desktop Layout -->
    <div class="d-md-flex flex-column align-items-center">
      <!-- banner -->
      <section
        class="top-image d-flex align-items-center justify-content-center"
      >
        <div class="d-flex align-items-center justify-content-center">
          <span class="md-headline-2-bold headline-4-bold">Leave it to</span>
          <img
            src="../assets/images/layout/footer/slogan.png"
            alt="hero"
            class="top-image__bg--desktop d-none d-md-block mx-3"
          />
          <img
            src="../assets/images/layout/footer/slogan-mobile.png"
            alt="hero"
            class="top-image__bg--mobile d-flex d-md-none mx-1"
          />

          <span class="md-headline-2-bold headline-4-bold">!</span>
        </div>
      </section>
      <section class="w-100 d-flex justify-content-center">
        <div
          class="banner d-flex align-items-start align-items-md-center justify-content-center justify-content-md-start bg-primary rounded-4 border border-white"
        >
          <img
            src="../assets/images/layout/footer/bg.png"
            alt="footer-background"
            class="banner__bg--desktop d-none d-md-block rounded-4"
          />
          <img
            src="../assets/images/layout/footer/bg-mobile.png"
            alt="footer-background"
            class="banner__bg--mobile d-block d-md-none rounded-4"
          />
          <div
            class="banner__content d-flex flex-column w-md-50 w-100 gap-9 justify-content-center"
          >
            <div class="d-flex flex-column gap-2 gap-md-4">
              <div
                class="md-headline-2-bold headline-4-bold text-white position-relative align-self-start"
              >
                Full House, Full Reputation
                <img
                  src="../assets/images/layout/footer/slogan-decoration.png"
                  alt="slogan-decoration"
                  class="footer__slogan-decoration position-absolute"
                />
              </div>
            </div>
            <Button
              variant="secondary"
              class="align-self-start"
              @click="handleDemoBooking"
            >
              Book Demo
            </Button>
          </div>
        </div>
      </section>
    </div>

    <div
      class="navigation text-white bg-black d-flex justify-content-center w-100"
    >
      <div
        class="navigation__content d-flex align-items-center w-100 flex-md-row flex-column gap-5 gap-xl-7"
      >
        <img
          src="../assets/images/layout/footer/logo.png"
          alt="kangabook"
          class="footer__logo"
        />
        <div
          class="d-flex navigation__links flex-column flex-md-row justify-content-center align-items-center gap-5"
        >
          <a
            class="text-white text-decoration-none headline-2-medium md-headline-1-medium"
            @click="navigateTo(ROUTES.HOME)"
          >
            WHY KANGABOOK
          </a>
          <a
            class="text-white text-decoration-none headline-2-medium md-headline-1-medium"
            @click="navigateTo(ROUTES.INDUSTRY_FIT)"
          >
            WHO WE SERVE
          </a>
          <a
            class="text-white text-decoration-none headline-2-medium md-headline-1-medium"
            @click="navigateTo(ROUTES.ALL_CONNECTED)"
          >
            INTEGRATION
          </a>
        </div>
        <div
          class="body-1 justify-content-end flex-grow-1 text-center md-body-3 text-md-end px-5 px-md-0"
        >
          Copyright © Kangabook All Rights Reserved Privacy Policy
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Button from './Button.vue';
import { useNavigation } from '../composables/useNavigation.js';

const { navigateTo, handleDemoBooking, ROUTES } = useNavigation();
</script>
