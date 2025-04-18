import {
  isConnected,
  getPublicKey,
  signTransaction,
} from '@lobstrco/signer-extension-api';

import {
  GetNetworkResult,
  SupportedWallets,
  WalletInterface,
} from '../../types';

export const lobstrConfig: WalletInterface = {
  name: SupportedWallets.Lobstr,
  website: 'https://lobstr.co',

  isAvailable: () => true,

  connect: async () => {
    try {
      if (!(await isConnected())) {
        throw new Error('LOBSTR Wallet is not installed or connected.');
      }

      const publicKey = await getPublicKey();

      return { publicKey };
    } catch (error) {
      throw new Error('Failed to connect to LOBSTR.');
    }
  },

  signTransaction: async (xdr: string): Promise<string> => {
    try {
      if (!signTransaction) {
        throw new Error('LOBSTR Wallet does not support signing transactions.');
      }

      return await signTransaction(xdr);
    } catch (error) {
      throw new Error('Failed to sign the transaction with LOBSTR.');
    }
  },
  getNetwork: async (): Promise<GetNetworkResult> => {
    throw new Error('Failed to get network from LOBSTR');
  },
};
