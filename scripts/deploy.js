const hre = require("hardhat");

async function main() {
  const BitLayerPurpose = await hre.ethers.getContractFactory("BitLayerPurpose");

  // 🛠️ Pass in the required constructor argument
  const contract = await BitLayerPurpose.deploy("Empowering Bitcoin smart contracts.");

  await contract.waitForDeployment();

  console.log(`✅ BitLayerPurpose deployed to: ${contract.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
