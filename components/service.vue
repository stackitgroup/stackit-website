<template>
  <c-box display="flex" flex-wrap="wrap" justify-content="space-between" :px="[5, 5, 5, '5%', '10%']" :py="['3rem']">
    <c-box
      v-if="position === 'left'"
      :mt="['40px', '40px', '40px', 0]"
      :width="['100%', '100%', '60%', '30%', '35%']"
    >
      <c-image
        data-aos="fade-right"
        data-aos-delay="150"
        class="summary-image"
        :src="service.image"
      />
    </c-box>

    <c-box :width="['100%', '100%', '100%', '70%', '65%']">
      <c-box display="flex" align-items="center" :spacing="3">
        <c-heading
          as="h1"
          :font-size="['lg', 'lg', '2xl', '4xl', '6xl']"
          font-weight="600"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          {{ service.title }}
        </c-heading>
      </c-box>

      <c-stack
        class="stack"
        :spacing="6"
        font-size="xl"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <c-text>
          {{ service.description }}
        </c-text>
      </c-stack>
    </c-box>

    <c-box
      v-if="position === 'right'"
      :mt="['40px', '40px', '40px', 0]"
      :width="['100%', '100%', '60%', '30%', '35%']"
    >
      <c-image
        data-aos="fade-left"
        data-aos-delay="150"
        class="summary-image"
        :src="service.image"
      />
    </c-box>
  </c-box>
</template>

<script>
import { CBox, CStack, CImage, CText, CHeading } from '@chakra-ui/vue'

export default {
  components: {
    CBox,
    CStack,
    CImage,
    CHeading,
    CText,
  },
  props: {
    service: {
      type: Object,
      default: () => {
        return { title: '', description: '', image: '' }
      },
    },
    position: {
      type: String,
      default: 'left',
      validator: (position) => {
        return ['left', 'right'].includes(position)
      }
    },
  },
}
</script>

<style scoped>
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
</style>
