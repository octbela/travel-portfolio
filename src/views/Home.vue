<template>
  <div class="home">
    <!-- <Search/> -->
    <Headline/>
    <Category/>
    <Latest/>
  </div>
</template>

<script>
// import Search from '@/components/partials/Search.vue'
import Headline from '@/components/Headline.vue'
import Category from '@/components/Category.vue'
import Latest from '@/components/Latest.vue'

export default {
  name: 'Home',
  components: {
    Headline,
    Category,
    Latest
    // Search
  }
}
</script>
