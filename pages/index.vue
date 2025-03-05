<template>
  <div class="container" :padding="0">
    <contact-dialog ref="contactDialog" />

    <banner :display-action="true" @action="launchContactForm()" />

    <c-box>
      <services />
    </c-box>

    <c-box :background-color="['#f2f2f2']">
      <we-are-different />
    </c-box>

    <c-box>
      <process />
    </c-box>

    <c-box>
      <clients />
    </c-box>

    <c-box :background-color="['#f2f2f2']">
      <lets-talk @action="launchContactForm()" />
    </c-box>

    <!-- <c-box :my="['2rem', '2rem', '3.75rem']" :mx="[5, 5, 5, '5%', '10%']">
      <case-study />
    </c-box> -->
  </div>
</template>

<script lang="js">
import { CBox } from '@chakra-ui/vue'
import LetsTalk from '~/components/lets-talk'
import Banner from '~/components/banner'
import Services from '~/components/services'
import ContactDialog from '~/components/contact-dialog'
import WeAreDifferent from '~/components/we-are-different'
import Clients from '~/components/clients'
import Process from '~/components/process'

export default {
  name: 'App',
  components: {
    Process,
    Clients,
    WeAreDifferent,
    ContactDialog,
    LetsTalk,
    Banner,
    Services,
    CBox,
  },
  data() {
    return {
      showContactDialog: false,
    }
  },
  methods: {
    launchContactForm() {
      this.$refs.contactDialog.open()

      this.$gtag('event', 'click', {
        eventCategory: 'contact-form',
        eventLabel: 'home',
      })
    }
  }
}
</script>
