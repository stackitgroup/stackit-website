<template>
  <c-stack spacing="6" bg="#0e046d" color="white" :px="[5, 5, 5, '5%', '10%']" :py="['3.25rem']">
    <c-flex
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
    >
      <c-image src="./favicon.ico" mr="2" />
      <c-heading font-size="3xl">
        Stackit
      </c-heading>
    </c-flex>

    <c-flex
      justify="space-between"
      :font-size="['lg']"
      font-weight="300"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
    >
      <c-stack :w="['30%']">
        <c-text font-weight="600">
          Let’s build custom software for you.
        </c-text>
        <c-text>
          Contact us today to start talking about your next custom software project.<br>
          Let’s talk.
        </c-text>
      </c-stack>

      <c-stack :w="['20%']">
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

      <c-stack :w="['20%']">
        <c-text font-weight="600">
          Contact
        </c-text>
        <c-text>
          Address: Lorem ipsum dolor sit amet<br>
          Phone: +1 (801)800 8000<br>
          Email: hello@stackitgroup.com
        </c-text>
      </c-stack>
    </c-flex>

    <c-text
      mt="4.75rem"
      text-align="center"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      data-aos-offset="0"
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
