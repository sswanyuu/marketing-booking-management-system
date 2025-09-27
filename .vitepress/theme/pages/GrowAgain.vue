<template>
  <div class="grow-again d-flex flex-column align-items-center">
    <!-- hero -->
    <section
      class="hero d-flex align-items-start align-items-md-center justify-content-center justify-content-md-start"
    >
      <img
        src="../assets/images/pages/grow-again/hero-bg.png"
        alt="hero"
        class="background-image__desktop d-none d-md-block"
      />
      <img
        src="../assets/images/pages/grow-again/hero-bg-mobile.png"
        alt="hero"
        class="background-image__mobile d-block d-md-none"
      />
      <div
        class="hero__content flex-column w-100 gap-md-8 gap-7 justify-content-center text-white d-flex"
      >
        <div
          class="d-flex flex-column gap-2 align-items-center align-items-md-start"
        >
          <div class="md-headline-2-bold headline-3-bold">Grow Again</div>
          <div class="md-headline-2-bold headline-3-bold">行銷與再接觸</div>
        </div>
        <Button variant="primary" class="align-self-start d-none d-md-block">
          預約 Demo
        </Button>
        <Button variant="mobileFull" class="d-block d-md-none">
          預約 Demo
        </Button>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
@import '../../../scss/pages/_grow-again.scss';
</style>
