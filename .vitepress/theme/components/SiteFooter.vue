<template>
  <footer class="footer">
    <!-- Desktop Layout -->
    <div class="footer-container d-md-flex flex-column">
      <div
        class="footer-hero d-flex justify-content-center flex-column align-items-center"
      >
        <img
          src="../assets/images/footer-slogan.png"
          class="footer-slogan"
          alt="slogan"
        />
        <div class="footer-cta"></div>
      </div>
      <div
        class="footer-navigation text-white bg-black d-flex justify-content-center"
      >
        <div
          class="footer-content d-flex align-items-center w-100 flex-md-row flex-column"
        >
          <!-- <div class="d-flex align-items-center gap-4 "> -->
          <img
            src="../assets/images/logo-footer.png"
            alt="fullkeep"
            class="footer-logo"
          />
          <div
            class="d-flex footer-links flex-column flex-md-row justify-content-center align-items-center"
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
    </div>
  </footer>
</template>

<script setup>
// Site footer component logic
</script>

<style lang="scss">
@import '../../../scss/components/_footer';
</style>
