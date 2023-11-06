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
      The result? A solid custom software solution for your business.
    </c-text>
    <a
      href="https://calendly.com/fiore-0pe/introductory-meeting-with-stack-it"
      target="_blank"
    >
      <c-button
        class="btn-main"
        :vertical-align="middle"
        :text-align="center"
        rounded="full"
        size="sm"
        font-size="md"
        font-weight="600"
        :border-bottom="['4px solid transparent']"
      >
        <!-- @click="$emit('action')" -->
        Let's Talk
      </c-button>
    </a>
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

  .lets-talk {
    padding: 5%;
  }
}
</style>
