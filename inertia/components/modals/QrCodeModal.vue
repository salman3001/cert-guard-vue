<script setup lang="ts">
import QrCodeGen from '../QrCodeGen.vue'

const isVisible = defineModel<boolean>('isVisible')

defineProps<{
  value: string
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()
</script>

<template>
  <VDialog v-model="isVisible" max-width="500">
    <VCard class="text-center py-6">
      <VCardText>
        <p class="font-weight-medium mb-4">You can print this QR code on the actual certificate</p>
      </VCardText>

      <VCardText class="d-flex justify-center">
        <QrCodeGen :value="value" :size="200" />
      </VCardText>

      <VCardText class="d-flex align-center justify-center ga-2">
        <VBtn
          color="secondary"
          variant="flat"
          @click="
            () => {
              $emit('close')
              isVisible = false
            }
          "
        >
          close
        </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
