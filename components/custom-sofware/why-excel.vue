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
      <c-heading
        as="h2"
        :font-weight="600"
        :font-size="['2xl', '3xl', '4xl', '5xl']"
      >
        Why we excel. Why us?
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

        <c-stack
          class="difference-data"
          data-aos="fade-left"
          :data-aos-delay="(index + 1) * 450"
        >
          <c-text
            :font-size="['xl', '2xl']"
            font-weight="600"
            :mt="['0px', '0px', '0px', '3.5rem']"
          >
            {{ difference.title }}
          </c-text>

          <c-text :font-size="['lg', 'xl']" :font-weight="300">
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
          title: "Partnership",
          description:
            "We're your partners in success. At Stack IT, our primary aim is to maximize the value we bring to our clients. We take pride in creating, managing, and delivering products that aren't just high-quality, but also impactful."
        },
        {
          title: "Quality",
          description:
            "Our culture is one of individual excellence, team synergy, and structured process. We invest in meticulous hiring practices, proactive team coaching, and foster an environment that values creativity, teamwork, and accountability."
        },
        {
          title: "Expertise",
          description:
            "Project roadblocks are inevitable. Regardless of the issue, it takes an expert team to keep things on track. With years of industry wisdom, and unwavering determination, we're the team to call when the going gets tough."
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
