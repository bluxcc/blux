import React, { useContext, useEffect, useState, useRef } from 'react';

import Button from '../../../components/Button';

import { handleIcons } from '../../../utils/handleIcons';
import { getMappedWallets, MappedWallet } from '../../../utils/mappedWallets';
import { initializeRabetMobile } from '../../../utils/initializeRabetMobile';

import { ProviderContext, defaultAppearance } from '../../../context/provider';

import { WalletActions } from '../../../types';
import { Loading } from '../../../assets/Icons';
import { getBorderRadius } from '../../../utils/getBorderRadius';

const Connecting = () => {
  const [error, setError] = useState(false);
  const [mappedWallets, setMappedWallets] = useState<MappedWallet[]>([]);
  const [matchedWallet, setMatchedWallet] = useState<WalletActions | null>(null);
  const hasConnected = useRef(false);
  const context = useContext(ProviderContext);

  const modalStyle = context?.value.appearance || defaultAppearance;
  const { user, isAuthenticated } = context?.value || {};
  const userWallet = user?.wallet;

  useEffect(() => {
    const fetchWallets = async () => {
      const wallets = await getMappedWallets();
      setMappedWallets(wallets);
    };
    fetchWallets();
  }, []);

  useEffect(() => {
    if (mappedWallets.length > 0 && userWallet?.name) {
      const foundWallet = mappedWallets.find(
        ({ wallet }) => wallet.name === userWallet.name,
      )?.wallet;
      setMatchedWallet(foundWallet || null);
    }
  }, [mappedWallets, userWallet]);

  useEffect(() => {
    if (!hasConnected.current && matchedWallet) {
      handleConnect(matchedWallet);
      hasConnected.current = true;
    }
  }, [matchedWallet, isAuthenticated]);

  const handleConnect = async (wallet: WalletActions) => {
    try {
      const { publicKey } = await wallet.connect();
      context?.setValue((prev) => ({
        ...prev,
        user: {
          wallet: {
            name: wallet.name,
            address: publicKey,
          },
        },
        isConnecting: false,
        isAuthenticated: true,
      }));
    } catch {
      context?.setValue((prev) => ({
        ...prev,
        isAuthenticated: false,
      }));
      setError(true);
    }
    initializeRabetMobile();
  };

  const handleRetry = () => {
    setError(false);
    if (matchedWallet) handleConnect(matchedWallet);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full select-none mt-8">
      <div
        className={`h-20 w-20 flex justify-center border-2 items-center mb-4 ${
          error ? 'border-lightRed-300' : 'border-primary-100'
        }`}
        style={{
          borderRadius: getBorderRadius(modalStyle.cornerRadius),
        }}
      >
        {handleIcons(user?.wallet?.name as string)}
      </div>
      <div className="space-y-3 flex-col text-center font-semibold">
        <p className="text-xl">
          {error ? 'Failed Connecting to' : 'Waiting for'} {user?.wallet?.name}
        </p>
        <p className="text-sm">
          {error ? 'Please try connecting again.' : 'Accept connection request in the wallet.'}
        </p>
      </div>
      {error ? (
        <Button
          onClick={handleRetry}
          className="mt-8 font-medium w-full inline-flex justify-center items-center gap-[10px] border-none text-white bg-red-500 cursor-default"
        >
          Try again
        </Button>
      ) : (
        <Button
          disabled
          className="mt-8 font-medium w-full inline-flex justify-center items-center gap-[10px] cursor-default"
        >
          <Loading />
          <p>Connecting</p>
        </Button>
      )}
    </div>
  );
};

export default Connecting;
