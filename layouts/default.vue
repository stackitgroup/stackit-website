<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="body" as="main">
          <CReset />
          <navbar />
          <Nuxt class="app-content" />
          <st-footer />
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from '~/components/navbar'

import { CThemeProvider, CColorModeProvider, CReset, CBox } from '@chakra-ui/vue'

import StFooter from '~/components/footer'

// Start library for displaying components smooth
AOS.init()

export default {
  name: 'App',
  components: {
    Navbar,
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    StFooter,
  }
}
</script>

<style scoped>
.app-content {
  /* margin-top: 300px; */
}
</style>
