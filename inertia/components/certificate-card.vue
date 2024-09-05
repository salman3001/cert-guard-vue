<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import { VCard } from 'vuetify/components'
import type Certificate from '#models/certificate'
import { routes } from '~/utils/route'

defineProps<{
  certificate: Certificate
}>()

const emit = defineEmits<{
  (e: 'get-qr', id: string): void
}>()
</script>

<template>
  <VCard density="compact" class="ma-0" style="position: relative !important">
    <VCardItem>
      <VCardTitle>{{ certificate.title }}</VCardTitle>
    </VCardItem>

    <VCardText>
      <p class="line-clamp-3">
        {{ certificate?.issuedTo }}
      </p>
    </VCardText>
    <VCardActions class="align-center justify-end">
      <Link
        :href="routes.web.verifyCertificate(certificate.id)"
        class="text-primary text-decoration-underline"
      >
        <v-btn variant="tonal" size="small">View</v-btn>
      </Link>

      <v-btn variant="flat" size="small" @click="() => $emit('get-qr', certificate?.id)"
        >Get QR</v-btn
      >
    </VCardActions>
  </VCard>
</template>

<style scoped>
.v-btn {
  transform: none;
}

.fav-icon {
  position: absolute;
  top: 5px;
  right: 5px;
  opacity: 0.8;
}
</style>
