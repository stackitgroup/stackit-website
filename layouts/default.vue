<template>
  <div class="container">
    <CThemeProvider>
      <CColorModeProvider>
        <CBox font-family="body" as="main">
          <CReset />
          <Nuxt class="app-content" />
          <navbar />
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
import SweetAlertIcons from 'vue-sweetalert-icons'
import Vue from 'vue'

import Navbar from '~/components/navbar'
import StFooter from '~/components/footer'

Vue.use(SweetAlertIcons)

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
