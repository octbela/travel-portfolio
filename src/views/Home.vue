<template>
  <div class="home">
    <Headline/>
    <Category/>
    <Latest/>
    <Subscribe/>
  </div>
</template>

<script>
import Headline from '@/components/Headline.vue'
import Category from '@/components/Category.vue'
import Latest from '@/components/Latest.vue'
import Subscribe from '@/components/Subscribe.vue'

export default {
  name: 'home',
  components: {
    Headline,
    Category,
    Latest,
    Subscribe
  }
}
</script>
