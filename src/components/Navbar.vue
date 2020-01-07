<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="dark">
      <div class="container">
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">
          <router-link to="/" style="color:white; text-decoration:none">
            <img
              src="/assets/logo.png"
              width="35"
              height="30"
              class="d-inline-block align-top mr-1"
              alt
            />
            Meter Scan
          </router-link>
        </b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">
          <!--
          <b-navbar-nav>
            <b-nav-item :to="{name:'recent-blocks'}">Blocks</b-nav-item>
            <b-nav-item to="/hello">Hello</b-nav-item>
          </b-navbar-nav>
          -->
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-form @submit.prevent>
              <b-form-input
                v-model="searchString"
                size="sm"
                class="mr-lg-2"
                type="text"
                placeholder="block, height, tx"
                @keydown.enter.native="search"
                style="width:300px;"
              />
              <b-button class="my-2 my-sm-0" size="sm" variant="success" @click="search">Search</b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return { searchString: '' };
  },
  methods: {
    search() {
      const str = this.searchString;
      this.searchString = '';
      if (str === '') {
        return;
      }

      this.$router.push({ name: 'search', query: { q: str } });
    }
  }
};
</script>
