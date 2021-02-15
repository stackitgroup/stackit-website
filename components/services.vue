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
        :width="['100%', '100%', '100%', '30%', '35%']"
        :justify="['center', 'center', 'center', index % 2 === 0 ? 'flex-end' : 'flex-start']"
      >
        <c-image
          :data-aos="index % 2 === 0 ? 'fade-left' : 'fade-right'"
          data-aos-delay="150"
          class="summary-image"
          :src="`services/${service.image}`"
        />
      </c-flex>

      <c-box
        :width="['100%', '100%', '100%', '70%', '65%']"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="150"
      >
        <c-box display="flex" align-items="center" :spacing="3">
          <c-heading as="h1" :font-size="['2xl', '3xl', '4xl', '5xl']" font-weight="600">
            {{ service.title }}
          </c-heading>
        </c-box>

        <c-stack class="stack" :spacing="6" :font-size="['lg', 'xl']">
          <c-text>
            {{ service.description }}
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
          title: 'Custom Software',
          description: 'We are full-stack developers with expertise in mobile and web applications, and front-end and back-end development. Relying on the latest in coding technology and agile development practices, we’ve built software to help businesses transform their operations, create new payments processing, integrate existing systems, and much, much more.  Bottom line? We can build you just about anything.',
          image: 'service-custom-software.png',
        },
        {
          title: 'Staffing',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.',
          image: 'staffing.png',
        },
        {
          title: 'Consulting',
          description: 'We review your existing software design, test your cloud infrastructure, and audit your code to make sure everything is clean, secure, and effective. This includes an assessment of your security practices and scalability of your software architecture. If your system isn’t looking up to par, we’ll help you fix things–fast.',
          image: 'consulting.png',
        },
        {
          title: 'Maintenance & Support',
          description: 'We won’t leave you hanging–we provide ongoing support and maintenance to make sure your software is running well, 24/7. That includes fixing bugs, monitoring your system, maintaining your database, ensuring server security and collecting analytics on an ongoing basis.',
          image: 'support.png',
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
