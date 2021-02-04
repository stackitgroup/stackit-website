<template>
  <div class="container">
    <c-box d="flex" w="100vw" h="100vh" flex-dir="column" justify-content="center">
      <c-box>
        <c-heading as="h1" text-align="center" mb="4">
          Stackit
        </c-heading>
        <c-text font-size="6xl">
          <b>Custom software</b> built for your business and built to last.
        </c-text>
        <c-text font-size="3xl">
          We are a software <b>development and IT agency</b> from sunny San Diego, helping companies build a better world one app at a time!
          <b>Custom software</b> built for your business and built to last.
        </c-text>
        <c-button variant-color="orange">
          CONTACT US
        </c-button>
        <c-text>{{ version }}</c-text>
      </c-box>
    </c-box>
  </div>
</template>

<script lang="js">
import { CBox, CHeading, CText, CButton } from '@chakra-ui/vue'

export default {
  name: 'App',
  components: {
    CBox,
    CHeading,
    CText,
    CButton,
  },
  inject: ['$chakraColorMode', '$toggleColorMode'],
  data() {
    return {}
  },
  computed: {
    version: () => {
      return process.env.version
    }
  },
  methods: {
  }
}
</script>
