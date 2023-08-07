<template>
  <c-flex
    flex-direction="column"
    :p="['3% 5%']"
    max-width="1200px"
    margin="auto"
    :gap="['20px']"
  >
    <c-stack
      w="100%"
      spacing="0"
      display="flex"
      flex-direction="row"
      align-items="center"
    >
      <c-image
        src="/stackit_item.png"
        :w="['40px']"
        :h="['40px']"
        :margin-right="['10px']"
      />
      <c-heading
        as="h1"
        :font-weight="600"
        :font-size="['2xl', '3xl', '4xl', '5xl']"
      >
        Some of our Clients
      </c-heading>
    </c-stack>
    <c-flex
      class="clients-container"
      align="center"
      justify="space-between"
      wrap="wrap"
    >
      <c-image
        v-for="(client, index) in clients"
        :key="`client-${client.name}`"
        :src="`/clients/${client.src}`"
        :alt="client.name"
        :w="['45%', '30%', '15%', '15%']"
        :my="['1rem', '1rem', '1rem', 0]"
        data-aos="flip-left"
        :data-aos-delay="(index + 1) * 250"
      />
    </c-flex>
  </c-flex>
</template>

<script>
import { CBox, CFlex, CImage, CHeading } from "@chakra-ui/vue";

export default {
  components: {
    CBox,
    CHeading,
    CFlex,
    CImage
  },
  data() {
    return {
      clients: [
        { name: "Fuelzee", src: "fuelzee.png" },
        { name: "Buscape", src: "buscape.png" },
        { name: "Siemens", src: "siemens.png" },
        { name: "Toyota", src: "toyota.png" },
        { name: "Boening", src: "boening.png" },
        { name: "Bridgepoint", src: "bridge.png" }
      ]
    };
  }
};
</script>
<style lang="scss">
.clients-container {
  overflow: hidden;
  z-index: 0;
  position: relative;
  padding: 3% 0;
}
</style>
