import Vue from "vue";
import Vuex from "vuex";
import ethers from "./ethers";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ethers
  }
});

store.dispatch("ethers/init");

export default store;
