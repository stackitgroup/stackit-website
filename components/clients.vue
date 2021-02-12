<template>
  <c-flex align="center" justify="space-between">
    <c-image
      v-for="client in clients"
      :key="`client-${client.name}`"
      :src="`./clients/${client.src}`"
      :alt="client.name"
      :w="['178px']"
      h="fit-content"
    />
  </c-flex>
</template>

<script>
import { CBox, CFlex, CImage, CHeading } from '@chakra-ui/vue'

export default {
  components: {
    CBox,
    CHeading,
    CFlex,
    CImage,
  },
  data() {
    return {
      clients: [
        { name: 'Fuelzee', src: 'fuelzee.png' },
        { name: 'Buscape', src: 'buscape.png' },
        { name: 'Siemens', src: 'siemens.png' },
        { name: 'Toyota', src: 'toyota.png' },
        { name: 'Boening', src: 'boening.png' },
        { name: 'Bridgepoint', src: 'bridge.png' },
      ],
    }
  }
}
</script>
