<script setup lang="ts">
import { mdiInformationSlabCircleOutline } from '@mdi/js'

const isVisible = defineModel<boolean>('isVisible')

defineProps<{
  title: string
  message?: string
}>()

const emit = defineEmits<{
  (e: 'confirmed'): void
  (e: 'cancled'): void
}>()
</script>

<template>
  <VDialog v-model="isVisible" max-width="500">
    <VCard class="text-center py-6">
      <VCardText>
        <v-icon :icon="mdiInformationSlabCircleOutline" size="84" color="info"></v-icon>

        <p class="font-weight-medium mb-4">
          {{ title }}
        </p>

        <p>{{ message }}</p>
      </VCardText>

      <VCardText class="d-flex align-center justify-center ga-2">
        <VBtn
          color="secondary"
          variant="tonal"
          @click="
            () => {
              $emit('cancled')
              isVisible = false
            }
          "
        >
          Cancel
        </VBtn>
        <VBtn variant="elevated" @click="$emit('confirmed')"> Confirm </VBtn>
      </VCardText>
    </VCard>
  </VDialog>
</template>
