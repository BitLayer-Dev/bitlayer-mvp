const hre = require("hardhat");

async function main() {
  const contractAddress = "0x5A21501460c169C3753A76620648557C705AF82e";

  const BitLayerPurpose = await hre.ethers.getContractFactory("BitLayerPurpose");
  const contract = await BitLayerPurpose.attach(contractAddress);

  const tx = await contract.updatePurpose("Built on Bitcoin. Powered by BitLayer.");
  await tx.wait();

  console.log("✅ Purpose updated successfully.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
