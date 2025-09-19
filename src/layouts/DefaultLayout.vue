<template>
  <div class="default-layout">
    <SiteHeader />
    <main class="main-content">
      <Content />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteHeader from '../components/SiteHeader.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>