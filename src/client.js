import { meterify } from "meterify";
const Web3 = require("web3");

const web3 = meterify(new Web3(), "http://192.168.1.193:8669");

const getBlockLatest = () => {
  return web3.eth.getBlock("latest");
};

export { getBlockLatest, web3 };
