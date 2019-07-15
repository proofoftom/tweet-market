<template>
  <!-- eslint-disable -->
  <div
    class="modal fade"
    id="submitTweetModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="submitTweet"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="submitTweet">Submit a Tweet</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="linkToTweet">Tweet Link</label>
              <input
                type="text"
                class="form-control"
                id="linkToTweet"
                placeholder="Enter the copied tweet link."
              />
              <small
                id="linkToTweetHelp"
                class="form-text text-muted"
              >Copy the link from the tweet's menu.</small>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button
            v-if="user"
            type="button"
            class="btn btn-primary"
            data-dismiss="modal"
          >Submit Tweet</button>
          <button v-else type="button" class="btn btn-primary" @click="openPortis">Submit Tweet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import portis from "@/plugins/portis";

export default {
  computed: {
    user() {
      return this.$store.state.ethers.user;
    }
  },
  methods: {
    openPortis() {
      portis.showPortis();
    }
  }
};
</script>
