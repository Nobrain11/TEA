# Robinhood Chain Terminal

Phase 1A read-only starter for a Robinhood Chain-native trading terminal.

## What this build does

- Robinhood Chain network config
- Wallet/network foundation
- Token/address lookup shell
- Read-only token page
- Portfolio shell
- Watchlist persistence
- Telegram read-only bot stubs
- Explorer-linked UI

## What is not live yet

- Swap execution
- Quotes
- Router integration
- Buy/Sell execution
- PnL calculations from on-chain history
- Indexed market data
- Live charts

## Official Robinhood Chain parameters

- Chain ID: 4663
- Native symbol: ETH
- RPC: https://rpc.mainnet.chain.robinhood.com
- Explorer: https://robinhoodchain.blockscout.com
- L2 WETH: 0x0Bd7D308f8E1639FAb988df18A8011f41EAcAD73
- L2 Multicall: 0x2cAC2D899eCC914d704FeaAE33ac1bF36277DaD1
- Permit2: 0x000000000022D473030F116dDEE9F6B43aC78BA3

## Environment variables

Copy `.env.example` to `.env.local` and fill as needed.

## Notes

Trading is blocked until a verified DEX/router integration is confirmed.
