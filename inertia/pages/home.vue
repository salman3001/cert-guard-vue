<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import WebLayout from '~/components/layouts/web-layout.vue'
import Faqs from '~/components/views/home/Faqs.vue'
import Contactus from '~/components/views/home/contactus.vue'
import Features from '~/components/views/home/features.vue'
import HeroSection from '~/components/views/home/hero-section.vue'
import Reviews from '~/components/views/home/reviews.vue'

defineOptions({
  layout: WebLayout,
})
</script>

<template>
  <Head>
    <title>Home</title>
  </Head>
  <HeroSection />
  <Features />
  <Reviews />
  <br />
  <Faqs />
  <Contactus />
</template>
