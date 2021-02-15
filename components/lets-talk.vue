<template>
  <c-flex
    class="lets-talk"
    background-color="banner.bg"
    color="white"
    align="center"
    justify="space-between"
    :py="['4.25rem']"
    :px="[5, 5, 5, '5%', '10%']"
    wrap="wrap"
  >
    <c-heading
      as="h1"
      :font-size="['3xl', '3xl', '3xl', '4xl', '5xl']"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      :w="['100%', '100%', '100%', '80%', '80%']"
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
      :w="['100%', '100%', '100%', '18%', '18%']"
      :mt="['2rem', '2rem', '2rem', 0]"
      :mx="['auto', 'auto', 'auto', 0]"
      max-w="203px"
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
