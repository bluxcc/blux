import React, { useEffect, useState, useRef } from 'react';

import Button from '../../../components/Button';
import handleLogos from '../../../utils/handleLogos';
import { useProvider } from '../../../context/provider';
import { Routes, WalletInterface } from '../../../types';
import getWalletNetwork from '../../../utils/getWalletNetwork';
import isBackgroundDark from '../../../utils/isBackgroundDark';
import { Loading, RedExclamation } from '../../../assets/Icons';
import { setRecentConnectionMethod } from '../../../utils/setRecentConnectionMethod';
import handleTransactionSigning from '../../../utils/stellar/handleTransactionSigning';

const Waiting = () => {
  const context = useProvider();
  const hasConnected = useRef(false);
  const [error, setError] = useState(false);
  const [matchedWallet, setMatchedWallet] = useState<WalletInterface | null>(
    null,
  );

  const mappedWallets = context.value.availableWallets;

  const { user, config } = context.value;
  const waitingStatus = context.value.waitingStatus;
  const appearance = context.value.config.appearance;
  const { xdr, options } = context.value.signTransaction;

  useEffect(() => {
    if (!user?.wallet?.name) return;

    const foundWallet = mappedWallets.find(
      ({ wallet }) => wallet.name === user?.wallet?.name,
    )?.wallet;

    if (foundWallet) setMatchedWallet(foundWallet);
  }, [mappedWallets, user?.wallet]);

  useEffect(() => {
    if (!hasConnected.current && matchedWallet) {
      hasConnected.current = true;
      handleAssignment(matchedWallet);
    }
  }, [matchedWallet]);

  const handleAssignment = async (wallet: WalletInterface) => {
    if (waitingStatus === 'signing') {
      try {
        const result = await handleTransactionSigning(
          wallet,
          xdr,
          context.value.user.wallet?.address as string,
          options,
          config.transports || {},
        );

        context.setValue((prev) => ({
          ...prev,
          signTransaction: {
            ...prev.signTransaction,
            result,
          },
        }));

        context.setRoute(Routes.SUCCESSFUL);
      } catch (error) {
        setError(true);

        throw error;
      }
    } else {
      try {
        const { publicKey } = await wallet.connect();

        if (publicKey && publicKey.trim() !== '') {
          const passphrase = await getWalletNetwork(wallet);

          context.setValue((prev) => ({
            ...prev,
            user: {
              ...prev.user,
              wallet: {
                passphrase,
                name: wallet.name,
                address: publicKey,
              },
            },
          }));

          setRecentConnectionMethod(wallet.name);

          setTimeout(() => {
            context.setRoute(Routes.SUCCESSFUL);
          }, 400);
        }
      } catch (error) {
        setError(true);

        throw error;
      }
    }
  };

  const handleRetry = () => {
    setError(false);

    if (matchedWallet) handleAssignment(matchedWallet);
  };

  return (
    <div className="bluxcc:mt-4 bluxcc:flex bluxcc:w-full bluxcc:select-none bluxcc:flex-col bluxcc:items-center bluxcc:justify-center">
      {error ? (
        <div
          className={`bluxcc:mb-6 bluxcc:flex bluxcc:items-center bluxcc:justify-center`}
        >
          <RedExclamation />
        </div>
      ) : (
        <div
          className={`bluxcc:mb-6 bluxcc:flex bluxcc:size-20 bluxcc:items-center bluxcc:justify-center bluxcc:overflow-hidden bluxcc:rounded-full bluxcc:border`}
          style={{
            borderColor: appearance.borderColor,
            borderWidth: appearance.includeBorders
              ? appearance.borderWidth
              : '1px',
          }}
        >
          {handleLogos(
            user?.wallet?.name ?? '',
            isBackgroundDark(appearance.background),
          )}
        </div>
      )}

      <div className="bluxcc:flex-col bluxcc:space-y-2 bluxcc:text-center bluxcc:font-medium">
        <p className="bluxcc:text-xl">
          {error
            ? `${waitingStatus === 'connecting'
              ? 'Login failed'
              : `Signing with ${user?.wallet?.name} failed`
            }`
            : `${waitingStatus === 'connecting' ? 'Waiting for' : `Signing with`
            } ${user?.wallet?.name}`}
        </p>
        <p className="bluxcc:text-sm">
          {error
            ? `Please try ${waitingStatus === 'connecting' ? 'logging in' : 'signing'} again.`
            : `${waitingStatus === 'connecting'
              ? 'Accept connection'
              : 'Sign the'
            } request in your wallet`}
        </p>
      </div>

      {/* divider */}
      <div className="bluxcc:flex bluxcc:h-8 bluxcc:w-full bluxcc:items-center bluxcc:justify-center">
        <div
          className="bluxcc:absolute bluxcc:left-0 bluxcc:right-0"
          style={{
            borderTopWidth: appearance.includeBorders
              ? appearance.borderWidth
              : '1px',
            borderTopColor: appearance.borderColor,
          }}
        />
      </div>

      {error ? (
        <Button onClick={handleRetry} state="enabled" variant="outline">
          Try again
        </Button>
      ) : (
        <Button
          state="enabled"
          variant="outline"
          className="bluxcc:cursor-default!"
          startIcon={<Loading fill={appearance.accent} />}
        >
          {waitingStatus === 'connecting' ? 'Connecting' : 'Signing'}
        </Button>
      )}
    </div>
  );
};

export default Waiting;
