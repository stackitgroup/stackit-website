<template>
  <c-box id="navbar" class="sticky" color="white">
    <c-flex
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
    >
      <a href="/">
        <c-image src="./favicon.ico" mr="2" />
        <c-heading font-size="3xl">
          Stackit
        </c-heading>
      </a>
    </c-flex>

    <a href="/">Stackit</a>
    <a href="/contact">Contact</a>
    <a href="/case-study">Case Study</a>
  </c-box>
</template>

<script>
import { CBox, CFlex, CHeading, CImage } from '@chakra-ui/vue'

export default {
  components: {
    CBox,
    CFlex,
    CHeading,
    CImage
  },
  mounted () {
  }
}
</script>

<style scoped>
/* Style the navbar */
#navbar {
  overflow: hidden;
  background-color: #333;
  z-index: 1000;
}

/* Navbar links */
#navbar a {
  float: right;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px;
  text-decoration: none;
}

/* The sticky class is added to the navbar with JS when it reaches its scroll position */
.sticky {
  position: fixed;
  top: 0;
  width: 100%;
}
</style>
