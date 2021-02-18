<template>
  <div class="container case-study">
    <banner custom="We take ownership not only in creating a high quality product but in ensuring what we deliver is impactful." />

    <c-stack :px="[5, 5, 5, '5%', '10%']">
      <c-heading
        class="case-title"
        :font-size="['2xl', '3xl', '4xl', '5xl']"
        font-weight="600"
        data-aos="fade-zoom-in"
        data-aos-delay="100"
      >
        About Us
      </c-heading>

      <c-box
        class="case-data"
        :font-size="['lg', 'xl']"
        data-aos="fade-zoom-in"
        data-aos-delay="200"
      >
        <p>We build custom software–to the highest standards, with clean code, following agile development practices.</p>
        <p>But more than that, we serve our clients.</p>
        <p>That means always building a solid technical foundation, so that applications last and are scalable. That means approaching every project with fresh enthusiasm and a learner’s mindset. That means making informed recommendations on how to complete a project on time and within budget.</p>
        <p>At Stackit, we’re committed to building quality custom software for you.</p>
      </c-box>
    </c-stack>
  </div>
</template>

<script lang="js">
import { CBox, CStack, CHeading, CText } from '@chakra-ui/vue'
import Banner from '@/components/banner'

export default {
  name: 'App',
  components: {
    Banner,
    CBox,
    CStack,
    CHeading,
    CText
  },
  data() {
    return {}
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.case-study {
  padding-bottom: 5rem;

  .case-title {
    margin-top: 5rem;
    margin-bottom: 3.125rem;
  }

  .case-data {
    p {
      margin-bottom: 1.5rem;
    }
  }

  .lets-talk {
    margin-top: 3.5rem;
  }
}
</style>
