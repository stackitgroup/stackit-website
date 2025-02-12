<template>
  <c-stack :spacing="['2rem', '3rem', '4rem', '7rem']">
    <c-flex
      v-for="(service, index) in services"
      :key="`service-${index}`"
      class="service-container"
      :class="{ reverse: index % 2 === 0 }"
      wrap="wrap"
      justify="space-between"
    >
      <c-flex
        :mt="['40px', '40px', '40px', 0]"
        :width="['100%', '100%', '100%', '28%', '34%']"
        :justify="[
          'center',
          'center',
          'center',
          index % 2 === 0 ? 'flex-end' : 'flex-start'
        ]"
      >
        <c-image class="summary-image" :src="`services/${service.image}`" />
      </c-flex>

      <c-box :width="['100%', '100%', '100%', '70%', '65%']">
        <c-box display="flex" align-items="center" :spacing="3">
          <c-heading
            display="flex"
            flex-direction="row"
            align-items="center"
            as="h2"
            :font-size="['2xl', '3xl', '4xl']"
            :font-weight="400"
          >
            <c-image
              src="/stackit_item.png"
              :w="['40px']"
              :h="['40px']"
              :margin-right="['10px']"
            />
            {{ service.title }}
          </c-heading>
        </c-box>

        <c-stack
          class="stack"
          :spacing="6"
          :font-size="['lg', 'xl']"
          :font-weight="400"
        >
          <c-text
            v-for="(paragraph, pindex) in service.description"
            :key="`service-${index}-${pindex}`"
          >
            {{ paragraph }}
          </c-text>
        </c-stack>
      </c-box>
    </c-flex>
  </c-stack>
</template>

<script>
import { CBox, CFlex, CStack, CImage, CText, CHeading } from "@chakra-ui/vue";

export default {
  components: {
    CBox,
    CFlex,
    CStack,
    CImage,
    CHeading,
    CText
  },
  data() {
    return {
      services: [
        {
          title: "Software Development",
          description: [
            "Stack IT is your partner in digital transformation. With extensive experience in cutting-edge technologies, including blockchain and AI, we develop innovative mobile and web applications. ",
            "Our expertise and agile approach enable us to deliver solutions that transform your operations. If you envision it, we can build it."
          ],
          image: "custom_software_development.png"
        },
        {
          title: "Maintenance & Support",
          description: [
            "We don’t just create; we care. Stack IT offers ongoing maintenance and support encompassing enhancements, bug fixes, and system monitoring.",
            "We continually assess your software's usability, audit your code, and test your cloud infrastructure, providing insightful advice that informs your business decisions."
          ],
          image: "maintenance.png"
        },
        {
          title: "Consulting",
          description: [
            "Our tech consulting services bring a fresh perspective to your existing software functionality. We meticulously review your code, test your cloud infrastructure, and provide expert advice that supports your strategic business decisions."
          ],
          image: "custom_consulting.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
#title-icon {
  margin-right: 1.6rem;
}

.stack {
  margin-top: 1.5rem;
}

.summary-image {
  max-width: 300px;
  border-radius: 20px;
  filter: drop-shadow(10px 10px 7px rgba(0, 0, 0, 0.1));
}

.service-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3% 5%;
  flex-direction: row;

  &.reverse {
    flex-direction: row-reverse;
  }
}

@media (max-width: 991px) {
  .service-container {
    flex-direction: column-reverse !important;
  }

  .summary-image {
    max-width: 300px;
  }
}
</style>
