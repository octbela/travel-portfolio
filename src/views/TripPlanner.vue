<template>
  <div class="trip-planner">
    <!-- <Headline/> -->
    <Category/>
    <Latest/>
  </div>
</template>

<script>

import Category from '@/components/Category.vue'
import Latest from '@/components/Latest.vue'

export default {
  name: 'Trip-planner',
  components: {
    Category,
    Latest
  }
}
</script>
