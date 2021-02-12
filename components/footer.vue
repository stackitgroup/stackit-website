<template>
  <c-stack spacing="6" bg="#0e046d" color="white" :px="[5, 5, 5, '5%', '10%']" :py="['3.25rem']">
    <c-flex>
      <c-image src="./favicon.ico" mr="2" />
      <c-heading font-size="3xl">
        Stackit
      </c-heading>
    </c-flex>

    <c-flex justify="space-between" :font-size="['lg']" font-weight="300">
      <c-stack :w="['30%']">
        <c-text font-weight="600">
          Let's work together!
        </c-text>
        <c-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
        </c-text>
      </c-stack>

      <c-stack :w="['20%']">
        <c-text font-weight="600">
          Quick Links
        </c-text>
        <c-link>
          Services
        </c-link>
        <c-link>
          We care
        </c-link>
        <c-link>
          Case Study
        </c-link>
        <c-link>
          Clients
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

    <c-text mt="4.75rem" text-align="center">
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
