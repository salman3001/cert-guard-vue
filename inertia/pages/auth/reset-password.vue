<script setup lang="ts">
import { Head, useForm, usePage } from '@inertiajs/vue3'
import WebLayout from '~/components/layouts/web-layout.vue'
import Logo from '~/components/logo.vue'

defineOptions({
  layout: WebLayout,
})

const page = usePage()

const form = useForm({
  password: '',
  password_confirmation: '',
})
</script>
<template>
  <Head>
    <title>Reset password</title>
  </Head>
  <v-form method="post" class="d-flex justify-center">
    <v-row class="d-flex" style="max-width: 400px">
      <v-col cols="12" class="d-flex flex-column align-center justify-center">
        <Logo />
        <p class="pt-1">Please choose a new password</p>
        <div v-if="page.props.summary">
          <span class="text-error" v-for="error in page.props.summary">{{ error }}</span>
        </div>
      </v-col>
      <v-col cols="12">
        <v-label class="mb-1">Password</v-label>
        <v-text-field
          v-model="form.password"
          :errors="form.errors.password"
          :error-messages="form.errors.password"
          name="password"
          type="password"
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-label class="mb-1">Confirm Password</v-label>
        <v-text-field
          v-model="form.password_confirmation"
          :errors="form.errors.password_confirmation"
          :error-messages="form.errors.password_confirmation"
          name="password_confirmation"
          type="password"
        ></v-text-field>
      </v-col>

      <v-col cols="12" class="pt-0">
        <v-btn
          color="primary"
          block
          flat
          type="submit"
          @click.prevent="() => form.submit('post', page?.url)"
          >Reset Password</v-btn
        >
      </v-col>
    </v-row>
  </v-form>
</template>
