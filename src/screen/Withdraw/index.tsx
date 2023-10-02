import React from 'react'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import WithdrawConfirm from './WithdrawConfirm'
import History from './History'
import Box from '@commom/Box'
import { socketLimitDeposit } from '@hooks/index'

const Withdraw = () => {
  socketLimitDeposit()
  return (
    <KeyBoardSafe paddingBottom={10}>
      <Box paddingHorizontal={10}>
        <WithdrawConfirm />
        <History />
      </Box>
    </KeyBoardSafe>
  )
}

export default Withdraw