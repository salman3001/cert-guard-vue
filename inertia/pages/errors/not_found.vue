<script setup lang="ts">
import WebLayout from '~/components/layouts/web-layout.vue'

defineOptions({
  layout: WebLayout,
})
</script>

<template>
  <div class="container text-error">
    <div class="title">Content not found</div>

    <span>This Content does not exist.</span>
  </div>
</template>
