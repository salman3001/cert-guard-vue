<script setup lang="ts">
import { mdiContacts, mdiEmail, mdiGithub, mdiLinkedin } from '@mdi/js'
</script>
<template>
  <v-footer name="footer" app class="d-flex border">
    <v-btn class="mx-auto" variant="text">
      copyrights @{{ new Date().getFullYear() + ' ' }}

      <a href="https://www.linkedin.com/in/salman-k-b922a2144/" target="_blank"> Made by Salman </a>
    </v-btn>
    <div class="text-primary">
      <a href="https://github.com/salman3001/" target="_blank">
        <v-icon :icon="mdiGithub" />
      </a>
      <a href="https://www.linkedin.com/in/salman-k-b922a2144/" target="_blank">
        <v-icon :icon="mdiLinkedin" />
      </a>
      <a href="mailto:salman.k3001@gmail.com" target="_blank">
        <v-icon :icon="mdiEmail" />
      </a>
      <a href="https://salman3001.github.io/portfolio-v2" target="_blank">
        <v-icon :icon="mdiContacts" />
      </a>
    </div>
  </v-footer>
</template>
