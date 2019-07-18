<template>
    <div class="section-latest section-custom">
      <!-- <b-container> -->
        <h3 class="text-left section-title big">
          What's new?
        </h3>
        <b-row class="wrap-latest-items">
          <b-col class="latest-item" cols="12" md="4" v-for="(latest, index) in latests.slice(0,3)" :key="index">
            <b-card no-body class="latest-card card-custom">
                <b-card-img src="https://cdn.idntimes.com/content-images/community/2019/04/dscf0105-6e223d7aefa489a06c8bdd0dbd0091e2.jpg" alt="Image" top>
                </b-card-img>
                <b-card-body>
                    <router-link :to="{ name: 'Detail', params: { id: latest.id} }">
                        <b-card-title>
                        {{latest.name}}
                        </b-card-title>
                    </router-link>
                    <actionView/>
                    <b-card-text>
                        {{latest.description}}
                    </b-card-text>
                </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      <!-- </b-container> -->
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
    this.$store.dispatch('fetchLatests')
  },
  computed: {
    latests () {
      return this.$store.state.all_latests
    }
    // computedCategories () {
    //   return this.limit
    //     ? this.categories.slice(0, this.limit)
    //     : this.categories
    // }
    // computedLatest () {
    //   return this.limit ? this.latests.slice(0, this.limit) : this.latests
    //    console.log(this.latests.slice(0, this.limit))
    // }
  },
  data: () => {
    return {
      // articles: [],
      // sources: [],
      limit: 3
    }
  },
  methods: {
    // fetchLatest () {
    //   this.$api.get('https://newsapi.org/v2/sources?apiKey=f9753a1c27b041258f67fc32dd29b027').then((response) => {
    //     this.articles = response.data.sources
    //   })
    // }
  }
}
</script>
