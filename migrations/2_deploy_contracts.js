const Piggy = artifacts.require("Piggy");

module.exports = function(deployer) {
    deployer.deploy(Piggy);
};