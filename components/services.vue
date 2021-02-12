<template>
  <c-stack :spacing="['7rem']">
    <c-box
      v-for="(service, index) in services"
      :key="`service-${index}`"
      display="flex"
      flex-wrap="wrap"
      justify-content="space-between"
    >
      <c-box
        v-if="index % 2 === 0"
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

      <!--   TODO Improve this code   -->
      <c-box
        v-if="index % 2 !== 0"
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
  </c-stack>
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
  data() {
    return {
      services: [
        {
          title: 'Custom Software',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.',
          image: 'service-custom-software.png',
        },
        {
          title: 'Staffing',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.',
          image: 'service-custom-software.png',
        },
        {
          title: 'Consulting',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.',
          image: 'service-custom-software.png',
        },
        {
          title: 'Maintenance & Support',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.',
          image: 'service-custom-software.png',
        },
      ],
    }
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
