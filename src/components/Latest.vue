<template>
    <div class="latest section-custom">
      <b-container>
        <h3 class="text-left section-title">
          What's new?
        </h3>
        <b-row>
          <b-col cols="12" md="4" v-for="(news, index) in computedLatest" :key="index">
            <b-card no-body class="latest-card card-custom">
                <b-card-img src="https://cdn.idntimes.com/content-images/community/2019/04/dscf0105-6e223d7aefa489a06c8bdd0dbd0091e2.jpg" alt="Image" top>
                </b-card-img>
                <b-card-body>
                    <router-link :to="{ name: 'Detail', params: { id: news.id} }">
                        <b-card-title>
                        {{news.name}}
                        </b-card-title>
                    </router-link>
                    <actionView/>
                    <b-card-text>
                        {{news.description}}
                    </b-card-text>
                </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </div>
</template>

<script>
import actionView from '@/components/partials/actions/View.vue'

export default {
  name: 'Latest',
  components: {
    actionView
  },
  mounted () {
    this.fetchLatest()
  },
  data: () => {
    return {
      articles: [],
      sources: [],
      limit: 3
    }
  },
  methods: {
    fetchLatest () {
      this.$api.get('https://newsapi.org/v2/sources?apiKey=f9753a1c27b041258f67fc32dd29b027').then((response) => {
        this.articles = response.data.sources
      })
    }
  },
  computed: {
    computedLatest () {
      return this.limit ? this.articles.slice(0, this.limit) : this.articles
    }
  }
}
</script>
