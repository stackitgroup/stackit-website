<template>
  <div class="container">
    <contact-dialog />

    <banner />

    <c-box
      v-for="(service, index) in services"
      :key="`service-${index}`"
      :my="['8rem']"
    >
      <service :service="service" :position="index % 2 === 0 ? 'left' : 'right'" />
    </c-box>

    <c-box>
      <lets-talk />
    </c-box>

    <c-box mt="6rem">
      <we-are-different />
    </c-box>

    <c-box mt="12rem">
      <lorem />
    </c-box>

    <c-box mt="12rem">
      <st-footer />
    </c-box>
  </div>
</template>

<script lang="js">
import { CBox } from '@chakra-ui/vue'
import LetsTalk from '~/components/lets-talk'
import Banner from '~/components/banner'
import Service from '~/components/service'
import ContactDialog from '~/components/contact-dialog'
import WeAreDifferent from '~/components/we-are-different'
import Lorem from '~/components/lorem'
import StFooter from '~/components/footer'

export default {
  name: 'App',
  components: {
    StFooter,
    Lorem,
    WeAreDifferent,
    ContactDialog,
    LetsTalk,
    Banner,
    Service,
    CBox,
  },
  data() {
    return {
      showContactDialog: false,
      services: [
        {
          title: 'Custom Software',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.',
          image: 'service-custom-software.png',
        },
        {
          title: 'Staffing',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.',
          image: 'service-custom-software.png',
        },
        {
          title: 'Consulting',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.',
          image: 'service-custom-software.png',
        },
        {
          title: 'Maintenance & Support',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.',
          image: 'service-custom-software.png',
        },
      ],
    }
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
