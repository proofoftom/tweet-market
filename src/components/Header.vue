<template>
  <!-- eslint-disable -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/">
      <a class="navbar-brand">Tweet Market</a>
      <span class="sr-only">(current)</span>
    </router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="tweets">
            <a class="nav-link">Tweets</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="portfolio">
            <a class="nav-link">Portfolio</a>
          </router-link>
        </li>
      </ul>
      <div class="funds mr-2">{{ funds | inETH }}</div>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#submitTweetModal"
      >Submit a Tweet</button>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    funds() {
      return 0;
      // return this.$store.getters.funds;
    }
  }
};
</script>
