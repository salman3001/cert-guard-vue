<script setup lang="ts">
import { mdiMail, mdiPhone } from '@mdi/js'
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')

const submit = () => {
  alert(
    'Feature not implemented! Please visit "https://salman3001.github.io/portfolio-v2" or Email at "salman.k3001@gmail.com"'
  )
}
</script>

<template>
  <VContainer id="contact-us">
    <!-- 👉 Headers  -->
    <div class="contact-us-section">
      <div class="headers d-flex justify-center flex-column align-center pb-16">
        <VChip label color="primary" class="mb-4" size="small"> Contact Us </VChip>
        <h4 class="d-flex align-center text-h4 mb-1 flex-wrap justify-center">
          <div class="position-relative me-2">
            <div class="section-title">let's work</div>
          </div>
          together
        </h4>
        <p class="text-body-1 mb-0">Any question or remark? just write us a message</p>
      </div>

      <div class="mb-15">
        <VRow class="match-height">
          <VCol cols="12" md="5">
            <div class="contact-card h-100">
              <VCard
                variant="outlined"
                border
                class="pa-2"
                :style="{ borderRadius: '3.75rem 0.375rem 0.375rem 0.375rem' }"
              >
                <VImg
                  src="/images/contact-customer-service.png"
                  :style="{ borderRadius: '3.75rem 0.375rem 0.375rem 0.375rem' }"
                />
                <VCardText class="pa-4 pb-1">
                  <div class="d-flex justify-space-between flex-wrap gap-y-4">
                    <div
                      v-for="(item, index) in [
                        {
                          title: 'Email',
                          icon: mdiMail,
                          color: 'primary',
                          value: 'salman.k3001@gmail.com',
                        },
                        {
                          title: 'Phone',
                          icon: mdiPhone,
                          color: 'success',
                          value: '+971529551244',
                        },
                      ]"
                      :key="index"
                      class="d-flex gap-x-3 align-center"
                    >
                      <div>
                        <VAvatar size="36" :color="item.color" variant="tonal" class="rounded-sm">
                          <VIcon :icon="item.icon" size="24" />
                        </VAvatar>
                      </div>

                      <div>
                        <d class="text-body-1">
                          {{ item.title }}
                        </d>
                        <h6 class="text-h6">
                          {{ item.value }}
                        </h6>
                      </div>
                    </div>
                  </div>
                </VCardText>
              </VCard>
            </div>
          </VCol>

          <VCol cols="12" md="7">
            <VCard>
              <VCardItem class="pb-0">
                <h4 class="text-h4 mb-1">Send a message</h4>
              </VCardItem>

              <VCardText>
                <p class="mb-6">
                  If you would like to discuss anything related to payment, account, licensing,
                  partnerships, or have pre-sales questions, you’re at the right place.
                </p>
                <VForm @submit.prevent="() => {}">
                  <VRow>
                    <VCol cols="12" md="6">
                      <v-text-field v-model="name" placeholder="John Doe" label="Full Name" />
                    </VCol>

                    <VCol cols="12" md="6">
                      <v-text-field
                        v-model="email"
                        placeholder="johndoe@gmail.com"
                        label="Email address"
                      />
                    </VCol>

                    <VCol cols="12">
                      <v-textarea
                        v-model="message"
                        placeholder="Write a message"
                        rows="3"
                        label="Message"
                      />
                    </VCol>

                    <VCol>
                      <VBtn type="submit" @click.prevent="submit"> Send Inquiry </VBtn>
                    </VCol>
                  </VRow>
                </VForm>
              </VCardText>
            </VCard>
          </VCol>
        </VRow>
      </div>
    </div>
  </VContainer>
</template>

<style scoped>
.contact-us-section {
  margin-block: 2rem;
}

.section-title {
  font-size: 24px;
  font-weight: 800;
  line-height: 36px;
}

.section-title::after {
  position: absolute;
  background: url('../../../assets/images/front-pages/icons/section-title-icon.png') no-repeat left
    bottom;
  background-size: contain;
  block-size: 100%;
  content: '';
  font-weight: 800;
  inline-size: 120%;
  inset-block-end: 12%;
  inset-inline-start: -12%;
}

.contact-card {
  position: relative;
}

.contact-card::before {
  position: absolute;
  content: url('@images/front-pages/icons/contact-border.png');
  inset-block-start: -2.5rem;
  inset-inline-start: -2.5rem;
}

@media screen and (max-width: 999px) {
  .contact-card::before {
    display: none;
  }
}
</style>
