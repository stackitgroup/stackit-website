<template>
  <div class="container">
    <c-box id="home" d="flex" h="100vh" flex-dir="column" justify-content="center">
<!--      <home />-->
<!--      {{ version }}-->
      <page-summary />
    </c-box>
<!--    <c-box id="mobile" d="flex" w="100vw" h="100vh" flex-dir="column" justify-content="center">-->
<!--      <page-summary />-->
<!--    </c-box>-->
<!--    <c-box id="web" d="flex" w="100vw" h="100vh" flex-dir="column" justify-content="center">-->
<!--      <web />-->
<!--    </c-box>-->
<!--    <c-box id="office" d="flex" w="100vw" h="100vh" flex-dir="column" justify-content="center">-->
<!--      <office />-->
<!--    </c-box>-->
<!--    <c-box id="support" d="flex" w="100vw" h="100vh" flex-dir="column" justify-content="center">-->
<!--      <support />-->
<!--    </c-box>-->
<!--    <c-box id="clients" d="flex" w="100vw" h="100vh" flex-dir="column" justify-content="center">-->
<!--      <clients />-->
<!--    </c-box>-->
<!--    <c-box id="footer" d="flex" w="100vw" h="100px" flex-dir="column" justify-content="center">-->
<!--      <footer-brand />-->
<!--    </c-box>-->
  </div>
</template>

<script lang="js">
import { CBox } from '@chakra-ui/vue'
import Home from '~/components/home'
import Mobile from '~/components/mobile'
import Web from '~/components/web'
import Office from '~/components/office'
import Support from '~/components/support'
import Clients from '~/components/clients'
import FooterBrand from '~/components/footer'
import PageSummary from '~/components/page-summary'

export default {
  name: 'App',
  components: {
    PageSummary,
    CBox,
    Home,
    Mobile,
    Web,
    Office,
    Support,
    Clients,
    FooterBrand,
  },
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
