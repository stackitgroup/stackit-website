<template>
  <c-flex
    class="difference-container"
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
        We’re Different.
      </c-heading>

      <c-heading
        as="h1"
        color="st-orange"
        :font-weight="600"
        :font-size="['2xl', '3xl', '4xl', '5xl']"
      >
        Here’s Why.
      </c-heading>
    </c-stack>

    <c-flex :mt="['1rem', '1rem', '1rem', '5.5rem']" wrap="wrap">
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
          title: 'Authentic Desire For Our Clients To Succeed',
          description: 'Our main focus is to provide maximum value to our clients. We take ownership not only in managing and creating a high quality product but in ensuring what we deliver is impactful.',
        },
        {
          title: 'Work Quality',
          description: 'We’ve built a culture that’s founded on individual pride, team cohesion, and structure. We sustain this culture by investing on how we vet our new team members, how we coach our teams and by establishing processes that reward teamwork, creativity and accountability.',
        },
        {
          title: 'Realigning Off Track Projects',
          description: 'There are many reasons why projects get in trouble. No matter the reason it takes a mature, disciplined and expert team to rescue the project. We have years of accumulated wisdom, technical know-how, and the grit to complete the job.',
        },
      ],
    }
  }
}
</script>

<style scoped lang="scss">
.difference-container {
  overflow: hidden;
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
  z-index: 1;
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
