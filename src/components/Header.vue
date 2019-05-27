<template>
    <div class="Header">
      <b-container>
        <div class="header-item section-custom">
          <!-- <div class="container"> -->
            <b-navbar toggleable="lg" class="pl-0 pr-0">
              <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
              <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                  <b-nav-item><router-link to="/"><font-awesome-icon icon="suitcase-rolling" /></router-link></b-nav-item>
                  <b-nav-item><router-link to="/trip-planner">Trip Planners</router-link></b-nav-item>
                  <b-nav-item><router-link to="/category">Destinations</router-link></b-nav-item>
                  <b-nav-item><router-link to="/about">Stories</router-link></b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav class="ml-auto">
                  <!-- <b-nav-form> -->
                    <b-button class="my-2 my-sm-0 size-form-custom border-custom" type="button">Contact Us</b-button>
                  <!-- </b-nav-form> -->
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          <!-- </div> -->
        </div>
        <!-- <b-row class="header-background">
          <b-col cols="12" md="6">
          </b-col>
          <b-col cols="12" md="6">
            <img src="@/assets/img/background-header.jpg" class="img-fluid" alt="Responsive image">
          </b-col>
        </b-row> -->
      </b-container>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
