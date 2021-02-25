<template>
  <div class="container">
    <contact-dialog ref="contactDialog" />

    <banner :display-action="true" @action="launchContactForm()" />

    <c-box pt="3.75rem" my="3.75rem" :mx="[5, 5, 5, '5%', '10%']">
      <services />
    </c-box>

    <c-box py="3.75rem" :px="[5, 5, 5, '5%', '10%']" bg="difference-section.bg">
      <we-are-different />
    </c-box>

    <c-box my="3.75rem" :mx="[5, 5, 5, '5%', '10%']" max-w="80wv">
      <process />
    </c-box>

    <c-box my="7.5rem">
      <lets-talk @action="launchContactForm()" />
    </c-box>

    <c-box my="3.75rem" :mx="[5, 5, 5, '5%', '10%']">
      <case-study />
    </c-box>

    <c-box my="5.625rem" :mx="[5, 5, 5, '5%', '10%']">
      <clients />
    </c-box>
  </div>
</template>

<script lang="js">
import { CBox } from '@chakra-ui/vue'
import LetsTalk from '~/components/lets-talk'
import Banner from '~/components/banner'
import Services from '~/components/services'
import ContactDialog from '~/components/contact-dialog'
import WeAreDifferent from '~/components/we-are-different'
import CaseStudy from '~/components/case-study'
import Clients from '~/components/clients'
import Process from '~/components/process'

export default {
  name: 'App',
  components: {
    Process,
    Clients,
    CaseStudy,
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
