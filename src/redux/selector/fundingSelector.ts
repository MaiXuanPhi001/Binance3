import { RootState } from "../store";

export const banksFundingSelector = (state: RootState) => state.funding.banks

export const bankChoosedFundingSelector = (state: RootState) => state.funding.deposit.bankChoosed

export const stepDepositFunddingSelector = (state: RootState) => state.funding.deposit.step 

export const loadingFundingSelector = (state: RootState) => state.funding.loading

export const transferInfoDepositFundingSelector = (state: RootState) => state.funding.deposit.transferInfo

export const openOrdersFundingSelector = (state: RootState) => state.funding.openOrders 

export const orderHistorysFundingSelector = (state: RootState) => state.funding.orderHistorys