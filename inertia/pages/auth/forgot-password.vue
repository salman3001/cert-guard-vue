<script setup lang="ts">
import { Head, useForm, usePage } from '@inertiajs/vue3'
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
})
</script>

<template>
  <Head>
    <title>Forgot password</title>
  </Head>
  <v-form method="post" class="d-flex justify-center">
    <v-row class="d-flex" style="max-width: 400px">
      <v-col cols="12" class="d-flex flex-column align-center justify-center">
        <Logo />
        <p class="pt-1">Forgot Password? Please enter your email</p>
        <div v-if="page.props.summary">
          <span class="text-error" v-for="error in page.props.summary">{{ error }}</span>
        </div>
      </v-col>
      <v-col cols="">
        <v-label class="mb-1">Email</v-label>
        <v-text-field
          name="email"
          type="email"
          :errors="form.errors.email"
          v-model="form.email"
          :error-messages="form.errors.email"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="pt-0">
        <v-btn
          color="primary"
          block
          flat
          type="submit"
          @click.prevent="() => form.submit('post', routes.auth.forget_password_post())"
          >Get Rest Link</v-btn
        >
      </v-col>
    </v-row>
  </v-form>
</template>
