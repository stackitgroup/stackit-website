<template>
  <c-flex
    class="banner"
    justify="space-between"
  >
    <c-box class="lorem-bar" :w="['35%']" :p="['65px']">
      <c-text color="white" font-size="6xl" font-weight="600" line-height="1.3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.
      </c-text>
    </c-box>

    <c-stack spacing="8" :w="['60%']">
      <c-heading as="h1" :font-size="['6xl']" font-weight="600">
        Lorem ipsum dolor sit amet
      </c-heading>
      <c-text font-size="xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </c-text>
      <c-flex>
        <c-image src="./check.svg" h="60px" w="60px" mr="4" />
        <c-text font-size="xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec
        </c-text>
      </c-flex>
      <c-flex>
        <c-image src="./check.svg" h="60px" w="60px" mr="4" />
        <c-text font-size="xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec
        </c-text>
      </c-flex>
      <c-flex>
        <c-image src="./check.svg" h="60px" w="60px" mr="4" />
        <c-text font-size="xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec
        </c-text>
      </c-flex>
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

<style scoped type="scss">
.lorem-bar {
  border-radius: 10px;
  background-image: linear-gradient(90deg, #2626bc 0%, #0a024d 100%);
}
</style>
