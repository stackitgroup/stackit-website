<template>
  <div class="container" :padding="0">
    <contact-dialog ref="contactDialog" />

    <banner
      :display-action="true"
      @action="launchContactForm()"
      custom="Let's build you custom software. If you can invision it, we can build it"
    />

    <c-box>
      <custom-software-services />
    </c-box>

    <c-box :background-color="['#f2f2f2']">
      <why-excel />
    </c-box>

    <c-box>
      <custom-process />
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
