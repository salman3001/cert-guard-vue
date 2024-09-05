<script setup lang="ts">
import { usePage } from '@inertiajs/vue3'
import { ref, watch } from 'vue'
import type { IpageProps } from '~/utils/types/i_page_props'

const page = usePage<IpageProps>()

const isOpen = ref(false)

watch(
  () => page?.props?.message,
  () => {
    if (page?.props?.message) {
      isOpen.value = true
    }
  },
  {
    immediate: true,
  }
)
</script>

<template>
  <v-snackbar v-model="isOpen" multi-line :color="page.props?.message?.type" :timeout="5000">
    {{ page.props?.message?.message }}

    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="isOpen = false"> Close </v-btn>
    </template>
  </v-snackbar>
</template>
