<template>
  <div class="container">
    <contact-dialog ref="contactDialog" />

    <banner @action="launchContactForm()" />

    <c-box mt="7.5rem" :mx="[5, 5, 5, '5%', '10%']">
      <services />
    </c-box>

    <c-box mt="7.5rem">
      <lets-talk @action="launchContactForm()" />
    </c-box>

    <c-box mt="7.5rem" :mx="[5, 5, 5, '5%', '10%']">
      <we-are-different />
    </c-box>

    <c-box mt="7.5rem" :mx="[5, 5, 5, '5%', '10%']">
      <process />
    </c-box>

    <c-box mt="7.5rem" :mx="[5, 5, 5, '5%', '10%']">
      <lorem />
    </c-box>

    <c-box my="9rem" :mx="[5, 5, 5, '5%', '10%']">
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
import Lorem from '~/components/lorem'
import StFooter from '~/components/footer'
import Clients from '~/components/clients'
import Process from '~/components/process'

export default {
  name: 'App',
  components: {
    Process,
    Clients,
    StFooter,
    Lorem,
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
    }
  }
}
</script>
