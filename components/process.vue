<template>
  <c-flex
    class="process-container"
    direction="column"
    justify="center"
    align="center"
  >
    <c-stack w="100%" spacing="0">
      <c-heading
        as="h1"
        :font-weight="600"
        :font-size="['2xl', '3xl', '4xl', '5xl']"
      >
        We Create Custom Software For Your Business.
      </c-heading>

      <c-heading
        as="h1"
        color="st-orange"
        :font-weight="600"
        :font-size="['2xl', '3xl', '4xl', '5xl']"
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
      <c-box
        v-for="(item, index) in steps"
        :key="`process-${index}`"
        class="process-box"
        spacing="6"
        :w="['100%', '100%', '100%', '80%', '80%']"
        :my="['0.75rem', '0.75rem', '1rem', '1.5rem']"
        :mr="[0, 0, 0, `${10 * index}%`, `${10 * index}%`]"
      >
        <c-flex
          class="step-info"
          :bg="item.color"
          direction="column"
          justify="center"
        >
          <c-text text-align="center" :font-weight="600" :font-size="['xl', 'xl', '2xl']">
            Step {{ index + 1 }}. {{ item.title }}
          </c-text>
          <c-text :font-size="['sm', 'md', 'lg']">
            {{ item.description }}
          </c-text>
        </c-flex>
        <c-box
          class="step-image"
          :display="['none', 'flex']"
          border="5px solid"
          :border-color="item.color"
          w="100px"
          height="100px"
          align-items="center"
          justify-content="center"
        >
          <c-image :src="`/process/${item.image}`" />
        </c-box>
      </c-box>
    </c-flex>
  </c-flex>
</template>

<script>
import { CFlex, CText, CButton, CHeading, CStack, CBox, CImage } from '@chakra-ui/vue'

export default {
  components: {
    CFlex,
    CText,
    CButton,
    CHeading,
    CStack,
    CBox,
    CImage,
  },
  data() {
    return {
      steps: [
        {
          title: 'Initial Consultation.',
          description: 'We listen carefully to understand what your business goals are. From this consultation we make a determination of the project complexity and size.',
          image: 'step1.png',
          color: '#354a5e'
        },
        {
          title: 'Plan',
          description: 'We create an overall plan of execution which includes the projected delivery times for all the features and functionalities.',
          image: 'step2.png',
          color: '#3f5f7e'
        },
        {
          title: 'Build and Deliver Iteratively.',
          description: 'We are a modern agile team. This means we build products that solve actual business needs. We have the ability to continuously re-adjust our work and stay inline with new insights. We do this by providing working functionality in increments to allow for rapid feedback from actual users.',
          image: 'step3.png',
          color: '#0d046d'
        },
      ],
    }
  }
}
</script>

<style scoped lang="scss">
  .process-container {
    overflow: hidden;
  }

  .process-box {
    position: relative;
    height: 176px;
  }

  .step-info {
    color: white;
    border-radius: 20px;
    margin-right: 68px;
    padding-right: calc(110px + 2.5rem);
    height: 180px;
    padding-left: 2.5rem;
  }

  .step-image {
    content: '';
    width: 180px;
    height: 180px;
    background-color: white;
    border-radius: 50%;
    position: absolute;
    right: 0;
    top: 0;
  }

  .step-image img {
    width: 100px;
  }
</style>
