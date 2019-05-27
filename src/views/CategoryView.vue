<template>
  <div class="category-view">
    <!-- <Headline/> -->
    <b-container>
    </b-container>
    <Category/>
    <Latest/>

  </div>
</template>

<script>

import Category from '@/components/Category.vue'
import Latest from '@/components/Latest.vue'

export default {
  name: 'Category-view',
  components: {
    Category,
    Latest
  },
  mounted () {
    this.fetchSelectCategories()
  },
  data: () => {
    return {
      categoriesSelect: []
    }
  },
  methods: {
    fetchSelectCategories () {
      this.$api.get('https://newsapi.org/v2/sources?category=' + this.$route.params.category + '&apiKey=f9753a1c27b041258f67fc32dd29b027').then((response) => {
        this.categoriesSelect = response.data
        // console.log(response.data)
      })
    }
  }
}
</script>
