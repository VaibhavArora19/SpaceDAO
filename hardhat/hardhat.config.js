require("@nomicfoundation/hardhat-toolbox");
require("hardhat-secure-accounts");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hyperspace: {
      url: "https://api.hyperspace.node.glif.io/rpc/v1",
    },
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
