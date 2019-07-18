<template>
  <div class="home">
    <!-- <Search/> -->
    <Headline/>
    <!-- <AllCategories/> -->
    <Latest/>
  </div>
</template>

<script>
// import Search from '@/components/partials/Search.vue'
import Headline from '@/components/Headline.vue'
import AllCategories from '@/components/AllCategories.vue'
import Latest from '@/components/Latest.vue'

export default {
  name: 'Home',
  components: {
    Headline,
    AllCategories,
    Latest
    // Search
  }
}
</script>
