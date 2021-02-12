<template>
  <c-flex
    class="lets-talk"
    background-color="banner.bg"
    color="white"
    align="center"
    justify="space-between"
    :py="['4.25rem']"
    :px="[5, 5, 5, '5%', '10%']"
  >
    <c-heading
      as="h1"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      data-aos-offset="0"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.
    </c-heading>
    <c-button
      class="btn-main"
      right-icon="arrow-forward"
      rounded="10px"
      size="lg"
      font-size="xl"
      font-weight="400"
      data-aos="fade-left"
      data-aos-delay="150"
      @click="$emit('action')"
    >
      LET'S TALK
    </c-button>
  </c-flex>
</template>

<script>
import { CFlex, CHeading, CButton } from '@chakra-ui/vue'

export default {
  components: {
    CFlex,
    CHeading,
    CButton,
  }
}
</script>

<style scoped type="scss">
.lets-talk {
  background-image: linear-gradient(90deg, #eb4256 0%, #0c0263 100%);
}
</style>
