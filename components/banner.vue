<template>
  <c-flex
    class="banner"
    direction="column"
    :py="['5.25rem']"
    :px="['5%']"
    color="white"
    justify="center"
    align="center"
  >
    <c-text
      class="banner-title"
      :font-size="['3xl', '4xl', '5xl', '6xl']"
      max-w="1094px"
      text-align="center"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
    >
      <template v-if="custom">
        <b>{{ custom }}</b>
      </template>
      <template v-else>
        We <b>design, create</b>, and <b>maintain</b> quality <b>custom software.</b>
      </template>
    </c-text>
    <c-text
      v-if="!custom"
      :font-size="['md', 'lg', 'xl', '2xl']"
      mt="12"
      mb="10"
      max-w="1094px"
      text-align="center"
      z-index="1"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="350"
    >
      You can depend on us to deliver quality custom software designed for your unique business.
    </c-text>
    <c-button
      v-if="!custom"
      class="btn-main"
      right-icon="arrow-forward"
      rounded="10px"
      size="lg"
      font-size="xl"
      font-weight="400"
      data-aos="fade-up"
      data-aos-delay="500"
      @click="$emit('action')"
    >
      LET'S TALK
    </c-button>
  </c-flex>
</template>

<script>
import { CFlex, CText, CButton } from '@chakra-ui/vue'

export default {
  components: {
    CFlex,
    CText,
    CButton,
  },
  props: {
    custom: {
      type: String,
      default: undefined
    },
  },
}
</script>

<style scoped lang="scss">
.banner {
  position: relative;
  background-image: url('/banner-background.png');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  z-index: 0;

  .banner-title {
    font-weight: lighter;
    z-index: 1;

    b {
      font-weight: 600;
    }
  }
}

.banner::before {
  content: '';
  position: absolute;
  background-image: linear-gradient(90deg, #2626bc 0%, #0a024d 100%);
  opacity: 0.7;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
