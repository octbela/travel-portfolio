<template>
    <div class="Header">
      <div>
        <b-navbar toggleable="lg">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="/">Home</b-nav-item>
              <b-nav-item href="/about">About</b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
        <b-row>
          <b-col cols="12" md="6">
          </b-col>
          <b-col cols="12" md="6">
            <img src="https://cdn.images.dailystar.co.uk/dynamic/122/photos/638000/900x738/496638.jpg" class="img-fluid" alt="Responsive image">
          </b-col>
        </b-row>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
