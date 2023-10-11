import { RootState } from "../store";

export const listUserTraderCopyTradeSelector = (state: RootState) => state.copyTrade.listUserTrader

export const positionToTraderCopyTraderSelector = (state: RootState) => state.copyTrade.positionToTrader

export const hotTraderCopyTradeSelector = (state: RootState) => state.copyTrade.hotTrader 