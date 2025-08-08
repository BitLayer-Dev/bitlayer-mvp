import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import BitLayerPurposeABI from '../../abi/BitLayerPurpose.json';

const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS_HERE";

function App() {
  const [purpose, setPurpose] = useState("");
  const [newPurpose, setNewPurpose] = useState("");
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const loadBlockchain = async () => {
      if (window.ethereum) {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const userAccount = await signer.getAddress();
        const instance = new ethers.Contract(contractAddress, BitLayerPurposeABI, signer);

        const currentPurpose = await instance.purpose();

        setAccount(userAccount);
        setPurpose(currentPurpose);
        setContract(instance);
      }
    };
    loadBlockchain();
  }, []);

  const updatePurpose = async () => {
    if (contract && newPurpose) {
      const tx = await contract.updatePurpose(newPurpose);
      await tx.wait();
      const updated = await contract.purpose();
      setPurpose(updated);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">BitLayer MVP</h1>
      <p><strong>Connected Account:</strong> {account}</p>
      <p><strong>Current Purpose:</strong> {purpose}</p>

      <input
        type="text"
        className="border p-2 mt-4"
        value={newPurpose}
        onChange={(e) => setNewPurpose(e.target.value)}
        placeholder="Update Purpose"
      />
      <button onClick={updatePurpose} className="bg-blue-500 text-white px-4 py-2 ml-2">Update</button>
    </div>
  );
}

export default App;
