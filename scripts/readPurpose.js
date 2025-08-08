const hre = require("hardhat");

async function main() {
  const contractAddress = "0x5A21501460c169C3753A76620648557C705AF82e";

  const BitLayerPurpose = await hre.ethers.getContractFactory("BitLayerPurpose");
  const contract = await BitLayerPurpose.attach(contractAddress);

  const currentPurpose = await contract.purpose();
  console.log("🔍 Current Purpose:", currentPurpose);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
