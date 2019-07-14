<template>
  <div id="app" class="container">
    <Header />
    <div class="row justify-content-center">
      <div class="col-xs-12 content">
        <transition name="slide" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <SubmitModal />
  </div>
</template>

<script>
import Header from "./components/Header";
import SubmitModal from "@/components/modals/SubmitTweet";

export default {
  components: {
    Header,
    SubmitModal
  }
};
</script>

<style lang="scss">
// Global Styling
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content {
  padding: 30px;
}

// Animations
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

.slide-leave-active {
  animation: slide-out 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-30px);
    opacity: 0;
  }
}
</style>
