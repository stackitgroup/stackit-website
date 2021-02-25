<template>
  <c-stack spacing="6" bg="#0e046d" color="white" :px="[5, 5, 5, '5%', '10%']" :py="['3.25rem']">
    <c-image src="/stackit-logo.png" w="180px" />

    <c-flex
      justify="space-between"
      :font-size="['lg']"
      font-weight="300"
      wrap="wrap"
    >
      <c-stack :w="['100%', '100%', '38%', '30%']">
        <c-text font-weight="600">
          Let’s build custom software for you.
        </c-text>
        <c-text>
          Contact us today to start talking about your next custom software project.<br>
        </c-text>
        <router-link to="/contact">
          <c-link>
            Let’s talk.
          </c-link>
        </router-link>
      </c-stack>

      <c-stack :w="['100%', '50%', '20%', '20%']" :mt="['1.5rem', '1.5rem', 0]">
        <c-text font-weight="600">
          Quick Links
        </c-text>
        <router-link to="/contact">
          <c-link>
            Contact
          </c-link>
        </router-link>
        <router-link to="/case-study">
          <c-link>
            Case Study
          </c-link>
        </router-link>
      </c-stack>

      <c-stack :w="['100%', '50%', '38%', '20%']" :mt="['1.5rem', '1.5rem', 0]">
        <c-text font-weight="600">
          Contact
        </c-text>
        <c-text>
          Phone: +1 (619) 917 5387<br>
          Email: hello@stackitgroup.com
        </c-text>
        <c-link href="https://www.linkedin.com/company/stackit" is-external mt="1.5rem" @click="trackEvent()">
          <c-image w="24px" height="24px" src="/contact/linkedin.svg" />
        </c-link>
      </c-stack>
    </c-flex>

    <c-text
      mt="1.25rem"
      text-align="center"
    >
      © 2021 Stackit. All Rights Reserved<br>
      v{{ version }}
    </c-text>
  </c-stack>
</template>

<script>
import { CBox, CHeading, CFlex, CStack, CImage, CText, CLink } from '@chakra-ui/vue'

export default {
  components: {
    CBox,
    CHeading,
    CFlex,
    CStack,
    CImage,
    CText,
    CLink,
  },
  computed: {
    version: () => {
      return process.env.version
    }
  },
  methods: {
    trackEvent() {
      this.$gtag('event', 'click', {
        eventCategory: 'linkedin',
      })
    }
  }
}
</script>
