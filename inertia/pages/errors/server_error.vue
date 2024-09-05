<script setup lang="ts">
import WebLayout from '~/components/layouts/web-layout.vue'

defineProps<{ error: any }>()

defineOptions({
  layout: WebLayout,
})
</script>

<template>
  <div class="container">
    <div class="title">Server Error</div>

    <span>{{ error.message }}</span>
  </div>
</template>
