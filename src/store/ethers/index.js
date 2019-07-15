/* eslint-disable */
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state = () => ({
  initialized: false,
  connected: false,
  error: null,
  user: "", // User is ens or address
  balance: 0,
  address: "0x0",
  network: ""
});

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
