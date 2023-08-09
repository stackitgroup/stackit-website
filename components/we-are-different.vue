<template>
  <c-flex
    class="difference-container"
    direction="column"
    justify="center"
    align="center"
    margin="0 auto"
    padding="3% 5%"
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
      <c-heading as="h2" :font-weight="400" :font-size="['2xl', '3xl', '4xl']">
        Why we excel. Why us.
      </c-heading>
    </c-stack>

    <c-flex :p="['3% 5%']" wrap="wrap">
      <c-stack
        v-for="(difference, index) in differences"
        :key="`difference-${index}`"
        class="difference-box"
        :w="['100%', '100%', '100%', '33%']"
      >
        <c-box
          v-if="index < differences.length - 1"
          class="difference-bar"
          :display="['none', 'none', 'none', 'block']"
        />

        <c-text
          class="difference-index"
          :font-size="['xl', '2xl']"
          font-weight="600"
        >
          {{ index + 1 }}
        </c-text>

        <c-stack class="difference-data">
          <c-heading
            as="h3"
            :font-size="['xl', '2xl']"
            font-weight="400"
            :mt="['0px', '0px', '0px', '3.5rem']"
          >
            {{ difference.title }}
          </c-heading>

          <c-text :font-size="['lg', 'xl']" :font-weight="400">
            {{ difference.description }}
          </c-text>
        </c-stack>
      </c-stack>
    </c-flex>
  </c-flex>
</template>

<script>
import { CFlex, CText, CButton, CHeading, CStack, CBox } from "@chakra-ui/vue";

export default {
  components: {
    CFlex,
    CText,
    CButton,
    CHeading,
    CStack,
    CBox
  },
  data() {
    return {
      differences: [
        {
          title: "Expertise",
          description:
            "We leverage our deep knowledge of the LATAM tech industry to connect you with the region's top talent."
        },
        {
          title: "Quality",
          description:
            "Our veteran tech and HR team upholds rigorous vetting procedures, ensuring each candidate we place is a perfect technical and cultural fit."
        },
        {
          title: "Consistency",
          description:
            "We continually coach our professionals while maintaining close collaboration with your organization. Sustaining the highest quality is our priority."
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.difference-container {
  overflow: hidden;
  z-index: 0;
  position: relative;
  max-width: 1200px;
}

.difference-box {
  position: relative;
  padding: 0 1.5rem;
  align-items: center;
}

.difference-bar {
  width: 100%;
  height: 2px;
  background-color: #30303085;
  position: absolute;
  top: 24px;
  left: calc(50%);
}

.difference-index {
  height: 48px;
  width: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f2f2f2;
  background-color: var(--sti-color-button);
  z-index: 1;
}

.difference-data {
  text-align: center;
}

@media (max-width: 991px) {
  .difference-box {
    padding: 5% 0;
  }
}
</style>
