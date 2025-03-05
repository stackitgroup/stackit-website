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
    <c-text
      class="cta-quote"
      :font-size="['xl', 'xl', '2xl', '3xl']"
      :w="['100%', '100%', '100%', '80%', '80%']"
      font-weight="600"
      color="#181818"
    >
      The result? Top-tier professionals with the skillset to build you nothing
      but the best software.
    </c-text>
    <!-- <a
      href="https://calendly.com/fiore-0pe/introductory-meeting-with-stack-it"
      target="_blank"
    >
      <c-button
        class="btn-main"
        right-icon="arrow-forward"
        rounded="full"
        size="lg"
        font-size="xl"
        font-weight="600"
        :w="['100%', '100%', '100%', '100%', '100%']"
        :mt="['2rem', '2rem', '2rem', 0]"
        :mx="['auto', 'auto', 'auto', 0]"
        max-w="203px"
      >

        Let's Talk
      </c-button>
    </a> -->
    <lets-talk-button class="btn-main" />
  </c-flex>
</template>

<script>
import { CFlex } from '@chakra-ui/vue'

export default {
  components: {
    CFlex,
  }
}
</script>

<style>
@media (max-width: 980px) {
  .cta-quote {
    text-align: center;
  }

  .lets-talk {
    padding: 5%;
  }
}
</style>
