<template>
    <div class="Header">
      <!-- <b-container> -->
        <div class="section-header section-custom">
            <b-container>
              <b-navbar toggleable="lg" class="pl-0 pr-0">
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" class="wrap-nav-header" is-nav>
                  <b-navbar-nav>
                    <b-nav-item class="nav-header-brand"><router-link to="/"><font-awesome-icon icon="suitcase-rolling" /> OctBela</router-link></b-nav-item>
                    <b-nav-item><router-link to="/trip-planner">Trip Planners</router-link></b-nav-item>
                    <b-nav-item><router-link to="/category">Destinations</router-link></b-nav-item>
                    <b-nav-item><router-link to="/about">Stories</router-link></b-nav-item>
                  </b-navbar-nav>
                  <b-navbar-nav class="ml-auto">
                    <!-- <b-nav-form> -->
                      <b-button class="my-2 my-sm-0 size-form-custom border-custom btn-base-white" type="button">Contact Us</b-button>
                    <!-- </b-nav-form> -->
                  </b-navbar-nav>
                </b-collapse>
              </b-navbar>
            </b-container>
            <img src="@/assets/img/background-header.jpg" class="img-fluid header-img" alt="Responsive image">
            <Search/>
          <!-- </b-container> -->
        </div>
    </div>
</template>

<script>
import Search from '@/components/partials/Search.vue'

export default {
  name: 'Header',
  components: {
    Search
  }
}

</script>
