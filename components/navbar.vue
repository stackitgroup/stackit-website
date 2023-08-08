<template>
  <c-box id="nav" :class="{ sticky: active }">
    <c-flex
      id="nav-container"
      :class="toggleNavClass()"
      :justify="['center', 'center', 'space-between']"
      w="100%"
      :max-width="['1200px']"
      :mx="['auto']"
      wrap="wrap"
    >
      <router-link to="/" w="auto">
        <c-image
          class="logo"
          :w="['160px', '160px', '180px']"
          src="/stackit_logo.png"
        />
      </router-link>

      <c-flex
        class="nav-links"
        :font-size="['lg', 'xl']"
        :w="['100%', '100%', 'fit-content']"
        justify="center"
        :mt="['1rem', '1rem', 0]"
      >
        <router-link to="/" exact>
          Staffing
        </router-link>
        <router-link to="/custom-software">
          Custom Software
        </router-link>
        <router-link to="/contact">
          <c-button
            class="btn-main"
            :vertical-align="middle"
            :text-align="center"
            rounded="full"
            size="sm"
            font-size="md"
            font-weight="400"
            :border-bottom="['4px solid transparent']"
          >
            LET'S TALK
          </c-button>
        </router-link>
      </c-flex>
    </c-flex>
  </c-box>
</template>

<script>
import { CBox, CFlex, CHeading, CImage } from "@chakra-ui/vue";

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
    };
  },
  mounted() {
    window.document.onscroll = () => {
      const navBar = document.getElementById("nav");
      this.active = window.scrollY > navBar.offsetTop;
    };
  },
  methods: {
    toggleNavClass() {
      return "nav";
    }
  }
};
</script>

<style lang="scss" scoped>
a {
  color: white;
  text-decoration: none;
}

a:hover {
  transition: linear 100ms;
  color: white;
}

/* two classes, decided on scroll */
.nav {
  height: 70px;
  transition: 100ms;
  align-items: center;
  padding: 0 5%;
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
  background-color: #283c4d;
}

.nav-links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;

  a {
    height: fit-content;
    opacity: 0.8;
    border-bottom: 4px solid transparent;
  }

  a:hover {
    border-bottom: 4px #016fce solid;
    opacity: 1;
  }

  .nuxt-link-active {
    font-weight: bold;
    opacity: 1;
    border-bottom: 4px #016fce solid;
  }

  :last-child {
    border-bottom: 0 solid transparent !important;
  }

  @media (max-width: 768px) {
    gap: 10px;
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .nav {
    height: auto;
    padding: 3% 5%;
  }
}
</style>
