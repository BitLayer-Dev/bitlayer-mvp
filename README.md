# BitLayer MVP (Bitcoin-Native Smart Contract Starter)

This is the first prototype of **BitLayer**, a modular smart contract platform built on top of Bitcoin using the RSK network.

## 🔧 Requirements
- Node.js (v16+ recommended)
- MetaMask extension installed
- RSK Testnet access + some tRBTC (testnet BTC)

## 🔁 Setup Instructions

### 1. Clone the Repo
```bash
git clone https://github.com/YOUR_GITHUB/bitlayer-mvp.git
cd bitlayer-mvp
```

### 2. Install Dependencies
```bash
npm install
cd frontend && npm install
```

### 3. Add RSK Testnet to MetaMask
Go to MetaMask > Networks > Add Network:
```
Network Name: RSK Testnet
RPC URL: https://public-node.testnet.rsk.co
Chain ID: 31
Currency Symbol: tRBTC
Block Explorer: https://explorer.testnet.rsk.co
```

### 4. Get tRBTC
Visit the faucet:
👉 https://faucet.rsk.co — Select "Testnet" and paste your wallet address

### 5. Compile + Deploy the Smart Contract
```bash
npx hardhat compile
npx hardhat run scripts/deploy.js --network rskTestnet
```

> Note: You’ll need to configure `hardhat.config.js` to include the RSK Testnet RPC URL and your wallet’s private key (keep it secure).

### 6. Run the Frontend
```bash
cd frontend
npm start
```

Open your browser to: `http://localhost:3000`
