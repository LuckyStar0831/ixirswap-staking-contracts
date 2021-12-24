const StakingToken = artifacts.require("./StakingToken");

module.exports = function (deployer) {
  deployer.then(async () => {
    await deployer.deploy(StakingToken);
  })
};