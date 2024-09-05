<script setup lang="ts">
import { Link } from '@inertiajs/vue3'
import { mdiAccount, mdiFileSearch, mdiLogout, mdiPlusBox } from '@mdi/js'
import { routes } from '~/utils/route'
</script>

<template>
  <v-menu location="bottom" dense>
    <template v-slot:activator="{ props }">
      <v-btn color="primary" size="medium" v-bind="props" :icon="mdiAccount"> </v-btn>
    </template>

    <v-list>
      <Link :href="routes.profile.me.view()">
        <v-list-item :prepend-icon="mdiAccount" title="Profile"> </v-list-item>
      </Link>
      <Link :href="routes.web.registerCertificate()">
        <v-list-item :prepend-icon="mdiPlusBox" title="Add Certificates"> </v-list-item>
      </Link>
      <Link :href="routes.web.myCertificate()">
        <v-list-item :prepend-icon="mdiFileSearch" title="My Certificates"> </v-list-item>
      </Link>
      <Link :href="routes.auth.sigout()">
        <v-list-item :prepend-icon="mdiLogout" title="Sign out"> </v-list-item>
      </Link>
    </v-list>
  </v-menu>
</template>
