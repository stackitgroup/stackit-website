<template>
  <c-box display="flex" flex-wrap="wrap" justify-content="space-between" :p="[5, 5, 5, '5%', '10%']">
    <c-box :width="['100%', '100%', '100%', '45%', '50%']">
      <c-box display="flex" align-items="center" :spacing="3">
        <!-- TODO Move this color to a new variable -->
        <c-icon id="title-icon" name="star" size="25px" color="#eb4256" />
        <c-heading
          as="h1"
          :font-size="['lg', 'lg', '2xl', '3xl', '5xl']"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          Web Apps
        </c-heading>
      </c-box>

      <!--      <c-box :width="['0', '0', '0', '10%', '10%']"></c-box>-->

      <c-stack
        class="stack"
        :spacing="6"
        font-size="xl"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
      >
        <c-text :font-size="['md', 'lg', '2xl', '3xl']">
          Stackit services web application needs through our engaged, talented, and experienced team members.
        </c-text>

        <c-text>
          Our group of ambitious Designers, back and front end Developers, Project Managers, Quality Assurance engineers, and administrative staff are equipped to engage with the project through well defined processes and accountability.
        </c-text>
        <c-text>
          The accumulation of talent, engagement, and experience allows for the delivery of responsive web applications that are scalable and meet your business requirements.
        </c-text>
      </c-stack>
    </c-box>

    <c-box :mt="['40px', '40px', '40px', 0]" :width="['100%', '100%', '60%', '45%', '45%']">
      <c-image
        data-aos="fade-left"
        data-aos-delay="500"
        class="summary-image"
        src="./web-apps.jpg"
      />
    </c-box>
  </c-box>
</template>

<script>
import { CBox, CStack, CImage, CText, CHeading, CIcon } from '@chakra-ui/vue'

export default {
  components: {
    CBox,
    CStack,
    CImage,
    CHeading,
    CText,
    CIcon,
  },
  methods: {
    mounted() {
      // console.log('mounted')

      // anime({
      //   targets: 'div',
      //   translateX: 250,
      //   rotate: '1turn',
      //   backgroundColor: '#FFF',
      //   duration: 800
      // })
    }
  }
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
