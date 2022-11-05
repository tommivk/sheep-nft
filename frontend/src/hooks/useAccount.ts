import { useEffect, useState } from "react";
import Web3 from "web3";

type Props = {
  web3: Web3 | undefined;
};

const useAccount = ({ web3 }: Props) => {
  const [account, setAccount] = useState<string>();

  const loadAccount = async () => {
    if (!web3) return;
    try {
      const [account] = await web3.eth.getAccounts();
      setAccount(account);
    } catch (error) {
      console.error(error);
      setAccount(undefined);
    }
  };

  const handleAccountChange = (accounts: Array<string>) => {
    if (!web3) return;
    const [account] = accounts;
    setAccount(web3.utils.toChecksumAddress(account));
  };

  useEffect(() => {
    loadAccount();
    window?.ethereum?.on("accountsChanged", handleAccountChange);
    return () =>
      window?.ethereum?.removeListener("accountsChanged", handleAccountChange);
  }, [web3]);

  return [account] as const;
};

export default useAccount;
