<template>
  <div class="destination">
    <!-- <Headline/> -->
    <!-- <Category/> -->
    <Latest/>
  </div>
</template>

<script>

import AllCategories from '@/components/AllCategories.vue'
import Latest from '@/components/Latest.vue'

export default {
  name: 'Destination',
  components: {
    AllCategories,
    Latest
  }
}
</script>
