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
        <c-drawer-close-button />
        <c-drawer-header>
          Contact
        </c-drawer-header>

        <c-drawer-body>
          <c-stack spacing="6">
            <c-input placeholder="First name" size="lg" />
            <c-input placeholder="Last name" size="lg" />
            <c-input placeholder="Email" size="lg" />
            <c-textarea placeholder="Message" size="lg" />
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
          >
            SEND MESSAGE
          </c-button>
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
  CTextarea
} from '@chakra-ui/vue'

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
      isOpen: false
    }
  },
  methods: {
    close () {
      this.isOpen = false
    }
  }
}
</script>

<style scoped type="scss">
.lets-talk {
  background-image: linear-gradient(90deg, #eb4256 0%, #0c0263 100%);
}
</style>
