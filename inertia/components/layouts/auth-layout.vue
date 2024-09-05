<script setup lang="ts">
import snackbar from '~/components/snackbar.vue'
</script>

<template>
  <v-row class="d-flex justify-center align-center" style="height: 100vh">
    <v-col cols="12" lg="4" xl="3" class="d-flex align-center">
      <v-card density="compact" elevation="10" class="px-sm-1 px-0 mx-auto" max-width="400">
        <v-card-item class="pa-sm-4"> <slot /></v-card-item>
      </v-card>
    </v-col>
  </v-row>
  <snackbar />
</template>
