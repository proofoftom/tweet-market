import portis from "@/plugins/portis";
import { providers, utils } from "ethers";

const web3Provider = new providers.Web3Provider(portis.provider);

export default {
  async connect(ctx) {
    const accounts = await web3Provider.listAccounts();
    const balance = await web3Provider.getBalance(accounts[0]);
    const etherString = utils.formatEther(balance);
    const network = web3Provider.getNetwork;
    const address = accounts[0];

    ctx.commit("connected", true);
    ctx.commit("error", null);
    ctx.commit("address", address);
    ctx.commit("user", address);
    ctx.commit("balance", etherString);
    ctx.commit("network", network);
  },
  async disconnect(ctx, err) {
    ctx.commit("connected", false);
    ctx.commit("error", err);
    ctx.commit("address", "");
    ctx.commit("user", "");
    ctx.commit("balance", 0);
    ctx.commit("network", "");
  },
  async logout(ctx) {
    ctx.commit("connected", false);
    ctx.commit("error", null);
    ctx.commit("address", "");
    ctx.commit("user", "");
    ctx.commit("balance", 0);
    ctx.commit("network", "");
  },
  async init(ctx) {
    portis.onLogin(async () => {
      await ctx.dispatch("connect");
    });
    ctx.commit("initialized", true);
  }
};
