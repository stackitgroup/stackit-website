<template>
  <div>
    <c-drawer
      :is-open="isOpen"
      placement="right"
      :on-close="close"
      :initial-focus-ref="()=>$refs.inputInsideModal"
    >
      <c-drawer-overlay />
      <c-drawer-content
        data-aos="fade-left"
        data-aos-delay="150"
        h="100%"
      >
        <c-drawer-header>
          <c-text class="obar" :font-size="['2xl', '3xl', '4xl', '5xl']" :font-weight="400">
            Contact us
          </c-text>
        </c-drawer-header>

        <c-drawer-body>
          <c-stack v-if="!isSent" class="contact-form" :spacing="[4, 6]" :my="['0.5rem', '1.5rem']">
            <c-input
              v-model="form.name"
              :h="['auto', '3rem']"
              placeholder="First name"
              is-required
              :size="['md', 'lg']"
              maxlength="150"
            />
            <c-input
              v-model="form.email"
              type="email"
              :h="['auto', '3rem']"
              placeholder="Email"
              is-required
              :size="['md', 'lg']"
              maxlength="150"
            />
            <c-input
              v-model="form.phone"
              type="tel"
              :h="['auto', '3rem']"
              placeholder="Phone number"
              is-required
              :size="['md', 'lg']"
              maxlength="150"
            />
            <c-textarea
              v-model="form.message"
              :h="['auto', '9rem']"
              placeholder="Message"
              is-required
              :size="['md', 'lg']"
              maxlength="1500"
            />
          </c-stack>

          <c-stack v-else spacing="1rem">
            <no-ssr>
              <sweetalert-icon icon="success" />
            </no-ssr>
            <c-heading as="h1" :font-weight="400" :font-size="['4xl']" text-align="center" color="contact.title">
              Message sent
            </c-heading>
            <c-text :font-weight="400" :font-size="['lg']" text-align="center" color="contact.description">
              Thank you for reaching out, we will be in touch within 24 hours.
            </c-text>
          </c-stack>

          <c-button
            v-if="!isSent"
            mt="1rem"
            class="btn-main"
            right-icon="arrow-forward"
            rounded="10px"
            size="lg"
            font-size="xl"
            font-weight="400"
            :disabled="isFormValid"
            :is-loading="isLoading"
            loading-text="Sending"
            @click="sendMessage()"
          >
            SEND MESSAGE
          </c-button>
        </c-drawer-body>

        <c-drawer-footer border-top="1px" color="#dadada">
          <c-flex w="100%" justify="flex-end" my="0.5rem">
            <c-button
              class="btn-close"
              rounded="10px"
              size="lg"
              font-size="xl"
              font-weight="400"
              @click="close()"
            >
              CLOSE
              <c-icon name="close" />
            </c-button>
          </c-flex>
        </c-drawer-footer>
      </c-drawer-content>
    </c-drawer>
  </div>
</template>

<script>
import {
  CDrawer,
  CDrawerBody,
  CDrawerFooter,
  CDrawerHeader,
  CDrawerOverlay,
  CDrawerContent,
  CDrawerCloseButton,
  CStack,
  CButton,
  CInput,
  CHeading,
  CText,
  CTextarea,
  CImage,
  CBox,
  CFlex,
  CIcon,
} from '@chakra-ui/vue'

const axios = require('axios').default

export default {
  components: {
    CDrawer,
    CDrawerBody,
    CDrawerFooter,
    CDrawerHeader,
    CDrawerOverlay,
    CDrawerContent,
    CDrawerCloseButton,
    CStack,
    CButton,
    CInput,
    CHeading,
    CText,
    CTextarea,
    CImage,
    CBox,
    CFlex,
    CIcon,
  },
  data () {
    return {
      api: 'https://stackit.b4a.io/parse/classes',
      headers: {
        'X-Parse-Application-Id': 'MHe5i3Mlyj2o3MTb1XItqVVFqReD3POoTiw976fT',
        'X-Parse-REST-API-Key': 'pQKgZSmwVT3IFsDiO0iO8RY1bzHOyBFzfZUJK7dD',
        'Content-Type': 'application/json',
      },
      isOpen: false,
      isSent: false,
      isLoading: false,
      form: {
        name: '',
        phone: '',
        email: '',
        message: '',
      },
    }
  },
  computed: {
    isFormValid() {
      const errors = []

      if (!this.form.name) {
        errors.push('FirstName is required.')
      }

      if (!this.form.phone) {
        errors.push('Phone number is required.')
      }

      if (!this.form.email) {
        errors.push('Email is required.')
      } else if (!this.validEmail(this.form.email)) {
        errors.push('Email is not valid.')
      }

      if (!this.form.message) {
        errors.push('Message is required.')
      }

      return errors.length > 0
    }
  },
  methods: {
    open() {
      this.isOpen = true
      this.isSent = false
    },
    close() {
      this.isOpen = false
      this.isSent = false
    },
    async sendMessage() {
      this.isLoading = true

      try {
        await axios.post(`${this.api}/Contact`, this.form, { headers: this.headers })
        this.isSent = true

        this.$gtag('event', 'submit', {
          eventCategory: 'contact-form',
          eventLabel: 'dialog',
        })
      } catch (error) {
        console.error(error)

        this.$toast({
          title: 'Something went wrong.',
          description: 'Sorry we couldn\'t send your message. Please try again.',
          status: 'error',
          duration: 5000
        })
      }

      this.isLoading = false
    },
    validEmail (email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>

<style lang="scss" scoped>
.lets-talk {
  background-image: linear-gradient(90deg, #eb4256 0%, #0c0263 100%);
}

.obar {
  position: relative;
  width: fit-content;
}

.obar::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 80%;
  height: 4px;
  background-image: linear-gradient(90deg, #eb4256 0%, #ffa363 100%);
}

.btn-close {
  background-color: var(--sti-color-button-close);
  color: white;
  height: 35px;
  border: 1px solid var(--sti-color-button-close);
  border-radius: 10px;

  &:hover {
    color: var(--sti-color-button-close);
    background-color: var(--sti-color-button-close-hover) !important;
    border: 1px solid var(--sti-color-button-close);
  }

  svg {
    width: 12px;
    margin-left: 5px;
  }
}
</style>
