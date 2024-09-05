<script setup lang="ts">
import QrcodeVue from 'qrcode.vue'
import { printPartById } from '~/utils/print_part_by_id'

defineProps<{
  value: string
  size?: number
}>()
</script>
<template>
  <div class="d-flex justify-center flex-column ga-2" style="max-width: min-content">
    <div id="qr">
      <qrcode-vue :value="value" :size="size ?? 300" level="H" :render-as="'svg'" />
    </div>
    <v-btn @click="() => printPartById('qr')" variant="tonal">print</v-btn>
  </div>
</template>
