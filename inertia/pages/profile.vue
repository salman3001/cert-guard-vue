<script setup lang="ts">
import type Organization from '#models/organization'
import type Profile from '#models/profile'
import type User from '#models/user'
import { Head, useForm } from '@inertiajs/vue3'
import AvatarInput from '~/components/form/AvatarInput.vue'
import RichEditor from '~/components/form/rich-editor.vue'
import WebLayout from '~/components/layouts/web-layout.vue'
import { getUploadUrl } from '~/utils/get_upload_url'
import { routes } from '~/utils/route'

defineOptions({
  layout: WebLayout,
})

const props = defineProps<{
  profile: Profile
  user: User
  organization: Organization
}>()

const profileForm = useForm({
  avatar: null as null | File,
})

const userUpdateForm = useForm({
  fullName: props.user?.fullName || '',
  phone: props.user?.phone || '',
})

const organizationUpdateForm = useForm({
  name: props.organization?.name || '',
  detail: props.organization?.detail || '',
})

const updatePasswordForm = useForm({
  password: '',
  password_confirmation: '',
})
</script>

<template>
  <Head>
    <title>Profile</title>
  </Head>

  <div class="form-container">
    <v-form method="post">
      <h3 class="text-disabled">Update Profile</h3>
      <br />
      <v-row class="d-flex" dense>
        <v-col cols="12">
          <v-label class="mb-1 text-medium-emphasize">Change Avatar</v-label>
          <div class="py-2">
            <AvatarInput
              name="avatar"
              :url="getUploadUrl(props?.profile?.avatar?.thumbnailUrl)"
              size="100"
              @image="(f) => (profileForm.avatar = f)"
            />
          </div>
        </v-col>
        <v-col cols="12" class="d-flex mt-3 justify-end">
          <v-btn
            color="primary"
            flat
            type="submit"
            @click.prevent="
              () =>
                profileForm.submit('post', routes.profile.me.update(), {
                  preserveScroll: true,
                  forceFormData: true,
                })
            "
            >Update Profile</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
    <br />
    <v-divider />
    <br />
    <v-form method="post">
      <h3 class="text-disabled">Update Details</h3>
      <br />
      <v-row class="d-flex" dense>
        <v-col cols="12">
          <v-label class="mb-1">Full Name</v-label>
          <v-text-field
            v-model="userUpdateForm.fullName"
            :errors="userUpdateForm.errors.fullName"
            :error-messages="userUpdateForm.errors.fullName"
            name="fullName"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-label class="mb-1">Phone</v-label>
          <v-text-field
            v-model="userUpdateForm.phone"
            :errors="userUpdateForm.errors.phone"
            :error-messages="userUpdateForm.errors.phone"
            name="phone"
            type="number"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="d-flex mt-3 justify-end">
          <v-btn
            color="primary"
            flat
            type="submit"
            @click.prevent="
              () =>
                userUpdateForm.submit('post', routes.profile.me.updateUserDetails(), {
                  preserveScroll: true,
                })
            "
            >Update Details</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
    <br />
    <v-divider />
    <br />

    <v-form method="post">
      <h3 class="text-disabled">Update organization</h3>
      <br />
      <v-row class="d-flex" dense>
        <v-col cols="12">
          <v-label class="mb-1">Name</v-label>
          <v-text-field
            v-model="organizationUpdateForm.name"
            :errors="organizationUpdateForm.errors.name"
            :error-messages="organizationUpdateForm.errors.name"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-label class="mb-1">Detail</v-label>
          <RichEditor v-model="organizationUpdateForm.detail" />
        </v-col>
        <v-col cols="12" class="d-flex mt-3 justify-end">
          <v-btn
            color="primary"
            flat
            type="submit"
            @click.prevent="
              () =>
                organizationUpdateForm.submit('post', routes.profile.me.updateOrganization(), {
                  preserveScroll: true,
                })
            "
            >Update Organization</v-btn
          >
        </v-col>
      </v-row>
    </v-form>

    <br />
    <v-divider />
    <br />
    <v-form method="post">
      <h3 class="text-disabled">Update Password</h3>
      <br />
      <v-row class="d-flex" dense>
        <v-col cols="12">
          <v-label class="mb-1">New Password</v-label>
          <v-text-field
            v-model="updatePasswordForm.password"
            :errors="updatePasswordForm.errors.password"
            :error-messages="updatePasswordForm.errors.password"
            name="password"
            type="password"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-label class="mb-1">Confirm Password</v-label>
          <v-text-field
            v-model="updatePasswordForm.password_confirmation"
            :errors="updatePasswordForm.errors.password_confirmation"
            :error-messages="updatePasswordForm.errors.password_confirmation"
            name="password"
            type="password"
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="d-flex mt-3 justify-end">
          <v-btn
            color="error"
            flat
            type="submit"
            @click.prevent="
              () =>
                updatePasswordForm.submit('post', routes.profile.me.updatePassword(), {
                  preserveScroll: true,
                  onSuccess: () => {
                    updatePasswordForm.reset()
                  },
                })
            "
            >Update Password</v-btn
          >
        </v-col>
        <v-col cols="12" class="pt-1">
          <Link :href="routes.auth.sigin()">
            <v-btn color="primary">Sign in</v-btn>
          </Link>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<style scoped>
.form-container {
}
</style>
