<template>
  <router-link
    :to="link"
    class="list-group-item list-group-item-action text-white bg-primary"
  >
    <div
      :class="
        `d-flex align-items-center flex-sm-row ${
          icon ? `flex-column` : `justify-content-start pt-3`
        }`
      "
    >
      <div v-if="icon">
        <div class="text-center text-white font-size-xl d-50 mb-3 mb-sm-0">
          <FontAwesomeIcon :icon="icon" />
        </div>
      </div>
      <div class="d-block text-center d-sm-flex align-items-center">
        <span class="font-size-md">{{ linkName }}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  props: {
    linkName: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: false
    },
    link: {
      type: String,
      required: true
    }
  },
  components: {
    FontAwesomeIcon
  }
};
</script>
