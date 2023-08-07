<template>
  <c-flex
    class="lets-talk"
    background-color="transparent"
    color="white"
    align="center"
    justify="space-between"
    :pt="['1.5rem', '1.5rem', '1.5rem', '2rem']"
    :pb="['1.5rem', '1.5rem', '1.5rem', '2.5rem']"
    wrap="wrap"
    max-width="1200px"
    margin="auto"
    padding="0 5%"
  >
    <c-heading
      class="cta-quote"
      as="h1"
      :font-size="['2xl', '2xl', '3xl', '3xl', '4xl']"
      :w="['100%', '100%', '100%', '80%', '80%']"
      font-weight="600"
    >
      Kickstart your journey towards a rewarding career with top-tier tech
      companies.
    </c-heading>
    <c-button
      class="btn-main"
      right-icon="arrow-forward"
      rounded="full"
      size="lg"
      font-size="xl"
      font-weight="400"
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
import { CFlex, CHeading, CButton } from "@chakra-ui/vue";

export default {
  components: {
    CFlex,
    CHeading,
    CButton
  }
};
</script>

<style>
@media (max-width: 980px) {
  .cta-quote {
    text-align: center;
  }
}
</style>
