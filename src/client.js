import { thorify } from "thorify";
const Web3 = require("web3");

const web3 = thorify(new Web3(), "http://192.168.1.193:8669");

const getBlockLatest = () => {
  return web3.eth.getBlock("latest");
};

export { getBlockLatest, web3 };
