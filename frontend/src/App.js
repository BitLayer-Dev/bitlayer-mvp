import React, { useEffect, useState } from 'react';
import { BrowserProvider, Contract } from 'ethers';
import BitLayerPurposeABI from '../abi/BitLayerPurpose.json'; // make sure this path is correct

const contractAddress = "0x5a21501460C169c3753a76620648557c705AF82E";

function App() {
  const [purpose, setPurpose] = useState("");
  const [newPurpose, setNewPurpose] = useState("");
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const loadBlockchain = async () => {
      if (window.ethereum) {
        const provider = new BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const userAccount = await signer.getAddress();
        const instance = new Contract(contractAddress, BitLayerPurposeABI, signer);

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
      setNewPurpose("");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">BitLayer MVP</h1>
      <p><strong>Connected Account:</strong> {account}</p>
      <p><strong>Current Purpose:</strong> {purpose}</p>

      <input
        type="text"
        className="border p-2 mt-4"
        value={newPurpose}
        onChange={(e) => setNewPurpose(e.target.value)}
        placeholder="Update Purpose"
      />
      <button onClick={updatePurpose} className="bg-blue-500 text-white px-4 py-2 ml-2 mt-2">Update</button>
    </div>
  );
}

export default App;
