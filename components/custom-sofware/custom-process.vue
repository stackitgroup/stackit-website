<template>
  <c-flex
    class="process-container"
    direction="column"
    justify="center"
    align="center"
  >
    <c-stack
      w="100%"
      spacing="0"
      display="flex"
      flex-direction="row"
      align-items="center"
    >
      <c-image
        src="/stackit_item.png"
        :w="['40px']"
        :h="['40px']"
        :margin-right="['10px']"
      />
      <c-heading aas="h2" :font-weight="400" :font-size="['2xl', '3xl', '4xl']">
        How to Work Together
      </c-heading>
    </c-stack>

    <c-flex
      direction="column"
      align="flex-end"
      w="100%"
      mt="2rem"
      :gap="['20px']"
    >
      <c-flex
        v-for="(item, index) in steps"
        :key="`process-${index}`"
        class="process-box"
        spacing="5"
        :mr="[0, 0, 0, `${10 * index}%`, `${10 * index}%`]"
        align="center"
      >
        <c-flex
          class="step-info"
          border="0.125rem solid"
          :border-color="item.color"
          direction="column"
          justify="start"
          :p="['1rem', '1rem', '1.5rem']"
          :pr="['4.5rem', '6rem', '7.5rem']"
          :mr="['3.25rem', '4.125rem', '5rem']"
          :gap="['20px']"
        >
          <c-text :font-weight="600" :font-size="['xl', 'xl', '2xl']">
            {{ item.title }}
          </c-text>
          <c-text
            :font-size="['sm', 'md', 'lg']"
            :max-width="['620px']"
            :font-weight="300"
          >
            {{ item.description }}
          </c-text>
        </c-flex>
        <c-box
          class="step-image"
          display="flex"
          border="0.125rem solid"
          :border-color="item.color"
          :w="['20%']"
          :min-width="['200px']"
          :height="['100%']"
          align-items="center"
          justify-content="center"
        >
          <c-image w="65%" h="65%" :src="`/process/${item.image}`" />
        </c-box>
      </c-flex>
    </c-flex>
  </c-flex>
</template>

<script>
import {
  CFlex,
  CText,
  CButton,
  CHeading,
  CStack,
  CBox,
  CImage
} from "@chakra-ui/vue";

export default {
  components: {
    CFlex,
    CText,
    CButton,
    CHeading,
    CStack,
    CBox,
    CImage
  },
  data() {
    return {
      steps: [
        {
          title: "Listen",
          description:
            "We pay careful attention to your business goals, using this understanding to gauge project complexity and size accurately.",
          image: "custom-software/listen.png",
          color: "#354a5e"
        },
        {
          title: "Plan",
          description:
            "Armed with your vision and our expertise, we craft a comprehensive plan of action. This includes projected timelines for feature and functionality delivery, fostering an environment of agile teams, dynamic work, insightful discussions, and functional results.",
          image: "custom-software/plan.png",
          color: "#3f5f7e"
        },
        {
          title: "Succeed",
          description:
            "We don't just deliver code; we deliver success, neatly packaged and ready to integrate seamlessly into your business. Let’s talk! Discover how Stack IT can drive your digital transformation.",
          image: "custom-software/succeed.png",
          color: "#0d046d"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.process-container {
  overflow: hidden;
  padding: 3% 5%;
  max-width: 1200px;
  margin: 0 auto;
}

.process-box {
  position: relative;
  min-height: 11rem;
  flex-direction: column;
}

.step-info {
  border-radius: 1.25rem;
  min-height: 11.25rem;
}

.step-image {
  content: "";
  background-color: white;
  border-radius: 50%;
  position: absolute;
  right: 0;
}

@media (max-width: 768px) {
  .step-image {
    height: 180px;
    width: 180px;
    position: relative;
    margin: 20px 0;
  }

  .step-info {
    padding-right: 1rem;
    margin-right: 0;
  }
}
</style>
