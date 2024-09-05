<script setup lang="ts">
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const model = defineModel({ required: true, default: '', type: String })
</script>
<template>
  <div class="mb-3">
    <QuillEditor
      theme="snow"
      v-model:content="model"
      content-type="html"
      style="min-height: 200px"
      toolbar="basic"
    />
  </div>
</template>
