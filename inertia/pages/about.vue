<script setup lang="ts">
import { Head, usePage } from '@inertiajs/vue3'
import WebLayout from '~/components/layouts/web-layout.vue'
import { IpageProps } from '~/utils/types/i_page_props'

defineOptions({
  layout: WebLayout,
})

const page = usePage<IpageProps>()
</script>

<template>
  <Head>
    <title>About</title>
  </Head>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-card elevation="0">
          <v-card-title class="headline font-weight-bold"> About Us </v-card-title>
          <v-card-text>
            <p>
              Welcome to {{ page?.props?.appName }}, a leading platform for secure and reliable
              online certificate verification. We are dedicated to ensuring the authenticity of
              certificates and credentials in a world where digital documents are becoming
              increasingly common. Our mission is to make the process of certificate verification
              simple, fast, and accessible to everyone.
            </p>
            <p>
              Founded with the vision of combating the growing issue of certificate fraud, [Your
              Site Name] offers a streamlined solution for institutions, employers, and individuals
              to verify the legitimacy of certificates with ease. We use cutting-edge technology,
              including QR codes and barcodes, to offer a seamless verification experience. Our
              platform allows certificate holders to safeguard their achievements, while giving
              organizations the tools they need to verify credentials efficiently.
            </p>
            <p>
              We prioritize security and privacy at every step of the verification process, ensuring
              that sensitive information remains protected. With our user-friendly interface and
              robust verification mechanisms, {{ page?.props?.appName }} is the trusted choice for
              digital certificate validation.
            </p>
            <p>
              Whether you are an educational institution looking to issue secure certificates, or an
              employer wanting to verify a candidate's qualifications, {{ page?.props?.appName }} is
              here to help. Join us in promoting trust and transparency in the digital age.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.headline {
  color: #424242;
}
</style>
