<script setup lang="ts">
import { Link, useForm, usePage } from '@inertiajs/vue3'
import WebLayout from '~/components/layouts/web-layout.vue'
import Logo from '~/components/logo.vue'
import { routes } from '~/utils/route'
import { IpageProps } from '~/utils/types/i_page_props'

defineOptions({
  layout: WebLayout,
})

const page = usePage<IpageProps>()

const form = useForm({
  fullName: '',
  email: '',
  password: '',
  phone: '',
  companyName: '',
})
</script>

<template>
  <v-form method="post" class="d-flex justify-center">
    <v-row class="d-flex" style="max-width: 400px">
      <v-col cols="12" class="d-flex flex-column align-center justify-center">
        <Logo />
        <p>Signup with CertGuard !</p>
        <div v-if="page.props.summary">
          <span class="text-error" v-for="error in page.props.summary">{{ error }}</span>
        </div>
      </v-col>
      <v-col cols="12" sm="6">
        <v-label class="mb-1">Full Name</v-label>
        <v-text-field
          v-model="form.fullName"
          :errors="form.errors.fullName"
          :error-messages="form.errors.fullName"
          name="fullName"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-label class="mb-1">Email</v-label>
        <v-text-field
          v-model="form.email"
          :errors="form.errors.email"
          :error-messages="form.errors.email"
          name="email"
          type="email"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-label class="mb-1">Password</v-label>
        <v-text-field
          v-model="form.password"
          :errors="form.errors.password"
          :error-messages="form.errors.password"
          name="password"
          type="password"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-label class="mb-1">Phone</v-label>
        <v-text-field
          v-model="form.phone"
          :errors="form.errors.phone"
          :error-messages="form.errors.phone"
          name="phone"
          type="number"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-label class="mb-1">Company Name</v-label>
        <v-text-field
          v-model="form.companyName"
          :errors="form.errors.companyName"
          :error-messages="form.errors.companyName"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="mt-3">
        <v-btn
          color="primary"
          block
          flat
          type="submit"
          @click.prevent="() => form.submit('post', routes.auth.signup_post())"
          >Sign up</v-btn
        >
      </v-col>
      <v-col cols="12" class="pt-1">
        <Link :href="routes.auth.sigin()">
          <v-btn color="primary" variant="text" block flat>Sign in</v-btn>
        </Link>
      </v-col>
    </v-row>
  </v-form>
</template>
