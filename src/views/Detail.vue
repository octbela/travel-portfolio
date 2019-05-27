<template>
    <div class="detail">
      <b-container>
        <div class="container-detail">
          <div class="detail-content section-custom">
            <div class="wrap-detail-title">
              <h3 class="section-title mb-25 text-center">
                So how difficult is it really to climb Mount Kilimanjaro?
              </h3>
              <div class="detail-author text-center">
                <a href="javascript:;">Nabilah Ayu Permata</a>
              </div>
            </div>
            <DetailContent/>
          </div>
        </div>
      </b-container>
      <Category/>
      <Latest/>
    </div>
</template>

<script>
import Category from '@/components/Category.vue'
import Latest from '@/components/Latest.vue'
import DetailContent from '@/components/partials/detail/detail-content-item.vue'

export default {
  name: 'Detail',
  components: {
    Category,
    Latest,
    DetailContent
  },
  mounted () {
    // this.fetchArticles()
  },
  data: () => {
    return {
      articles: []
    }
  },
  methods: {
    // fetchArticles() {
    //   this.$api.get('https://newsapi.org/v2/sources?apiKey=f9753a1c27b041258f67fc32dd29b027').then((response) => {
    //     this.articles = response.data
    //     console.log(response.data)
    //   })
    // }
  }
}

</script>
