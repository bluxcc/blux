import React, { useContext, useEffect, useState } from 'react';

import { ProviderContext } from '../../../context/provider';

import { handleIcons } from '../../../utils/handleIcons';
import { getMappedWallets } from '../../../utils/mappedWallets';

import { WalletActions } from '../../../types';
import BluxLogo from '../../../assets/bluxLogo';
import { StellarIcon } from '../../../assets/logos';
import CardItem from '../../../components/CardItem';
import { ArrowRight } from '../../../assets/Icons';

type OnBoardingProps = {
  showAllWallets: boolean;
  setShowAllWallets: (value: boolean) => void;
};

const OnBoarding = ({ showAllWallets, setShowAllWallets }: OnBoardingProps) => {
  const context = useContext(ProviderContext);
  const [wallets, setWallets] = useState<WalletActions[]>(context?.value.availableWallets || []);

  const [hiddenWallets, setHiddenWallets] = useState<WalletActions[]>([]);
  const [visibleWallets, setVisibleWallets] = useState<WalletActions[]>([]);

  useEffect(() => {
    if (wallets.length > 3) {
      setHiddenWallets(wallets.slice(2));
      setVisibleWallets(showAllWallets ? wallets.slice(2) : wallets.slice(0, 2));
    } else {
      setHiddenWallets([]);
      setVisibleWallets(wallets);
    }
  }, [wallets, showAllWallets]);

  useEffect(() => {
    if (wallets.length > 0) return;

    const loadWallets = async () => {
      const mappedWallets = await getMappedWallets();
      const available = mappedWallets
        .filter(({ isAvailable }) => isAvailable)
        .map(({ wallet }) => wallet);

      setWallets(available);
      context?.setValue((prev) => ({
        ...prev,
        availableWallets: available,
        isReady: true,
      }));
    };

    loadWallets();
  }, [wallets]);

  useEffect(() => {
    if (context?.value.connectRejected) {
      context?.setValue((prev) => ({
        ...prev,
        user: { wallet: null },
        isConnecting: false,
        connectRejected: false,
      }));
    }
  }, [context?.value.connectRejected]);

  const handleConnect = (wallet: WalletActions) => {
    context?.setValue((prev) => ({
      ...prev,
      user: { wallet: { name: wallet.name, address: null } },
      isConnecting: true,
    }));
  };

  return (
    <div className="w-full">
      <div className="flex justify-center items-center w-full py-4">
        {context?.value.config.appLogo ? (
          <img src={context?.value.config.appLogo} alt={context?.value.config.appName} />
        ) : (
          <BluxLogo />
        )}
      </div>
      <div className="space-y-2">
        {visibleWallets.map((wallet) => (
          <CardItem
            key={wallet.name}
            {...wallet}
            label={wallet.name}
            startIcon={handleIcons(wallet.name)}
            onClick={() => handleConnect(wallet)}
          />
        ))}

        {hiddenWallets.length > 0 && !showAllWallets && (
          <CardItem
            label="All Stellar wallets"
            startIcon={<StellarIcon />}
            endIcon={<ArrowRight />}
            onClick={() => setShowAllWallets(true)}
          />
        )}
      </div>
      <div
        className="text-center font-medium text-sm mt-3 cursor-pointer"
        style={{ color: context?.value.appearance?.accent }}
      >
        I have a passKey
      </div>

      <div className="font-semibold text-[10px] text-center w-full py-2">
        Powered by{' '}
        <a
          href="https://blux.cc"
          target="_blank"
          rel="noreferrer"
          style={{ color: context?.value.appearance?.accent }}
        >
          Blux.cc
        </a>
      </div>
    </div>
  );
};

export default OnBoarding;
