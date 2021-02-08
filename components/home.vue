<template>
  <c-box>
    <c-heading as="h1" text-align="center" mb="4">
      Stackit
    </c-heading>
    <c-text font-size="6xl">
      <b>Custom software</b> built for your business and built to last.
    </c-text>
    <c-text font-size="3xl">
      We are a software <b>development and IT agency</b> from sunny San Diego, helping companies build a better world
      one app at a time!
      <b>Custom software</b> built for your business and built to last.
    </c-text>
    <a href="#mobile">Mobile</a>
    <a href="#web">Mobile</a>
    <a href="#office">Mobile</a>
    <a href="#support">Mobile</a>
    <a href="#clients">Mobile</a>
    <c-button variant-color="orange">
      CONTACT US
    </c-button>
  </c-box>
</template>

<script>
import { CBox, CText, CButton, CHeading } from '@chakra-ui/vue'

export default {
  components: {
    CBox,
    CText,
    CButton,
    CHeading,
  }
}
</script>
