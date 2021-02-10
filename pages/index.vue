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
  </div>
</template>

<script lang="js">
import { CBox } from '@chakra-ui/vue'
import LetsTalk from '~/components/lets-talk'
import Banner from '~/components/banner'
import Service from '~/components/service'
import ContactDialog from '~/components/contact-dialog'

export default {
  name: 'App',
  components: {
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
