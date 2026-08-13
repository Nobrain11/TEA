import { robinhoodChain } from "@/config/robinhoodChain";

export function getChainConfig() {
  return {
    name: robinhoodChain.networkName,
    chainId: robinhoodChain.chainId,
    nativeSymbol: robinhoodChain.nativeSymbol,
    rpcUrl: robinhoodChain.rpcUrl,
    explorerUrl: robinhoodChain.explorerUrl,
    explorerApiUrl: robinhoodChain.explorerApiUrl,
    contracts: robinhoodChain.contracts,
    tradingBlocked: robinhoodChain.tradingBlocked,
  };
}

export function explorerAddressUrl(address: string) {
  return `${robinhoodChain.explorerUrl}/address/${address}`;
}

export function explorerTxUrl(hash: string) {
  return `${robinhoodChain.explorerUrl}/tx/${hash}`;
}
