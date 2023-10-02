import React, { useEffect } from 'react'
import Payment from './payment/Payment'
import { hideBottomTab, socketLimitDeposit, useAppDispatch, useAppSelector } from '@hooks/index'
import { loadingFundingSelector, stepDepositFunddingSelector } from '@selector/fundingSelector'
import { depositStep } from '@util/contants'
import ConfirmPayment from './confirmPayment/ConfirmPayment'
import SendImage from './sendImage/SendImage'
import Done from './done/Done'
import Box from '@commom/Box'
import LoadingYellow from '@reuse/LoadingYellow'
import { checkTransactionDepositVndThunk } from '@asyncThunk/fundingAsyncThunk'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { HEIGHT_BOTTOM_TAB } from '@navigation/Container'

const DepositVND = () => {
  const dispatch = useAppDispatch()
  const step = useAppSelector(stepDepositFunddingSelector)

  const loading = useAppSelector(loadingFundingSelector)

  hideBottomTab()
  socketLimitDeposit()
  
  useEffect(() => {
    dispatch(checkTransactionDepositVndThunk())
  }, [])

  return (
    <>
      {loading ?
        <KeyBoardSafe paddingBottom={HEIGHT_BOTTOM_TAB / 2}>
          <Box flex={1} alignCenter justifyCenter>
            <LoadingYellow />
          </Box>
        </KeyBoardSafe>
        :
        <>
          {step === depositStep.CONFIRM_PAYMENT ?
            <ConfirmPayment /> : step === depositStep.SUBMIT_IMG ?
              <SendImage /> : step === depositStep.DONE ?
                <Done /> : <Payment />
          }
        </>
      }
    </>
  )
}

export default DepositVND