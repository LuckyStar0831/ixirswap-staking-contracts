const TekilaShiba = artifacts.require("./TekilaShiba");

module.exports = function (deployer) {
  deployer.then(async () => {
    await deployer.deploy(TekilaShiba);
  })
};