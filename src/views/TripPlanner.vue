<template>
  <div class="trip-planner">
    <!-- <Headline/> -->
    <!-- <AllCategories/> -->
    <Latest/>
  </div>
</template>

<script>

import AllCategories from '@/components/AllCategories.vue'
import Latest from '@/components/Latest.vue'

export default {
  name: 'Trip-planner',
  components: {
    AllCategories,
    Latest
  }
}
</script>
