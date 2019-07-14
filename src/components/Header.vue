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
          <vth-status deferred>
            <template slot-scope="{getWeb3}">
              <router-link v-if="user" to="portfolio">
                <a class="nav-link">Portfolio</a>
              </router-link>
              <a v-else class="nav-link" href="/" @click="getWeb3">Portfolio</a>
            </template>
          </vth-status>
        </li>
      </ul>
      <div class="balance">{{ balance | inETH }}</div>
      <button
        type="button"
        class="btn btn-primary mx-3"
        data-toggle="modal"
        data-target="#submitTweetModal"
      >Submit a Tweet</button>
      <vth-status deferred>
        <div slot-scope="{getWeb3}">
          <router-link v-if="user" to="portfolio">
            <vth-blockie :string="user" />
          </router-link>
          <a v-else href="#" @click="getWeb3">
            <vth-blockie string="0x0" />
          </a>
        </div>
      </vth-status>
    </div>
  </nav>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.ethers.user;
    },
    balance() {
      return this.$store.state.ethers.balance;
    }
  }
};
</script>

<style lang="scss">
.vth-blockie {
  border-radius: 5px;
}
</style>
