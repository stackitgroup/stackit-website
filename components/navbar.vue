<template>
  <c-box id="nav" :class="{sticky: active}">
    <c-flex
      id="nav-container"
      :class="toggleNavClass()"
      :justify="['center', 'center', 'space-between']"
      w="100%"
      wrap="wrap"
    >
      <router-link to="/">
        <c-image class="logo" :w="['160px', '160px', '235px']" src="/stackit-logo.png" />
      </router-link>

      <c-flex
        class="nav-links"
        :font-size="['lg', 'xl']"
        :w="['100%', '100%', 'fit-content']"
        justify="center"
        :mt="['1rem', '1rem', 0]"
      >
        <router-link to="/" exact>
          Home
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
      return 'nav'
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

  .logo {
    width: 160px;
  }
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
