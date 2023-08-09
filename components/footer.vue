<template>
  <c-stack bg="var(--sti-color-dark-blue)">
    <c-stack
      spacing="6"
      color="white"
      w="100%"
      max-width="1200px"
      margin="0 auto"
      p="3% 5%"
    >
      <c-image src="/stackit_logo.png" w="180px" />

      <c-flex
        justify="space-between"
        :font-size="['lg']"
        font-weight="400"
        wrap="wrap"
      >
        <c-stack
          :w="['100%', '50%', '30%', '30%']"
          :mt="['1.5rem', '1.5rem', 0]"
        >
          <c-heading as="h6" font-weight="400" font-size="1.2rem">
            Quick Links
          </c-heading>
          <router-link to="/">
            <c-link :opacity="['0.8']">
              Staffing
            </c-link>
          </router-link>
          <router-link to="/custom-software">
            <c-link :opacity="['0.8']">
              Custom Software
            </c-link>
          </router-link>
        </c-stack>
        <c-stack :w="['fit-content']" :mt="['1.5rem', '1.5rem', 0]">
          <c-heading as="h6" font-weight="400" font-size="1.2rem">
            Contact
          </c-heading>
          <c-text :opacity="['0.8']">
            <strong>Phone:</strong
            ><a href="tel:+1 (619) 917 5387"> +1 (619) 917 5387</a><br />
            <strong>Email:</strong>
            <a href="mailto:hello@stackitgroup.com"> hello@stackitgroup.com</a>
          </c-text>
          <c-link
            href="https://www.linkedin.com/company/stackit"
            is-external
            mt="1.5rem"
            @click="trackEvent()"
          >
            <c-image w="24px" height="24px" src="/contact/linkedin.svg" />
          </c-link>
        </c-stack>
      </c-flex>

      <c-text mt="1.25rem" text-align="center" :opacity="['0.6']">
        © 2023 Stackit. All Rights Reserved<br />
        v{{ version }}
      </c-text>
    </c-stack>
  </c-stack>
</template>

<script>
import {
  CBox,
  CHeading,
  CFlex,
  CStack,
  CImage,
  CText,
  CLink
} from "@chakra-ui/vue";

export default {
  components: {
    CBox,
    CHeading,
    CFlex,
    CStack,
    CImage,
    CText,
    CLink
  },
  computed: {
    version: () => {
      return process.env.version;
    }
  },
  methods: {
    trackEvent() {
      this.$gtag("event", "click", {
        eventCategory: "linkedin"
      });
    }
  }
};
</script>
