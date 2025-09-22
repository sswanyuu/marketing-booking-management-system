<template>
  <footer class="site-footer bg-black text-white">
    <!-- Desktop Layout -->
    <div
      class="d-flex justify-content-between align-items-center d-none d-md-flex desktop-container"
    >
      <div class="d-flex align-items-center gap-4">
        <img
          src="../assets/images/logo-footer.png"
          alt="fullkeep"
          class="footer-logo"
        />
        <a href="#why-fullkeep" class="text-white text-decoration-none">
          WHY FULLKEEP
        </a>
        <a href="#who-we-serve" class="text-white text-decoration-none">
          WHO WE SERVE
        </a>
        <a href="#integration" class="text-white text-decoration-none">
          INTEGRATION
        </a>
      </div>
      <div class="text-end">
        <div class="body-1">
          Copyright © Fullkeep All Rights Reserved 隱私權條款
        </div>
      </div>
    </div>

    <!-- Mobile Layout -->
    <div class="d-flex flex-column align-items-center text-center d-md-none">
      <img
        src="../assets/images/logo-footer.png"
        alt="fullkeep"
        class="footer-logo-mobile mb-4"
      />
      <nav class="d-flex flex-column gap-3 mb-4">
        <a href="#why-fullkeep" class="footer-link">WHY FULLKEEP</a>
        <a href="#who-we-serve" class="footer-link">WHO WE SERVE</a>
        <a href="#integration" class="footer-link">INTEGRATION</a>
      </nav>
      <div class="footer-copyright-mobile">
        <div>Copyright © Fullkeep All Rights</div>
        <div>Reserved 隱私權條款</div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Site footer component logic
</script>

<style lang="scss">
@import '../../scss/components/_footer';
</style>
