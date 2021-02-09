<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="body" as="main">
          <CReset />
          <Nuxt />
        </CBox>
      </CColorModeProvider>
    </CThemeProvider>
  </div>
</template>

<script>
import { CThemeProvider, CColorModeProvider, CReset, CBox } from '@chakra-ui/vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Start library for displaying components smooth
AOS.init()

export default {
  name: 'App',
  components: {
    CThemeProvider,
    CColorModeProvider,
    CReset,
    CBox
  }
}
</script>
