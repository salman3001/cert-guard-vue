<script setup lang="ts">
import Faqs from '~/components/views/home/Faqs.vue'
import WebLayout from '~/components/layouts/web-layout.vue'
import { Head } from '@inertiajs/vue3'

defineOptions({
  layout: WebLayout,
})
</script>

<template>
  <Head>
    <title>Faq</title>
  </Head>
  <Faqs />
</template>
