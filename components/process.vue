<template>
  <c-flex
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
        We Create Custom Software For Your Business.
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
        Here's How.
      </c-heading>
    </c-stack>

    <c-flex
      direction="column"
      align="flex-end"
      w="100%"
      max-w="1200px"
      mt="2rem"
    >
      <c-stack
        v-for="(item, index) in process"
        :key="`process-${index}`"
        class="process-box"
        spacing="6"
        :w="['100%', '100%', '100%', '80%', '80%']"
        :my="['0.75rem', '0.75rem', '1rem', '1.5rem']"
        :mr="[0, 0, 0, `${10 * index}%`, `${10 * index}%`]"
        data-aos="fade-left"
        data-aos-delay="150"
      >
        <c-text text-align="center" :font-size="['xl', 'xl', '2xl']">
          {{ item.title }}
        </c-text>
        <c-text :font-size="['md', 'md', 'lg']">
          {{ item.description }}
        </c-text>
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
      process: [
        {
          title: 'Initial Consultation.',
          description: 'We listen carefully to understand what your business goals are. From this consultation we make a determination of the project complexity and size.',
        },
        {
          title: 'Plan',
          description: 'We create an overall plan of execution which includes the projected delivery times for all the features and functionalities.',
        },
        {
          title: 'Build and Deliver Iteratively.',
          description: 'We are a modern agile team. This means we build products that solve actual business needs. We have the ability to continuously re-adjust our work and stay inline with new insights. We do this by providing working functionality in increments to allow for rapid feedback from actual users.',
        },
      ],
    }
  }
}
</script>

<style scoped lang="scss">
  .process-box {
    background-color: #354a5e;
    color: white;
    border-radius: 20px;
    padding: 2.5rem;
  }
</style>
