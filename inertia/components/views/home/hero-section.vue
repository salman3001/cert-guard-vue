<script setup lang="ts">
import { Link, router } from '@inertiajs/vue3'
import { mdiCheckCircleOutline, mdiRegisteredTrademark } from '@mdi/js'
import { ref } from 'vue'
import QrCodeReader from '~/components/QrCodeReader.vue'
import Logo from '~/components/logo.vue'
import { routes } from '~/utils/route'

const certId = ref('')

const viewCertificate = () => {
  if (certId.value) {
    router.visit(routes.web.verifyCertificate(certId.value))
  }
}

const visitQrLink = (url: string) => {
  router.visit(url)
}
router
</script>

<template>
  <div id="home">
    <div id="landingHero">
      <div class="landing-hero">
        <VContainer>
          <div class="hero-text-box text-center px-6">
            <h1 class="hero-title mb-4">
              <Logo size="42px" no-hide />
            </h1>
            <h6 class="mb-6 text-h6">
              Proof in Every Click, Trust in Every Certificate.Secure Verification for a Trusted
              World.
            </h6>
            <div class="position-relative d-flex flex-column ga-2">
              <v-text-field
                v-model="certId"
                placeholder="Enter a certificate id to verify"
                @keyup.enter="viewCertificate"
              >
                <template #append>
                  <VBtn
                    :size="$vuetify.display.smAndUp ? 'large' : 'default'"
                    :to="{ name: 'front-pages-landing-page', hash: `#pricing-plan` }"
                    :active="false"
                    variant="tonal"
                    @click="viewCertificate"
                  >
                    <template #prepend>
                      <v-icon :icon="mdiCheckCircleOutline" />
                    </template>
                    Verify
                  </VBtn>
                </template>
              </v-text-field>
              <v-divider>or</v-divider>
              <QrCodeReader @on-detect="(v) => visitQrLink(v)" />
              <br />
              <v-divider inset></v-divider>
              <br />

              <Link :href="routes.web.registerCertificate()">
                <VBtn
                  :size="$vuetify.display.smAndUp ? 'large' : 'default'"
                  :to="{ name: 'front-pages-landing-page', hash: `#pricing-plan` }"
                  :active="false"
                >
                  <template #prepend>
                    <v-icon :icon="mdiRegisteredTrademark" />
                  </template>
                  Register a Certificate
                </VBtn>
              </Link>
            </div>
          </div>
        </VContainer>
      </div>
    </div>
  </div>
</template>

<style scoped>
.landing-hero {
  border-radius: 0 0 50px 50px;
  padding-block: 2rem 2rem;
}

.hero-animation-img {
  inline-size: 90%;
  inset-block-start: -25rem;
  inset-inline-start: 4.425rem;
  margin-inline: auto;
}

section {
  display: block;
}

.landing-hero::before {
  position: absolute;
  background-repeat: no-repeat;
  inset-block: 0;
  opacity: 0.5;
}

.landing-hero-dark-bg {
  background-color: #25293c;
  background-image: url('@images/front-pages/backgrounds/hero-bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.landing-hero-light-bg {
  background:
    url('@images/front-pages/backgrounds/hero-bg.png') center no-repeat,
    linear-gradient(138.18deg, #eae8fd 0%, #fce5e6 94.44%);
  background-size: cover;
}

@media (min-width: 650px) {
  .hero-text-box {
    inline-size: 38rem;
    margin-block-end: 1rem;
    margin-inline: auto;
  }
}

@media (max-width: 599px) {
  .hero-title {
    font-size: 1.5rem !important;
    line-height: 2.375rem !important;
  }
}

.hero-title {
  animation: shine 2s ease-in-out infinite alternate;
  background: linear-gradient(135deg, #28c76f 0%, #5a4aff 47.92%, #ff3739 100%);
  -webkit-background-clip: text;
  background-clip: text;
  font-size: 42px;
  font-weight: 800;
  line-height: 48px;
  -webkit-text-fill-color: rgba(0, 0, 0, 0%);
}

@keyframes shine {
  0% {
    background-position: 0% 50%;
  }

  80% {
    background-position: 50% 90%;
  }

  100% {
    background-position: 91% 100%;
  }
}

.hero-dashboard-img {
  margin-block: 0;
  margin-inline: auto;
  transform-style: preserve-3d;
  transition: all 0.35s;

  img {
    inline-size: 100%;
  }
}

.hero-elements-img {
  position: absolute;
  inset-block: 0;
  inset-inline-start: 0;
}

.feature-cards {
  margin-block-start: 6.25rem;
}

.hero-btn-item {
  inset-block-start: 80%;
  inset-inline-start: 5%;
}
</style>
