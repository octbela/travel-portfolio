<template>
  <div class="category-view">
    <!-- <Headline/> -->
    <!-- <b-container>
    </b-container> -->
    <!-- <SelectedCategory/> -->
    <Latest/>
  </div>
</template>

<script>

import SelectedCategory from '@/components/partials/selected/SelectedCategory.vue'
import Latest from '@/components/Latest.vue'

export default {
  name: 'Category-view',
  components: {
    SelectedCategory,
    Latest
  },
  mounted () {
    // this.fetchSelectCategories()
  },
  data: () => {
    return {
      // categoriesSelect: []
    }
  },
  methods: {
    // fetchSelectCategories () {
    //   this.$api.get('https://newsapi.org/v2/sources?category=' + this.$route.params.category + '&apiKey=f9753a1c27b041258f67fc32dd29b027').then((response) => {
    //     this.categoriesSelect = response.data
    //   })
    // }
  }
}
</script>
