<template>
  <div class="destination">
    <!-- <Headline/> -->
    <Category/>
    <Latest/>
  </div>
</template>

<script>

import Category from '@/components/Category.vue'
import Latest from '@/components/Latest.vue'

export default {
  name: 'Destination',
  components: {
    Category,
    Latest
  }
}
</script>
