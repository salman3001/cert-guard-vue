<script setup lang="ts">
import type Certificate from '#models/certificate'
import { Head } from '@inertiajs/vue3'
import WebLayout from '~/components/layouts/web-layout.vue'

defineOptions({
  layout: WebLayout,
})

defineProps<{
  certificate: Certificate
}>()
</script>

<template>
  <Head>
    <title>Verify Certificate</title>
  </Head>
  <div class="text-medium-emphasis">
    <h3>Certificate Detail</h3>
    <br />
    <h4>Title</h4>
    <p>{{ certificate.title }}</p>
    <br />
    <h4>Issue to</h4>
    <p>{{ certificate.issuedTo }}</p>
    <br />
    <h4>Issues by (Company/Institue Name)</h4>
    <p>{{ certificate?.organization?.name }}</p>
    <br />
    <h4>Detail</h4>
    <p v-html="certificate.detail" class="pl-6 pt-3"></p>
  </div>
</template>
