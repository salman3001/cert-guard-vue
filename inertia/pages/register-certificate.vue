<script setup lang="ts">
import { Head, useForm, usePage } from '@inertiajs/vue3'
import { ref } from 'vue'
import RichEditor from '~/components/form/rich-editor.vue'
import WebLayout from '~/components/layouts/web-layout.vue'
import ConfirmModal from '~/components/modals/ConfirmModal.vue'
import { routes } from '~/utils/route'
import { IpageProps } from '~/utils/types/i_page_props'

defineOptions({
  layout: WebLayout,
})
const page = usePage<IpageProps>()
const confirmModal = ref(false)

const form = useForm({
  title: '',
  issuedTo: '',
  detail: '',
})
</script>

<template>
  <Head>
    <title>Certificate Registration</title>
  </Head>
  <v-form method="post" class="d-flex justify-center mt-5">
    <v-row class="d-flex" style="max-width: 600px">
      <v-col cols="12" class="d-flex flex-column align-center justify-center">
        <Logo />
        <h1 class="text-h5">Register a certificate!</h1>
        <p class="text-medium-emphasis text-center">
          Hello
          <span class="text-primary font-weight-bold"
            >Mr/Ms. {{ page.props?.user?.fullName }}!</span
          >
          Please enter certificate details to register
        </p>
        <div v-if="page.props.summary">
          <span class="text-error" v-for="error in page.props.summary">{{ error }}</span>
        </div>
      </v-col>
      <v-col cols="12">
        <v-label class="mb-1">Certificate Title</v-label>
        <v-text-field
          v-model="form.title"
          :errors="form.errors.title"
          :error-messages="form.errors.title"
          placeholder="Enter a certificate title"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-label class="mb-1">Issueing to (Person name)</v-label>
        <v-text-field
          v-model="form.issuedTo"
          :errors="form.errors.issuedTo"
          :error-messages="form.errors.issuedTo"
          placeholder="Name of the person"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-label class="mb-1">Detail</v-label>
        <RichEditor v-model="form.detail" />
      </v-col>
      <v-col cols="12" class="pt-1">
        <v-btn color="primary" block flat @click.prevent="() => (confirmModal = true)"
          >Register</v-btn
        >
      </v-col>
    </v-row>
  </v-form>
  <ConfirmModal
    title="Confirm Registration"
    message="Please verify details correctly! Certificate once registered can not be changed"
    v-model:is-visible="confirmModal"
    @confirmed="form.submit('post', routes.web.registerCertificate_post())"
  />
</template>
