const Dealing = artifacts.require("Dealing");
module.exports = function(_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(Dealing);
};
