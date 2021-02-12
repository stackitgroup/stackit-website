<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="body" as="main">
          <CReset />
          <Nuxt />
          <st-footer />
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

import { CThemeProvider, CColorModeProvider, CReset, CBox } from '@chakra-ui/vue'

import StFooter from '~/components/footer'

// Start library for displaying components smooth
AOS.init()

export default {
  name: 'App',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox,
    StFooter,
  }
}
</script>
