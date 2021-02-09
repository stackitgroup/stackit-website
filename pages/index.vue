<template>
  <div class="container">
    <banner />

    <c-box
      v-for="(service, index) in services"
      :key="`service-${index}`"
      :my="['8rem']"
    >
      <service :service="service" :position="index % 2 === 0 ? 'left' : 'right'" />
    </c-box>
  </div>
</template>

<script lang="js">
import { CBox } from '@chakra-ui/vue'
import Banner from '~/components/banner'
import Service from '~/components/service'

export default {
  name: 'App',
  components: {
    Banner,
    Service,
    CBox,
  },
  data() {
    return {
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
