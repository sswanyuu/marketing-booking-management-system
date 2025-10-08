<template>
  <div class="default-layout">
    <SiteHeader />
    <main class="main-content">
      <Content />
    </main>
    <SiteFooter v-if="!isDemoBookingPage" />
    <SimpleFooter v-else />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vitepress';
import SiteHeader from '../components/SiteHeader.vue';
import SiteFooter from '../components/SiteFooter.vue';
import SimpleFooter from '../components/SimpleFooter.vue';

const route = useRoute();
const isDemoBookingPage = computed(() => {
  return route.path === '/demo-booking.html' || route.path === '/demo-booking';
});
</script>
