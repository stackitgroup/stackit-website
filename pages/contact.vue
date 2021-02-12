<template>
  <div class="container">
    <banner custom="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />

    <c-stack spacing="2rem" :w="['100%']" :px="[5, 5, 5, '5%', '10%']" :my="'6rem'">
      <c-heading as="h1" font-size="6xl" font-weight="600" max-w="60%">
        Let's talk about your project
      </c-heading>

      <c-text font-size="lg" max-w="60%">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
      </c-text>

      <c-flex justify="space-between">
        <c-stack :w="['60%']" spacing="6" wrap="wrap">
          <c-input v-model="form.firstName" placeholder="Name" is-required size="lg" />
          <c-flex justify="space-between">
            <c-input v-model="form.email" :w="['45%']" placeholder="Email" is-required size="lg" />
            <c-input v-model="form.email" :w="['45%']" placeholder="Phone" is-required size="lg" />
          </c-flex>
          <c-textarea v-model="form.message" placeholder="Message" is-required size="lg" />
        </c-stack>

        <c-stack spacing="3.5rem" :w="['30%']">
          <c-flex align="center">
            <c-flex class="icon-container" mr="8">
              <c-image src="/contact/pin.svg" h="32px" w="32px" />
            </c-flex>
            <c-text font-size="lg">
              Lorem ipsum dolor sit amet, consectetur
            </c-text>
          </c-flex>
          <c-flex align="center">
            <c-flex class="icon-container" mr="8">
              <c-image src="/contact/message.svg" h="32px" w="32px" />
            </c-flex>
            <c-text font-size="lg">
              Lorem ipsum dolor sit amet, consectetur
            </c-text>
          </c-flex>
          <c-flex align="center">
            <c-flex class="icon-container" mr="8">
              <c-image src="/contact/phone.svg" h="32px" w="32px" />
            </c-flex>
            <c-text font-size="lg">
              Lorem ipsum dolor sit amet, consectetur
            </c-text>
          </c-flex>
        </c-stack>
      </c-flex>

      <c-button
        class="btn-main"
        right-icon="arrow-forward"
        rounded="10px"
        size="lg"
        font-size="xl"
        font-weight="400"
        w="290px"
        :disabled="isFormValid"
        @click="sendMessage()"
      >
        SEND MESSAGE
      </c-button>
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
      isOpen: false,
      form: {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      },
    }
  },
  computed: {
    isFormValid() {
      const errors = []

      if (!this.form.firstName) {
        errors.push('FirstName is required.')
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
    close() {
      this.isOpen = false
    },
    async sendMessage() {
      console.warn('loading...')
      try {
        await axios.post(`${this.api}/Contact`, this.form, { headers: this.headers })
        console.warn('ok')
      } catch (error) {
        console.error(error)
      }
    },
    validEmail (email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>

<style type="scss" scoped>
.icon-container {
  background-image: linear-gradient(90deg, #ffa363 0%, #eb4256 100%);
  border-radius: 50%;
  height: 70px;
  width: 70px;
  justify-content: center;
  align-items: center;
}
</style>
