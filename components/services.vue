<template>
  <c-stack :spacing="['2rem', '3rem', '4rem', '7rem']">
    <c-flex
      v-for="(service, index) in services"
      :key="`service-${index}`"
      class="service-container"
      :class="{'reverse': index % 2 === 0}"
      wrap="wrap"
      justify="space-between"
    >
      <c-flex
        :mt="['40px', '40px', '40px', 0]"
        :width="['100%', '100%', '100%', '28%', '34%']"
        :justify="['center', 'center', 'center', index % 2 === 0 ? 'flex-end' : 'flex-start']"
      >
        <c-image
          class="summary-image"
          :src="`services/${service.image}`"
        />
      </c-flex>

      <c-box
        :width="['100%', '100%', '100%', '70%', '65%']"
      >
        <c-box display="flex" align-items="center" :spacing="3">
          <c-heading as="h1" :font-size="['2xl', '3xl', '4xl', '5xl']" font-weight="600">
            {{ service.title }}
          </c-heading>
        </c-box>

        <c-stack class="stack" :spacing="6" :font-size="['lg', 'xl']">
          <c-text v-for="(paragraph, pindex) in service.description" :key="`service-${index}-${pindex}`">
            {{ paragraph }}
          </c-text>
        </c-stack>
      </c-box>
    </c-flex>
  </c-stack>
</template>

<script>
import { CBox, CFlex, CStack, CImage, CText, CHeading } from '@chakra-ui/vue'

export default {
  components: {
    CBox,
    CFlex,
    CStack,
    CImage,
    CHeading,
    CText,
  },
  data() {
    return {
      services: [
        {
          title: 'Custom Software Development',
          description: [
            'We are a full-stack mobile and web application software development team. Relying on the latest in software technologies and agile development practices, we’ve built solutions to help businesses transform their business operations, logistics, product ideas, and much, much more.',
            'Bottom line? We can build you just about anything.',
          ],
          image: 'service-custom-software.png',
        },
        {
          title: 'Maintenance & Support',
          description: [
            'We provide ongoing maintenance and support. That includes making enhancements, fixing bugs, and monitoring your system.'
          ],
          image: 'support.png',
        },
        {
          title: 'Consulting',
          description: [
            'We review the usability of your existing software functionality, audit your code, and test your cloud infrastructure to provide you with professional advice to help you make critical business decisions.'
          ],
          image: 'consulting.png',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#title-icon {
  margin-right: 1.6rem;
}

.stack {
  margin-top: 1.5rem;
}

.summary-image {
  border-radius: 20px;
  filter: drop-shadow(10px 10px 7px rgba(0, 0, 0, 0.1));
}

.service-container {
  flex-direction: row;

  &.reverse {
    flex-direction: row-reverse;
  }
}

@media (max-width: 991px) {
  .service-container {
    flex-direction: column-reverse !important;
  }
}
</style>
