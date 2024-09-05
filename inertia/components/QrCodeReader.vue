<script setup lang="ts">
import { mdiClose, mdiQrcode } from '@mdi/js'
import { ref } from 'vue'
import { QrcodeStream, QrcodeCapture } from 'vue-qrcode-reader'

const scan = ref(false)
const error = ref(false)

const startScanning = () => {
  scan.value = false
  scan.value = true
}
const stopScanning = () => {
  scan.value = false
  scan.value = false
}

const emits = defineEmits<{
  (e: 'on-detect', id: string): void
}>()

const onDetect = (detectedCodes: [{ rawValue: string }]) => {
  error.value = false
  scan.value = false

  if (detectedCodes?.length > 0) {
    if (detectedCodes[0]?.rawValue?.startsWith(window.location.origin)) {
      emits('on-detect', detectedCodes[0]?.rawValue || '')
    }
    error.value = true
  } else {
    error.value = true
  }
}

const onError = (err: any) => {
  console.log(err)

  scan.value = false
  error.value = true
}
</script>
<template>
  <v-container max-width="300">
    <div v-if="scan" style="max-width: 300px">
      <qrcode-stream @detect="onDetect" @error="(e: any) => onError(e)"></qrcode-stream>
    </div>
    <div class="d-flex justify-center">
      <v-btn v-if="!scan" @click="startScanning">
        <template #append> <v-icon :icon="mdiQrcode"></v-icon> </template>Scan QR</v-btn
      >
      <v-btn v-if="scan" @click="stopScanning" color="error">
        <template #append>
          <v-icon :icon="mdiClose"></v-icon>
        </template>
        Stop Scan</v-btn
      >
    </div>
    <br />
    <v-card elevation="0" outline class="d-flex justify-center flex-column border rounded pa-2">
      <div class="text-start shadow">Upload QR code</div>
      <qrcode-capture
        @detect="onDetect"
        @error="(e: any) => onError(e)"
        name="sdks"
        placeholder="nssjk"
      >
      </qrcode-capture>
    </v-card>
    <div class="text-error" v-if="error">
      Scan error or Video source Error or nothing detected!.
    </div>
  </v-container>
  <!-- <qrcode-drop-zone size="200"></qrcode-drop-zone> -->
</template>
