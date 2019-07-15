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
        <li>
          <router-link v-if="user" to="portfolio">
            <a class="nav-link">Portfolio</a>
          </router-link>
          <a v-else class="nav-link" href="#" @click="openPortis">Portfolio</a>
        </li>
      </ul>
      <div class="balance">{{ balance | inETH }}</div>
      <button
        type="button"
        class="btn btn-primary mx-3"
        data-toggle="modal"
        data-target="#submitTweetModal"
      >Submit a Tweet</button>
      <a href="#" @click="openPortis">
        <vth-blockie :string="address" />
      </a>
    </div>
  </nav>
</template>

<script>
import portis from "@/plugins/portis";

export default {
  computed: {
    user() {
      return this.$store.state.ethers.user;
    },
    address() {
      return this.$store.state.ethers.address;
    },
    balance() {
      return this.$store.state.ethers.balance;
    }
  },
  methods: {
    openPortis() {
      portis.showPortis();
    }
  }
};
</script>

<style lang="scss">
.vth-blockie {
  border-radius: 5px;
}
</style>
