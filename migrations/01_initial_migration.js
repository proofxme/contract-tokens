const ProofXToken = artifacts.require("ProofX")

module.exports = function (deployer) {
  deployer.deploy(ProofXToken);
};
