<script setup lang="ts">
const featuresData = [
  {
    title: 'Verified',
    desc: 'Verified certificates that everyone will easily understand and fall in love with.',
    icon: '/svg/Check.svg',
  },
  {
    title: 'Authenticity',
    desc: 'Authentic always, including all type of certificates',
    icon: '/svg/rocket.svg',
  },
  {
    title: 'Instant Validation',
    desc: 'Start verifying or registering certificates quickly without having to worry anything.',
    icon: '/svg/paper-send.svg',
  },
  {
    title: 'Proof in Every Click',
    desc: 'Just scan QR code and see your certificate loaded within seconds.',
    icon: '/svg/Check.svg',
  },
  {
    title: 'Excellent Support',
    desc: 'Excell customer support, Instant help for any query',
    icon: '/svg/user.svg',
  },
  {
    title: 'Well Organized',
    desc: 'An easy-to-follow workflow with instant certificate verification and registering new certificates',
    icon: '/svg/keyboard.svg',
  },
]
</script>

<template>
  <VContainer id="features">
    <div class="feature-cards">
      <div class="headers d-flex justify-center flex-column align-center mb-12">
        <VChip label color="primary" class="mb-4" size="small"> Useful Features </VChip>
        <div class="d-flex text-h4 mb-1 align-center flex-wrap justify-center">
          <div class="position-relative me-2">
            <div class="section-title">Everything you need</div>
          </div>
          Ensuring Authenticity
        </div>
        <p class="text-body-1 mb-0">Certified and Verified, Every Time.</p>
      </div>
      <VRow>
        <VCol v-for="(data, index) in featuresData" :key="index" cols="12" md="4" sm="6">
          <div class="d-flex flex-column align-center justify-center gap-4 mx-auto">
            <img :src="data.icon" height="64" color="primary" />
            <div class="text-center">
              <h5 class="text-h5 mb-2">
                {{ data.title }}
              </h5>
              <p class="text-body-1 mb-6" style="max-inline-size: 310px">
                {{ data.desc }}
              </p>
            </div>
          </div>
        </VCol>
      </VRow>
    </div>
  </VContainer>
</template>

<style scoped>
.feature-cards {
  margin-block: 3.75rem;
}

.section-title::after {
  position: absolute;
  background: url('../../../assets/images/front-pages/icons/section-title-icon.png') no-repeat left
    bottom;
  background-size: contain;
  block-size: 100%;
  content: '';
  inline-size: 120%;
  inset-block-end: 0;
  inset-inline-start: -12%;
}

.section-title {
  font-size: 24px;
  font-weight: 800;
  line-height: 36px;
}

.feature {
  .v-avatar {
    &.v-avatar--variant-outlined {
      border: 2px solid rgba(var(--v-theme-primary), 0.32);

      &:hover {
        background: rgba(var(--v-theme-primary), 0.16);
        cursor: pointer;
      }
    }
  }
}
</style>
