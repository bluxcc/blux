import albedo from '@albedo-link/intent';

import { SupportedWallets, WalletActions, WalletNetwork, networksEnum } from '../../types';

export const albedoConfig: WalletActions = {
  name: SupportedWallets.Albedo,
  website: 'https://albedo.link',

  isAvailable: async () => typeof albedo !== 'undefined',

  connect: async () => {
    try {
      const result = await albedo.publicKey({ token: 'Connect to Albedo' });
      return { publicKey: result.pubkey };
    } catch (error) {
      console.error('Error connecting to Albedo:', error);
      throw new Error('Failed to connect to Albedo.');
    }
  },

  signTransaction: async (xdr: string, options = {}): Promise<string> => {
    try {
      const { address, networkPassphrase, submit } = options;

      const result = await albedo.tx({
        xdr,
        pubkey: address,
        network:
          networkPassphrase === WalletNetwork.PUBLIC ? networksEnum.PUBLIC : networksEnum.TESTNET,
        submit,
      });

      return result.signed_envelope_xdr;
    } catch (error) {
      console.error('Error signing transaction with Albedo:', error);
      throw new Error('Failed to sign the transaction with Albedo.');
    }
  },
};
