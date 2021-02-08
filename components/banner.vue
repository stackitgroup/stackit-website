<template>
  <c-flex
    class="banner"
    background-color="banner.bg"
    direction="column"
    h="590px"
    color="white"
    justify="center"
    align="center"
  >
    <c-text class="banner-title" w="1094px" font-size="6xl" text-align="center" z-index="1">
      We <b>design, create</b>, and <b>maintain</b> quality <b>custom software.</b>
    </c-text>
    <c-text font-size="2xl" mt="12" mb="10" w="1094px" text-align="center" z-index="1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.
    </c-text>
    <c-button bg="banner.button" right-icon="arrow-forward" size="lg" font-size="xl" font-weight="400">
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
  }
}
</script>

<style scoped type="scss">
.banner {
  position: relative;
  background-image: url('/banner-background.png');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

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
  background-color: #0b0f7d;
  opacity: 0.7;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
