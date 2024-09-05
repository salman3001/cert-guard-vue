<script setup lang="ts">
import type Certificate from '#models/certificate'
import { Head, router } from '@inertiajs/vue3'
import { reactive, ref, watch } from 'vue'
import CertificateCard from '~/components/certificate-card.vue'
import WebLayout from '~/components/layouts/web-layout.vue'
import QrCodeModal from '~/components/modals/QrCodeModal.vue'
import TablePagination from '~/components/table-pagination.vue'
import { routes } from '~/utils/route'
import { IPaginatedModel } from '~/utils/types/i_paginated_model'

defineOptions({
  layout: WebLayout,
})

defineProps<{
  certificates: IPaginatedModel<Certificate>
}>()

const qrCodeModal = ref(false)
const qrUrl = ref('')

const openQrCodeModal = (id: string) => {
  qrUrl.value = window.location.origin + routes.web.verifyCertificate(id)
  qrCodeModal.value = true
}

const closeQrCodeModal = () => {
  qrUrl.value = ''
  qrCodeModal.value = false
}

const query = reactive({
  page: 1,
  search: '',
})

watch(
  () => query.search,
  () => {
    router.reload({ data: { ...query, page: 1 } })
  }
)

watch(
  () => query.page,
  () => {
    router.reload({ data: query })
  }
)
</script>

<template>
  <Head>
    <title>Home</title>
  </Head>
  <div class="help-center-page">
    <div v-if="certificates">
      <VContainer>
        <div v-if="certificates.data" class="help-center-section bg-surface pa-8">
          <h4 class="text-h4 text-center mb-6">My Certificates</h4>
          <VRow>
            <VCol v-for="c in certificates.data" :key="c.id" cols="12" sm="6" md="4" lg="3">
              <CertificateCard
                :certificate="c"
                @get-qr="
                  (id) => {
                    openQrCodeModal(id)
                  }
                "
              />
            </VCol>
          </VRow>
        </div>
        <br />
        <div>
          <TablePagination
            :page="Number(query.page)"
            :items-per-page="Number(certificates?.meta?.perPage)"
            :total-items="Number(certificates?.meta?.total)"
            @update:page="
              (p) => {
                query.page = p
              }
            "
          />
        </div>
      </VContainer>
    </div>
  </div>
  <QrCodeModal v-model:is-visible="qrCodeModal" :value="qrUrl" @close="closeQrCodeModal" />
</template>
