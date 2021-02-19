<template>
  <c-flex
    class="study-container"
    justify="space-between"
    wrap="wrap"
  >
    <c-box
      class="study-bar"
      :w="['100%', '100%', '100%', '100%', '35%']"
      :p="['1.5rem', '1.5rem', '2rem', '3rem', '4rem']"
      data-aos="fade-right"
      data-aos-delay="150"
    >
      <c-text
        color="white"
        :font-size="['xl', '2xl', '3xl', '3xl', '4xl']"
        font-weight="600"
        line-height="1.3"
      >
        "We are so blessed to have amazing people like you on this adventure. There is no way to thank you enough."<br>
        - Mike Jacobsen
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
        When Mike Jacobsen approached Stackit, he had a great idea for a SaaS product–and a half-baked project on his hands. Learn how Stackit stepped in to get the failing project back on its feet and build an effective MVP for It’s Borrowed.
      </c-text>
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
.study-bar {
  border-radius: 10px;
  background-image: linear-gradient(90deg, #2626bc 0%, #0a024d 100%);
}

@media (max-width: 1279px) {
  .study-container {
    flex-direction: column-reverse !important;
  }

  .study-bar {
    margin-top: 3rem;
  }
}
</style>
