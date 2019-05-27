<template>
    <div class="category section-custom">
      <b-container>
        <h3 class="text-left section-title">
          Choose Your Category
        </h3>
        <b-row>
          <b-col cols="12" md="3" v-for="(news, index) in computedCategories" :key="index">
            <div class="wrap-hover-card">
                <b-card class="card-custom category-card" img-src="https://cdn.popbela.com/content-images/post/20190421/00-wisata-dieng-ec695b95877e0209621337ba20b1cdf0_390x260.jpg" img-alt="Image" img-top>
                </b-card>
                <router-link :to="{ name: 'Category-view-select', params: { category: news.category} }">
                  <div class="category-label">
                    {{news.category}}
                  </div>
                </router-link>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
export default {
  name: 'Category',
  // components: { Slick },
  mounted () {
    this.fetchCategories()
  },
  data: () => {
    return {
      categories: [],
      limit: 4
    }
  },
  methods: {
    fetchCategories () {
      this.$api.get('https://newsapi.org/v2/sources?apiKey=f9753a1c27b041258f67fc32dd29b027').then((response) => {
        this.categories = response.data.sources
      })
    }
  },
  computed: {
    computedCategories () {
      return this.limit ? this.categories.slice(0, this.limit) : this.categories
    }
  }
}
</script>
