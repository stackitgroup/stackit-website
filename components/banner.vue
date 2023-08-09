<template>
  <c-flex
    class="banner"
    direction="column"
    :pt="['10rem', '8.5rem', '8.5rem', '8.5rem']"
    :pb="['5.25rem']"
    :px="['5%']"
    color="white"
    justify="center"
    align="center"
  >
    <c-text
      class="banner-title"
      :font-size="['3xl', '4xl', '5xl']"
      max-w="1094px"
      text-align="center"
    >
      <template v-if="custom">
        {{ custom }}
      </template>
      <template v-else>
        Staffing Innovation Worldwide <br />
        with Elite Latin America Software Talent.
      </template>
    </c-text>
    <c-button
      v-if="displayAction"
      class="btn-main"
      :mt="['12']"
      right-icon="arrow-forward"
      rounded="full"
      size="lg"
      font-size="xl"
      font-weight="600"
      @click="$emit('action')"
    >
      Let's Talk
    </c-button>
  </c-flex>
</template>

<script>
import { CFlex, CText, CButton } from "@chakra-ui/vue";

export default {
  components: {
    CFlex,
    CText,
    CButton
  },
  props: {
    custom: {
      type: String,
      default: undefined
    },
    displayAction: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
.banner {
  position: relative;
  background-color: var(--sti-color-dark-blue);
  overflow: hidden;
  z-index: 0;

  .banner-title {
    z-index: 1;

    b {
      font-weight: 600;
    }
  }
}
</style>
