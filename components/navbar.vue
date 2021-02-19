<template>
  <c-box id="nav" :class="{sticky: active}">
    <c-flex
      id="nav-container"
      :class="toggleNavClass()"
      justify="space-between"
      w="100%"
      wrap="wrap"
    >
      <router-link to="/">
        <c-flex
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          :w="['100%', '100%', '100%', 'fit-content']"
          align="center"
        >
          <c-image src="/stackit-bar.png" w="45px" mr="2" />
          <c-heading font-size="3xl">
            Stackit
          </c-heading>
        </c-flex>
      </router-link>

      <c-flex
        class="nav-links"
        :font-size="['lg', 'xl']"
        :w="['100%', '100%', '100%', 'fit-content']"
        :pt="['2rem', 0]"
      >
        <router-link to="/" exact>
          Home
        </router-link>
        <router-link to="/about">
          About us
        </router-link>
        <router-link to="/contact">
          Contact
        </router-link>
        <router-link to="/case-study">
          Case Study
        </router-link>
      </c-flex>
    </c-flex>
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
  data() {
    return {
      active: false
    }
  },
  mounted() {
    window.document.onscroll = () => {
      const navBar = document.getElementById('nav')
      this.active = window.scrollY > navBar.offsetTop
    }
  },
  methods: {
    toggleNavClass() {
      // if (this.active === false) {
      //   return 'nav'
      // } else {
        return 'sticky-nav'
      // }
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  margin: 0 1vw;
}

a:hover {
  transition: linear 100ms;
  color: white;
}

/* two classes, decided on scroll */
.nav {
  transition: 100ms;
  padding: 2rem 3rem;
}

.sticky-nav {
  transition: 100ms;
  padding: 1rem;
}

#nav {
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: transparent;
  position: fixed;
  top: 0;
  z-index: 0;
}

#nav-container {
  z-index: 1100;
}

/* have to add the ID nav (#nav) otherwise the backgrnd color won't change as the previous background color is set in an ID and ID trumps class notation */
#nav.sticky {
  transition: 150ms;
  background-color: #0b0f7d;
}

.nav-links {
  a:hover {
    border-bottom: 4px #ed4c57 solid;
    opacity: 0.9;
  }

  .nuxt-link-active {
    border-bottom: 4px #ed4c57 solid;
  }
}
</style>
