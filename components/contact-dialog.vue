<template>
  <div>
    <c-button ref="btnRef" @click="isOpen =true">
      Open Drawer
    </c-button>

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
      >
        <form>
          <c-drawer-close-button />
          <c-drawer-header>
            Contact
          </c-drawer-header>

          <c-drawer-body>
            <c-stack spacing="6">
              <c-input v-model="form.firstName" placeholder="First name" is-required size="lg" />
              <c-input v-model="form.lastName" placeholder="Last name" size="lg" />
              <c-input v-model="form.email" placeholder="Email" is-required size="lg" />
              <c-textarea v-model="form.message" placeholder="Message" is-required size="lg" />
            </c-stack>
          </c-drawer-body>

          <c-drawer-footer>
            <c-button
              class="btn-main"
              right-icon="arrow-forward"
              rounded="10px"
              size="lg"
              font-size="xl"
              font-weight="400"
              :disabled="isFormValid"
              @click="sendMessage()"
            >
              SEND MESSAGE
            </c-button>
          </c-drawer-footer>
        </form>
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
  CTextarea
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
    CTextarea
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
      form: {
        firstName: 'Isaias',
        lastName: '',
        email: 'isaias@stackitgroup.com',
        message: 'Hello world!!',
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

<style scoped type="scss">
.lets-talk {
  background-image: linear-gradient(90deg, #eb4256 0%, #0c0263 100%);
}
</style>
