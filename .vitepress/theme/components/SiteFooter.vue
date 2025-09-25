<template>
  <footer class="footer">
    <!-- Desktop Layout -->
    <div class="footer__container d-md-flex flex-column align-items-center">
      <!-- banner -->
      <div class="footer__banner-container bg-white">
        <img
          src="../assets/images/footer-slogan.png"
          alt="hero"
          class="background-image__desktop d-none d-md-block rounded-4 mb-4 mb-md-5"
        />
      </div>

      <section
        class="footer__banner d-flex align-items-start align-items-md-center justify-content-center justify-content-md-start bg-primary rounded-4"
      >
        <img
          src="../assets/images/layout/footer/bg.png"
          alt="hero"
          class="background-image__desktop d-none d-md-block rounded-4"
        />
        <img
          src="../assets/images/layout/footer/bg-mobile.png"
          alt="hero"
          class="background-image__mobile d-block d-md-none rounded-4"
        />
        <div
          class="hero__content d-md-flex d-none flex-column w-50 gap-9 justify-content-center"
        >
          <img
            src="../assets/images/layout/footer/bg-slogan.png"
            alt="hero"
            class="d-none d-md-block hero__slogan"
          />
          <Button variant="secondary" class="align-self-start">
            預約 Demo
          </Button>
        </div>
        <div
          class="hero__content d-flex d-md-none flex-column w-50 gap-9 justify-content-center"
        >
          <img
            src="../assets/images/layout/footer/bg-slogan-mobile.png"
            alt="hero"
            class="d-block d-md-none hero__slogan-mobile"
          />
          <Button variant="mobileFull">預約 Demo</Button>
        </div>
      </section>
    </div>

    <div
      class="footer__navigation text-white bg-black d-flex justify-content-center w-100"
    >
      <div
        class="footer__content d-flex align-items-center w-100 flex-md-row flex-column gap-5 gap-xl-7"
      >
        <!-- <div class="d-flex align-items-center gap-4 "> -->
        <img
          src="../assets/images/logo-footer.png"
          alt="fullkeep"
          class="logo"
        />
        <div
          class="d-flex footer__links flex-column flex-md-row justify-content-center align-items-center"
        >
          <a
            href="#why-fullkeep"
            class="text-white text-decoration-none headline-7-bold"
          >
            WHY FULLKEEP
          </a>
          <a
            href="#who-we-serve"
            class="text-white text-decoration-none headline-7-bold"
          >
            WHO WE SERVE
          </a>
          <a
            href="#integration"
            class="text-white text-decoration-none headline-7-bold"
          >
            INTEGRATION
          </a>
        </div>
        <div
          class="body-1 justify-content-end flex-grow-1 text-center md-body-3 text-md-end px-5 px-md-0"
        >
          Copyright © Fullkeep All Rights Reserved 隱私權條款
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Button from './Button.vue';
</script>

<style lang="scss">
@import '../../../scss/components/_footer';
</style>
