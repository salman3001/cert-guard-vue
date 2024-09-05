<script setup lang="ts">
import snackbar from '~/components/snackbar.vue'
import Logo from '../logo.vue'
import { ref, watch } from 'vue'
import { mdiMenu } from '@mdi/js'
import { useDisplay } from 'vuetify'
import UserMenu from './user-menu.vue'
import { IpageProps } from '~/utils/types/i_page_props'
import { Link, usePage } from '@inertiajs/vue3'
import { routes } from '~/utils/route'
import Footer from './footer.vue'

const sideBar = ref(false)
const display = useDisplay()

watch(display.smAndUp, (v) => {
  if (v === true && sideBar.value !== false) {
    sideBar.value = false
  }
})

const togelMenu = () => {
  if (display.smAndUp.value === false) {
    sideBar.value = !sideBar.value
  }
}

const page = usePage<IpageProps>()

const navLinks = [
  {
    title: 'Home',
    link: routes.web.home(),
  },
  {
    title: 'About',
    link: routes.web.about(),
  },
  {
    title: 'Faq',
    link: routes.web.faq(),
  },
  {
    title: 'Contact',
    link: routes.web.contact(),
  },
]
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Application bar">
      <template #title>
        <span class="menu-btn pr-1 d-sm-none" @click="togelMenu">
          <v-icon :icon="mdiMenu" />
        </span>
        <Logo />
      </template>
      <template #append>
        <div class="d-none d-sm-block">
          <Link v-for="link in navLinks" :href="link.link">
            <v-btn variant="text">{{ link.title }}</v-btn>
          </Link>
        </div>
        <div class="mr-5">
          <UserMenu v-if="page.props.user" />
          <Link v-else :href="routes.auth.sigin()">
            <v-btn variant="flat" size="small">Sign in</v-btn>
          </Link>
        </div>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-model="sideBar" mobile>
      <v-list>
        <Link class="text-primary" v-for="link in navLinks" :href="link.link">
          <v-list-item :title="link.title"> </v-list-item>
        </Link>
      </v-list>
    </v-navigation-drawer>

    <v-main style="min-height: 300px">
      <v-container>
        <slot />
      </v-container>
    </v-main>
    <Footer />
    <snackbar />
  </v-layout>
</template>
<style scoped>
.menu-btn:hover {
  cursor: pointer;
}
</style>
