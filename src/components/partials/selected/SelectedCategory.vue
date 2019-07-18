<template>
  <div class="section-category section-custom">
    <h3 class="text-left section-title big">Choose Your Category</h3>
    <div class="mb-50">
      Many variations of passages of Lorem Ipsum available but the
      <br />majority have suffered alteration in some form, by injected don't
      <br />look even slightly believable.
    </div>
    <slick ref="slick"
      :options="slickOptions"
      @afterChange="handleAfterChange"
      @beforeChange="handleBeforeChange"
      @breakpoint="handleBreakpoint"
      @destroy="handleDestroy"
      @edge="handleEdge"
      @init="handleInit"
      @reInit="handleReInit"
      @setPosition="handleSetPosition"
      @swipe="handleSwipe"
      @lazyLoaded="handleLazyLoaded"
      @lazyLoadError="handleLazeLoadError">
      <div v-for="(news, index) in selectedcategories" :key="index">
        <router-link :to="{ name: 'Category-view-select', params: { category: news.category} }">
          <img
            src="https://cdn.popbela.com/content-images/post/20190421/00-wisata-dieng-ec695b95877e0209621337ba20b1cdf0_390x260.jpg"
            alt
          />
          <div class="slick-label">{{news.category}}</div>
        </router-link>
      </div>
    </slick>
  </div>
</template>

<script>
import Slick from 'vue-slick'

export default {
  name: 'Category',
  components: { Slick },
  mounted () {
    this.$store.dispatch('fetchSelectedCategories', {category : this.$route.params.category})
  },
  computed: {
    selectedcategories () {
      return this.$store.state.selected_categories
    }
    // computedCategories () {
    //   return this.limit
    //     ? this.categories.slice(0, this.limit)
    //     : this.categories
    // }
  },
  data: () => {
    return {
      // categories: [],
      // limit: 4,
      slickOptions: {
        // slidesToShow: 3,
        slidesToShow: 4
        // slidesToScroll: 3
        // dots: true
        // Any other options that can be got from plugin documentation
      }
    }
  },
  methods: {
    next () {
      this.$refs.slick.next()
    },
    prev () {
      this.$refs.slick.prev()
    },
    reInit () {
      this.$nextTick(() => {
        this.$refs.slick.reSlick()
      })
    },
    // Events listeners
    handleAfterChange (event, slick, currentSlide) {
      console.log('handleAfterChange', event, slick, currentSlide)
    },
    handleBeforeChange (event, slick, currentSlide, nextSlide) {
      console.log('handleBeforeChange', event, slick, currentSlide, nextSlide)
    },
    handleBreakpoint (event, slick, breakpoint) {
      console.log('handleBreakpoint', event, slick, breakpoint)
    },
    handleDestroy (event, slick) {
      console.log('handleDestroy', event, slick)
    },
    handleEdge (event, slick, direction) {
      console.log('handleEdge', event, slick, direction)
    },
    handleInit (event, slick) {
      console.log('handleInit', event, slick)
    },
    handleReInit (event, slick) {
      console.log('handleReInit', event, slick)
    },
    handleSetPosition (event, slick) {
      console.log('handleSetPosition', event, slick)
    },
    handleSwipe (event, slick, direction) {
      console.log('handleSwipe', event, slick, direction)
    },
    handleLazyLoaded (event, slick, image, imageSource) {
      console.log('handleLazyLoaded', event, slick, image, imageSource)
    },
    handleLazeLoadError (event, slick, image, imageSource) {
      console.log('handleLazeLoadError', event, slick, image, imageSource)
    }
  }
  // computed: {
  //   computedCategories () {
  //     return this.limit
  //       ? this.categories.slice(0, this.limit)
  //       : this.categories
  //   }
  // }
}
</script>
