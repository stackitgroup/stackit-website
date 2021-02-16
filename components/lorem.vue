<template>
  <c-flex
    class="lorem-container"
    justify="space-between"
    wrap="wrap"
  >
    <c-box
      class="lorem-bar"
      :w="['100%', '100%', '100%', '100%', '35%']"
      :p="['1rem', '2rem', '3rem', '4rem']"
      data-aos="fade-right"
      data-aos-delay="150"
    >
      <c-text
        color="white"
        :font-size="['2xl', '3xl', '4xl', '5xl']"
        font-weight="600"
        line-height="1.3"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.
      </c-text>
    </c-box>

    <c-stack spacing="8" :w="['100%', '100%', '100%', '100%', '60%']">
      <c-heading
        as="h1"
        :font-size="['2xl', '3xl', '4xl', '5xl']"
        font-weight="600"
        data-aos="fade-zoom-in"
        data-aos-delay="100"
      >
        How Stackit Helped Save a Half-Baked Project & Launch an MVP
      </c-heading>
      <c-text
        :font-size="['lg', 'xl']"
        data-aos="fade-zoom-in"
        data-aos-delay="120"
        data-aos-easing="ease-in-back"
      >
        When Mike Jacobsen approached Stackit in 2016, he had a great idea for a SaaS product–and a half-baked project on his hands. Learn how Stackit stepped in to get the failing project back on its feet...and build an effective MVP for It’s Borrowed.
      </c-text>
      <c-flex
        v-for="(a, index) in [1, 2, 3, 4]"
        :key="`lorem-${index}`"
        data-aos="fade-zoom-in"
        :data-aos-delay="200"
        data-aos-easing="ease-in-back"
      >
        <c-image src="./check.svg" h="60px" w="60px" mr="4" />
        <c-text :font-size="['lg', 'xl']">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec
        </c-text>
      </c-flex>
      <router-link to="/case-study">
        <c-button
          class="btn-main"
          right-icon="arrow-forward"
          rounded="10px"
          size="lg"
          font-size="xl"
          font-weight="400"
          data-aos="fade-right"
          data-aos-delay="150"
          :w="['300px']"
          :mt="['2.5rem']"
        >
          READ CASE STUDY
        </c-button>
      </router-link>
    </c-stack>
  </c-flex>
</template>

<script>
import { CFlex, CText, CButton, CHeading, CStack, CBox, CImage } from '@chakra-ui/vue'

export default {
  components: {
    CImage,
    CFlex,
    CText,
    CButton,
    CHeading,
    CStack,
    CBox,
  },
  data() {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
.lorem-bar {
  border-radius: 10px;
  background-image: linear-gradient(90deg, #2626bc 0%, #0a024d 100%);
}

@media (max-width: 1279px) {
  .lorem-container {
    flex-direction: column-reverse !important;
  }

  .lorem-bar {
    margin-top: 3rem;
  }
}
</style>
