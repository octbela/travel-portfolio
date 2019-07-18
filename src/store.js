import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const axiosInstance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

Vue.prototype.$api = axiosInstance
Vuex.Store.prototype.$api = axiosInstance

export default new Vuex.Store({
  state: {
    selected_categories: [],
    all_categories: [],
    all_latests: [],
    all_headlines: [],
    detail_articles: []
  },
  mutations: {
    SET_SELECTED_CATEGORIES (state, selectedCategories) {
      state.selected_categories = selectedCategories
    },
    SET_ALL_CATEGORIES (state, allCategories) {
      state.all_categories = allCategories
    },
    SET_LATESTS (state, Latests) {
      state.all_latests = Latests
    },
    SET_HEADLINES (state, Headlines) {
      state.all_headlines = Headlines
    },
    SET_DETAILS (state, Details) {
      state.detail_articles = Details
    }
  },
  actions: {
    fetchSelectedCategories (context, payload) {
      this.$api
        .get(
          'https://newsapi.org/v2/sources?category=' + payload.category + '&apiKey=f9753a1c27b041258f67fc32dd29b027'
        )
        .then(response => {
          context.commit('SET_SELECTED_CATEGORIES', response.data.sources)
        })
    },
    fetchAllCategories ({ commit }) {
      this.$api
        .get(
          'https://newsapi.org/v2/sources?&apiKey=f9753a1c27b041258f67fc32dd29b027'
        )
        .then(response => {
          commit('SET_ALL_CATEGORIES', response.data.sources)
        })
    },
    fetchLatests ({ commit }) {
      this.$api
        .get(
          'https://newsapi.org/v2/sources?&apiKey=f9753a1c27b041258f67fc32dd29b027'
        )
        .then(response => {
          commit('SET_LATESTS', response.data.sources)
        })
    },
    fetchHeadlines ({ commit }) {
      this.$api
        .get(
          'https://newsapi.org/v2/sources?&apiKey=f9753a1c27b041258f67fc32dd29b027'
        )
        .then(response => {
          commit('SET_HEADLINES', response.data.sources)
        })
    },
    fetchDetailsArticles (context, payload) {
      this.$api
        .get(
          'https://newsapi.org/v2/sources?id=' + payload.judul + '&apiKey=f9753a1c27b041258f67fc32dd29b027'
        )
        .then(response => {
          context.commit('SET_DETAILS', response.data.sources)
        })
    }
  }
})
