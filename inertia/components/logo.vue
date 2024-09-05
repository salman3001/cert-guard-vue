<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import { routes } from '~/utils/route'
import { mdiShieldLock } from '@mdi/js'

defineProps<{
  size?: string
  noHide?: boolean
}>()
</script>
<template>
  <Link :href="routes.web.home()" class="font-weight-bold text-decoration-none text-primary">
    <span><v-icon :icon="mdiShieldLock" :size="size ?? '22px'" class="my-0"></v-icon> </span>
    <span :class="noHide ? '' : 'd-none d-sm-inline'" :style="{ fontSize: size ?? '22px' }"
      >CertGuard</span
    >
  </Link>
</template>
