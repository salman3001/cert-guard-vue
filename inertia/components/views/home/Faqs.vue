<script setup lang="ts">
const faqData = [
  {
    question: 'Do you charge for each verification?',
    answer:
      'Our platform offers free of charge service for normal verification. For advance certificate verification, we offer per certificate fee options depending on the volume and additional services required. You can choose a plan that best fits your needs.',
  },
  {
    question: 'Do I need to register to verify a certificate?',
    answer:
      'No, registration is not required for certificate verification. Simply enter the certificate details or scan the qr code on certificate, and our system will verify it instantly. However, creating an account allows you to access advanced features like verification history and bulk verification.',
  },
  {
    question: 'What types of certificates can be verified?',
    answer:
      'Our platform supports a wide range of certificates, including educational diplomas, professional certifications, and government-issued documents. If you are unsure if your certificate is supported, please check our list of supported certificate types on our website.',
  },
  {
    question: 'How secure is the verification process?',
    answer:
      'We take security very seriously. All verifications are conducted using industry-standard encryption to ensure that your data is safe. Additionally, we follow strict protocols to maintain the authenticity and integrity of the certificates being verified.',
  },
  {
    question: 'Can I verify multiple certificates at once?',
    answer:
      'Yes, our platform allows bulk verification of certificates. This feature is especially useful for organizations that need to verify large numbers of credentials efficiently. Simply upload your certificates in the supported format, and we’ll handle the rest.',
  },
]
</script>

<template>
  <div id="faq">
    <VContainer>
      <!-- 👉 Header  -->
      <div class="faq-section">
        <div class="headers d-flex justify-center flex-column align-center">
          <VChip label color="primary" size="small" class="mb-4"> FAQ </VChip>
          <h4 class="d-flex align-center text-h4 mb-1 flex-wrap justify-center">
            Frequently Asked
            <div class="position-relative ms-2">
              <div class="section-title">questions</div>
            </div>
          </h4>
          <p class="text-body-1 mb-0">
            Browse through these FAQs to find answers to commonly asked questions.
          </p>
        </div>
        <VRow>
          <VCol cols="12" md="5">
            <div class="pt-10 d-flex align-center justify-center h-100">
              <VImg :src="'/images/FAQ.jpg'" height="330" width="330" />
            </div>
          </VCol>
          <VCol cols="12" md="7">
            <VExpansionPanels class="pt-16">
              <VExpansionPanel v-for="faq in faqData" :key="faq.question">
                <VExpansionPanelTitle>
                  {{ faq.question }}
                </VExpansionPanelTitle>
                <VExpansionPanelText>
                  {{ faq.answer }}
                </VExpansionPanelText>
              </VExpansionPanel>
            </VExpansionPanels>
          </VCol>
        </VRow>
      </div>
    </VContainer>
  </div>
</template>

<style scoped>
.faq-section {
  margin-block: 5.25rem;
}

@media (max-width: 600px) {
  .faq-section {
    margin-block: 4rem;
  }
}

#faq {
  border-radius: 3.75rem 3.75rem 0 0;
  background-color: rgba(var(--v-theme-background));
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
  inline-size: 130%;
  inset-block-end: 12%;
  inset-inline-start: -12%;
}
</style>
