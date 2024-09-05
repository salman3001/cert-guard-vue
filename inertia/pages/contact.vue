<script setup lang="ts">
import Contactus from '~/components/views/home/contactus.vue'
import WebLayout from '~/components/layouts/web-layout.vue'
import { Head } from '@inertiajs/vue3'

defineOptions({
  layout: WebLayout,
})
</script>

<template>
  <Head>
    <title>Contact</title>
  </Head>
  <Contactus />
</template>
