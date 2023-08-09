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

      <c-box :width="['90%', '90%', '90%', '60%', '65%']">
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
          title: "Who we are",
          description: [
            "At Stack IT, a San Diego, CA-based company, we believe that talent  drives  success.  Since  2017,  we've  connected companies  with  top  tech  professionals  from  Latin America  for  cost-effective,  flexible,  and  productive  remote staffing solutions.",
            "Our  motto  is  “Success.  Coded.”  because  our  part  in  your success is to deliver the perfect technical figure you need."
          ],
          image: "who_we_are.png"
        },
        {
          title: "Staffing Innovation",
          description: [
            "Our  full-stack  staffing  solution  is  designed  to  deliver  top-tier software developers and help push your business to new heights.",
            " With  a  meticulous  selection  process,  tailored  training, and  keen  evaluation,  we  handpick  the  perfect  talent  to match  your  requirements,  industry,  and  technological demands."
          ],
          image: "staffing_innovation.png"
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

  @media (max-width: 600px) {
    text-align: center;
  }
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
