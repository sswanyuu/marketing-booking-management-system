<template>
  <footer class="footer">
    <!-- Desktop Layout -->
    <div class="d-md-flex flex-column align-items-center">
      <!-- banner -->
      <section
        class="top-image d-flex align-items-center justify-content-center"
      >
        <img
          src="../assets/images/layout/footer/slogan.png"
          alt="hero"
          class="background-image__desktop d-none d-md-block mb-md-5"
        />
        <img
          src="../assets/images/layout/footer/slogan-mobile.png"
          alt="hero"
          class="background-image__mobile d-flex d-md-none mb-4"
        />
      </section>
      <section class="w-100 d-flex justify-content-center">
        <div
          class="banner d-flex align-items-start align-items-md-center justify-content-center justify-content-md-start bg-primary rounded-4 border border-white"
        >
          <img
            src="../assets/images/layout/footer/bg.png"
            alt="footer-background"
            class="background-image__desktop d-none d-md-block rounded-4"
          />
          <img
            src="../assets/images/layout/footer/bg-mobile.png"
            alt="footer-background"
            class="background-image__mobile d-block d-md-none rounded-4"
          />
          <div
            class="banner__content d-flex flex-column w-md-50 w-100 gap-9 justify-content-center"
          >
            <div class="d-flex flex-column gap-2 gap-md-4">
              <div
                class="md-headline-footer-en-bold headline-3-bold text-white"
              >
                Fullkeep the Seats. Fulfill the Brand.
              </div>
              <div
                class="md-headline-2-bold headline-4-bold text-white position-relative align-self-start"
              >
                高朋滿座，富譽盈門
                <img
                  src="../assets/images/layout/footer/slogan-decoration.png"
                  alt="slogan-decoration"
                  class="footer__slogan-decoration position-absolute"
                />
              </div>
            </div>
            <Button variant="secondary" class="align-self-start">
              預約 Demo
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
          alt="fullkeep"
          class="logo"
        />
        <div
          class="d-flex navigation__links flex-column flex-md-row justify-content-center align-items-center gap-5"
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
