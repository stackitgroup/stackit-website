<template>
  <div class="container">
    <banner
      custom="Let's build your custom software. If you can envision it, we can build it"
    />

    <c-stack spacing="3rem" :px="[5, 5, 5, '5%', '23%']" :my="'4rem'">
      <c-heading
        as="h1"
        :font-size="['2xl', '3xl', '4xl']"
        font-weight="400"
        w="100%"
      >
        Contact us today to start talking about your project.
      </c-heading>

      <c-box w="100%">
        <c-stack v-if="!isSent" spacing="6" wrap="wrap">
          <c-input
            v-model="form.name"
            h="3.75rem"
            placeholder="Name"
            is-required
            size="lg"
            maxlength="150"
          />
          <c-flex justify="space-between">
            <c-input
              v-model="form.email"
              type="email"
              h="3.75rem"
              :w="['48%']"
              placeholder="Email"
              is-required
              size="lg"
              maxlength="150"
            />
            <c-input
              v-model="form.phone"
              type="tel"
              h="3.75rem"
              :w="['48%']"
              placeholder="Phone"
              size="lg"
              maxlength="150"
            />
          </c-flex>
          <c-textarea
            v-model="form.message"
            h="9.5rem"
            placeholder="Message"
            size="lg"
            maxlength="300"
          />
        </c-stack>

        <c-stack v-else spacing="1rem">
          <no-ssr>
            <sweetalert-icon icon="success" />
          </no-ssr>
          <c-heading
            as="h1"
            :font-weight="400"
            :font-size="['4xl']"
            text-align="center"
            color="contact.title"
          >
            Message sent
          </c-heading>
          <c-text
            :font-weight="400"
            :font-size="['lg']"
            text-align="center"
            color="contact.description"
          >
            Thank you for reaching out, we will be in touch within 24 hours.
          </c-text>
        </c-stack>
      </c-box>

      <c-flex justify="flex-end">
        <c-button
          v-if="!isSent"
          class="btn-main"
          right-icon="arrow-forward"
          rounded="10px"
          size="lg"
          font-size="xl"
          font-weight="400"
          w="290px"
          :disabled="isFormValid"
          :is-loading="isLoading"
          loading-text="Sending"
          @click="sendMessage()"
        >
          SEND MESSAGE
        </c-button>
      </c-flex>
    </c-stack>
  </div>
</template>

<script lang="js">
import { CBox, CFlex, CButton, CInput, CStack, CTextarea, CImage, CText, CHeading } from '@chakra-ui/vue'
import Banner from '@/components/banner'

const axios = require('axios').default

export default {
  name: 'App',
  components: {
    Banner,
    CStack,
    CButton,
    CInput,
    CTextarea,
    CBox,
    CFlex,
    CImage,
    CText,
    CHeading,
  },
  // TODO Move this code to external file
  data () {
    return {
      api: 'https://stackit.b4a.io/parse/classes',
      headers: {
        'X-Parse-Application-Id': 'MHe5i3Mlyj2o3MTb1XItqVVFqReD3POoTiw976fT',
        'X-Parse-REST-API-Key': 'pQKgZSmwVT3IFsDiO0iO8RY1bzHOyBFzfZUJK7dD',
        'Content-Type': 'application/json',
      },
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

      if (!this.form.email) {
        errors.push('Email is required.')
      } else if (!this.validEmail(this.form.email)) {
        errors.push('Email is not valid.')
      }

      return errors.length > 0
    }
  },
  methods: {
    async sendMessage() {
      this.isLoading = true

      try {
        await axios.post(`${this.api}/Contact`, this.form, { headers: this.headers })
        this.isSent = true

        this.$gtag('event', 'submit', {
          eventCategory: 'contact-form',
          eventLabel: 'page',
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
.icon-container {
  background-image: linear-gradient(90deg, #ffa363 0%, #eb4256 100%);
  border-radius: 50%;
  justify-content: center;
  align-items: center;
}

.container {
  position: relative;
  z-index: 0;
}
</style>
