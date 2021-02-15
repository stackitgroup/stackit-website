<template>
  <c-flex
    class="banner"
    direction="column"
    justify="center"
    align="center"
  >
    <c-stack w="100%" spacing="0">
      <c-heading
        as="h1"
        :font-weight="600"
        :font-size="['2xl', '3xl', '4xl', '5xl']"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="100"
      >
        We’re Different.
      </c-heading>

      <c-heading
        as="h1"
        color="st-orange"
        :font-weight="600"
        :font-size="['2xl', '3xl', '4xl', '5xl']"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="100"
      >
        Here’s Why.
      </c-heading>
    </c-stack>

    <c-flex :mt="['1rem', '1rem', '1rem', '5.5rem']" wrap="wrap">
      <c-stack
        v-for="(difference, index) in differences"
        :key="`difference-${index}`"
        class="difference-box"
        :w="['100%', '100%', '100%', '25%']"
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
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
        >
          {{ index + 1 }}
        </c-text>

        <c-stack class="difference-data" data-aos="fade-left" :data-aos-delay="(index + 1) * 450">
          <c-text :font-size="['xl', '2xl']" font-weight="600" :mt="['0px', '0px', '0px', '3.5rem']">
            {{ difference.title }}
          </c-text>

          <c-text :font-size="['lg', 'xl']">
            {{ difference.description }}
          </c-text>
        </c-stack>
      </c-stack>
    </c-flex>
  </c-flex>
</template>

<script>
import { CFlex, CText, CButton, CHeading, CStack, CBox } from '@chakra-ui/vue'

export default {
  components: {
    CFlex,
    CText,
    CButton,
    CHeading,
    CStack,
    CBox,
  },
  data() {
    return {
      differences: [
        {
          title: 'Coding Quality',
          description: 'We can rescue your failing software project. With skill and finesse, we can transition your software out of the wrong hands and get it back on its feet.',
        },
        {
          title: 'Expertise with Failures',
          description: 'We hold all our code to the highest standards. That means relying on development practices such as iterative and incremental development, test-driven development, and CLEAN code.',
        },
        {
          title: 'Care for Our Clients',
          description: 'We care about our clients. Big time. We apply our experience, skill, and expertise to your project to get you a great result from both a technical and business perspective.',
        },
        {
          title: 'Systematic Approach',
          description: 'We use the latest in development and management practices–including agile, scrum, lean, and kanban processes.',
        },
      ],
    }
  }
}
</script>

<style scoped lang="scss">
.banner {
  position: relative;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

.difference-box {
  position: relative;
  padding: 0 1.5rem;
}

.difference-bar {
  width: 100%;
  height: 2px;
  background-color: #e8e8e8;
  position: absolute;
  top: 24px;
  z-index: -1;
}

.difference-index {
  height: 48px;
  width: 48px;
  border: 2px solid #e8e8e8;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
}

@media (max-width: 991px) {
  .difference-box {
    margin-top: 1.75rem;
  }

  .difference-data {
    margin-left: calc(2.5rem + 48px);
  }

  .difference-index {
    position: absolute;
    top: calc(50% - 24px);
  }
}
</style>
