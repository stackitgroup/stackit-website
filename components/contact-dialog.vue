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
          <c-input ref="inputInsideModal" placeholder="First name" />
          <c-input ref="inputInsideModal" placeholder="Last name" />
          <c-input ref="inputInsideModal" placeholder="Email" />
          <c-textarea placeholder="Message" />
        </c-drawer-body>

        <c-drawer-footer>
          <c-button variant="outline" mr="3" @click="isOpen = false">
            Cancel
          </c-button>
          <c-button variant-color="blue">
            Save
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
