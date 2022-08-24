// 多钱包控制
const hre = require("hardhat");
const config = require("./config.json");
async function main() {
  for (let i = 0; i < 100; i++) {
    const wallet = await hre.ethers.Wallet.fromMnemonic(config.mnemonic, `m/44'/60'/0'/0/${i}`);
    console.log(wallet.address)
  }
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
