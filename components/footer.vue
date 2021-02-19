<template>
  <c-stack spacing="6" bg="#0e046d" color="white" :px="[5, 5, 5, '5%', '10%']" :py="['3.25rem']">
    <c-flex
      align="center"
    >
      <c-image src="/stackit-bar.png" w="45px" mr="2" />
      <c-heading font-size="3xl">
        Stackit
      </c-heading>
    </c-flex>

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
        <c-link href="/contact">
          Let’s talk.
        </c-link>
      </c-stack>

      <c-stack :w="['100%', '50%', '20%', '20%']" :mt="['1.5rem', '1.5rem', 0]">
        <c-text font-weight="600">
          Quick Links
        </c-text>
        <c-link href="/contact">
          Contact
        </c-link>
        <c-link href="/case-study">
          Case Study
        </c-link>
      </c-stack>

      <c-stack :w="['100%', '50%', '38%', '20%']" :mt="['1.5rem', '1.5rem', 0]">
        <c-text font-weight="600">
          Contact
        </c-text>
        <c-text>
          Phone: +1 (619) 917 5387<br>
          Email: hello@stackitgroup.com
        </c-text>
        <c-link href="https://www.linkedin.com/company/stackit" is-external mt="1.5rem">
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
}
</script>
