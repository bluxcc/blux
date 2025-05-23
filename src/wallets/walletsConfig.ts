import { hotConfig } from './configs/hotConfig';
import { HanaConfig } from './configs/hanaConfig';
import { rabetConfig } from './configs/rabetConfig';
import { xBullConfig } from './configs/xbullConfig';
import { lobstrConfig } from './configs/lobstrConfig';
import { albedoConfig } from './configs/albedoConfig';
import { freighterConfig } from './configs/freighterConfig';
import { SupportedWallets, WalletInterface } from '../types';

export const walletsConfig: Record<SupportedWallets, WalletInterface> = {
  [SupportedWallets.Rabet]: rabetConfig,
  [SupportedWallets.Freighter]: freighterConfig,
  [SupportedWallets.Hana]: HanaConfig,
  [SupportedWallets.Lobstr]: lobstrConfig,
  [SupportedWallets.Albedo]: albedoConfig,
  [SupportedWallets.Xbull]: xBullConfig,
  [SupportedWallets.Hot]: hotConfig,
};
