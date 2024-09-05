<script setup lang="ts">
// @ts-ignore
import { register } from 'swiper/element/bundle'
import { ref } from 'vue'

register()

// Customer Review Data
const reviewData = [
  {
    desc: 'Verifying my certificates online has never been easier. This platform provides quick and secure verification, giving me peace of mind.',
    img: '/images/logos/logo-1-light.png',
    rating: 5,
    name: 'Eugenia Moore',
    position: 'Founder of Hubspot',
    avatar: '/images/avatars/avatar-1.png',
  },
  {
    desc: 'The online certificate verification service is so intuitive and reliable. It saves me time and ensures that my credentials are always trusted.',
    img: '/images/logos/logo-2-light.png',
    rating: 5,
    name: 'Curtis Fletcher',
    position: 'Design Lead at Dribbble',
    avatar: '/images/avatars/avatar-2.png',
  },
  {
    desc: 'This platform stands out for its ease of use and accuracy in verifying certificates. It has become an essential tool for my business.',
    img: '/images/logos/logo-3-light.png',
    rating: 4,
    name: 'Eugenia Moore',
    position: 'CTO of Airbnb',
    avatar: '/images/avatars/avatar-3.png',
  },
  {
    desc: 'With all the features I need, this online certificate verification service allows me to validate credentials with just a few clicks.',
    img: '/images/logos/logo-4-light.png',
    rating: 5,
    name: 'Sara Smith',
    position: 'Founder of Continental',
    avatar: '/images/avatars/avatar-4.png',
  },
  {
    desc: 'The certificate verification platform is fantastic! It’s quick, secure, and makes verifying credentials a breeze. Highly recommended!',
    img: '/images/logos/logo-4-light.png',
    rating: 5,
    name: 'Tommy haffman',
    position: 'Founder of Levis',
    avatar: '/images/avatars/avatar-5.png',
  },
  {
    desc: 'I was impressed by the speed and reliability of the online certificate verification system. It ensures my credentials are always up to date.',
    img: '/images/logos/logo-5-light.png',
    rating: 5,
    name: 'Eugenia Moore',
    position: 'Founder of Hubspot',
    avatar: '/images/avatars/avatar-6.png',
  },
  {
    desc: 'This verification platform is a game-changer! I can trust that my certificates are authentic, and the verification process is seamless.',
    img: '/images/logos/logo-1-light.png',
    rating: 5,
    name: 'Tommy haffman',
    position: 'Founder of Levis',
    avatar: '/images/avatars/avatar-7.png',
  },
  {
    desc: 'I love how this platform combines security and ease of use. Verifying certificates has become a vital part of my business operations.',
    img: '/images/logos/logo-2-light.png',
    rating: 4,
    name: 'Eugenia Moore',
    position: 'CTO of Airbnb',
    avatar: '/images/avatars/avatar-8.png',
  },
  {
    desc: 'This certificate verification service provides everything I need to ensure my credentials are trusted and secure, all in one place.',
    img: '/images/logos/logo-3-light.png',
    rating: 4,
    name: 'Sara Smith',
    position: 'Founder of Continental',
    avatar: '/images/avatars/avatar-9.png',
  },
  {
    desc: 'The certificate verification system is well-documented and easy to use. It ensures that I can validate certificates with confidence.',
    img: '/images/logos/logo-4-light.png',
    rating: 5,
    name: 'Curtis Fletcher',
    position: 'Design Lead at Dribbble',
    avatar: '/images/avatars/avatar-10.png',
  },
]

const customerReviewSwiper = ref(null)

const slide = (dir: string) => {
  // @ts-ignore
  const swiper = customerReviewSwiper.value?.swiper

  if (dir === 'prev') swiper.slidePrev()

  swiper.slideNext()
}
</script>

