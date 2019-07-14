<template>
  <!-- eslint-disable -->
  <div class="home">
    <h2>A Market for Curating Tweets and Rewarding Participants</h2>
    <div class="container">
      <div class="row">
        <div class="card col-lg m-2">
          <div class="card-body">
            <div class="card-header">Buying Tweet Tokens</div>
            <div
              class="card-text p-2"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias architecto praesentium cumque maxime nisi quidem provident eaque quos nostrum autem, pariatur necessitatibus, possimus illo expedita inventore dolor quasi magni debitis!</div>
          </div>
        </div>
        <div class="card col-lg m-2">
          <div class="card-body">
            <div class="card-header">Managing Your Portfolio</div>
            <div
              class="card-text p-2"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus unde sequi doloribus alias modi debitis odio ex corporis dolore dignissimos. Obcaecati amet optio sint nulla, quo quisquam deserunt incidunt placeat!</div>
          </div>
        </div>
        <div class="card col-lg m-2">
          <div class="card-body">
            <div class="card-header">Receiving Rewards</div>
            <div
              class="card-text p-2"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut exercitationem repellat quasi quod, excepturi pariatur sed laboriosam harum similique vero quae numquam praesentium illum, dolor illo aperiam earum tempora quidem?</div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <p>Your Funds: {{ balance | inETH }}</p>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {
    balance() {
      return this.$store.state.ethers.balance;
    }
  }
};
</script>
