<template>
    <div class="headline section-custom">
      <b-container>
        <h3 class="text-left section-title">
          Experience<br>Travel With Us.
        </h3>
        <b-row>
          <b-col cols="12" md="3" v-for="(news, index) in computedHeadline" :key="index">
            <b-card class="headline-card card-custom" :title="news.name" img-src="https://cdn.idntimes.com/content-images/community/2019/04/dscf0105-6e223d7aefa489a06c8bdd0dbd0091e2.jpg" img-alt="Image" img-top>
                <b-card-text>
                  {{news.description}}
                </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
export default {
  name: 'Headline',
  mounted () {
    this.fetchHeadline()
  },
  data: () => {
    return {
      articles: [],
      sources: [],
      limit: 4
    }
  },
  methods: {
    fetchHeadline () {
      this.$api.get('https://newsapi.org/v2/sources?apiKey=f9753a1c27b041258f67fc32dd29b027').then((response) => {
        this.articles = response.data.sources
      })
    }
  },
  computed: {
    computedHeadline () {
      return this.limit ? this.articles.slice(0, this.limit) : this.articles
    }
  }
}
</script>
