<script setup lang="ts">
import { Head, Link, useForm, usePage } from '@inertiajs/vue3'
import WebLayout from '~/components/layouts/web-layout.vue'
import Logo from '~/components/logo.vue'
import { routes } from '~/utils/route'
import { IpageProps } from '~/utils/types/i_page_props'

defineOptions({
  layout: WebLayout,
})

const page = usePage<IpageProps>()

const form = useForm({
  email: '',
  password: '',
})
</script>

<template>
  <Head>
    <title>Signin</title>
  </Head>
  <v-form method="post" class="d-flex justify-center">
    <v-row class="d-flex" style="max-width: 400px">
      <v-col cols="12" class="d-flex flex-column align-center justify-center">
        <Logo />
        <p>Welcome back !</p>
        <div v-if="page.props.summary">
          <span class="text-error" v-for="error in page.props.summary">{{ error }}</span>
        </div>
      </v-col>
      <v-col cols="12">
        <v-label class="mb-1">Email</v-label>
        <v-text-field
          density="compact"
          :errors="form.errors.email"
          v-model="form.email"
          :error-messages="form.errors.email"
          name="email"
          type="email"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-label class="mb-1">Password</v-label>
        <v-text-field
          density="compact"
          :errors="form.errors.password"
          v-model="form.password"
          name="password"
          type="password"
          :error-messages="form.errors.password"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="pt-0">
        <div class="d-flex flex-wrap align-center">
          <div class="ml-sm-auto">
            <Link
              :href="routes.auth.forget_password()"
              class="text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"
              >Forgot Password ?
            </Link>
          </div>
        </div>
      </v-col>
      <v-col cols="12" class="pt-0">
        <v-btn
          color="primary"
          block
          flat
          type="submit"
          @click.prevent="form.submit('post', routes.auth.sigin_post())"
          >Sign in</v-btn
        >
      </v-col>
      <v-col cols="12" class="pt-0">
        <Link :href="routes.auth.signup()">
          <v-btn color="primary" variant="text" block flat>Sign up</v-btn>
        </Link>
      </v-col>
    </v-row>
  </v-form>
</template>