<template>
  <div id="customer-review" class="position-relative">
    <div class="customer-reviews">
      <VContainer>
        <!-- 👉 Headers  -->
        <VRow>
          <VCol cols="12" md="3">
            <div
              class="headers d-flex justify-center flex-column align-start h-100"
              style="max-inline-size: 275px"
            >
              <VChip label color="primary" class="mb-4" size="small">
                Real Customers Reviews
              </VChip>
              <div class="position-relative mb-1 me-2">
                <div class="section-title">What people say</div>
              </div>
              <p class="text-body-1 mb-12">
                See what our customers have to say about their experience.
              </p>
              <div class="position-relative">
                <IconBtn
                  class="reviews-button-prev rounded me-4"
                  variant="tonal"
                  color="primary"
                  @click="slide('prev')"
                >
                  <VIcon icon="tabler-chevron-left" class="flip-in-rtl" />
                </IconBtn>

                <IconBtn
                  class="reviews-button-next rounded"
                  variant="tonal"
                  color="primary"
                  @click="slide('next')"
                >
                  <VIcon icon="tabler-chevron-right" class="flip-in-rtl" />
                </IconBtn>
              </div>
            </div>
          </VCol>

          <VCol cols="12" md="9">
            <!-- 👉 Customer Review Swiper -->
            <div class="swiper-reviews-carousel">
              <!-- eslint-disable vue/attribute-hyphenation -->
              <swiper-container
                ref="customerReviewSwiper"
                slides-per-view="1"
                space-between="20"
                loop="true"
                autoplay-delay="3000"
                autoplay-disable-on-interaction="false"
                events-prefix="swiper-"
                :injectStyles="[
                  `
                    .swiper{
                      padding-block: 12px;
                      padding-inline: 12px;
                      margin-inline: -12px;
                    }
                    .swiper-button-next, .swiper-button-prev{
                      visibility: hidden;
                    }
                  `,
                ]"
                navigation="{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }"
                :breakpoints="{
                  1280: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  960: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  600: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                }"
              >
                <swiper-slide v-for="(data, index) in reviewData" :key="index">
                  <VCard class="d-flex h-100 align-stretch">
                    <VCardText class="pa-6 d-flex flex-column justify-space-between align-start">
                      <img :src="data.img" style="block-size: 1.375rem" class="mb-3" />
                      <p class="text-body-1">
                        {{ data.desc }}
                      </p>

                      <VRating
                        :model-value="data.rating"
                        color="warning"
                        density="compact"
                        class="mb-4"
                        readonly
                      />
                      <div class="d-flex align-center gap-x-3">
                        <VAvatar :image="data.avatar" size="32" />
                        <div>
                          <h6 class="text-h6">
                            {{ data.name }}
                          </h6>

                          <div class="text-body-2 text-disabled">
                            {{ data.position }}
                          </div>
                        </div>
                      </div>
                    </VCardText>
                  </VCard>
                </swiper-slide>
              </swiper-container>
            </div>
          </VCol>
        </VRow>
      </VContainer>
    </div>
  </div>
</template>

<style>
swiper-container::part(bullet-active) {
  border-radius: 6px;
  background-color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity));
  inline-size: 38px;
}

swiper-container::part(bullet) {
  background-color: rgba(var(--v-theme-on-background));
}

.swiper-divider {
  margin-block: 72px 1rem;
}

.swiper-reviews-carousel {
  swiper-container {
    .swiper {
      padding-block-end: 3rem;
    }

    .swiper-button-next {
      display: none;
    }
  }

  swiper-slide {
    block-size: auto;
    opacity: 1;
  }
}
</style>

<style scoped>
.customer-reviews {
  padding-block: 72px 84px;
}

@media (max-width: 600px) {
  .customer-reviews {
    padding-block: 4rem;
  }
}

#customer-review {
  border-radius: 3.75rem 3.75rem 0 0;
  background-color: rgb(var(--v-theme-background));
}

.section-title {
  font-size: 24px;
  font-weight: 800;
  line-height: 36px;
}

.section-title::after {
  position: absolute;
  background: url('../../../assets/images/front-pages/icons/section-title-icon.png') no-repeat left
    bottom/contain;
  background-size: contain;
  block-size: 100%;
  content: '';
  font-weight: 800;
  inline-size: 120%;
  inset-block-end: 0;
  inset-inline-start: -12%;
}
</style>
