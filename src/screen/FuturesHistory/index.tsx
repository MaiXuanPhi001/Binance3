import { hideBottomTab, socketLimitDeposit, useTheme } from '@hooks/index'
import Safe from '@reuse/Safe'
import React, { useState } from 'react'
import FundingFee from './FundingFee'
import Header from './Header'
import ModalFilter from './ModalFilter'
import OpenOrders from './OpenOrders'
import OrderHistory from './OrderHistory'
import PositionHistory from './PositionHistory'
import TWAPHistory from './TWAPHistory'
import Tabs from './Tabs'
import TradeHistory from './TradeHistory'
import TransactionHistory from './TransactionHistory'

const FuturesHistory = () => {
  const theme = useTheme()
  const [tab, setTab] = useState<string>('Open Orders')
  const [showFilter, setShowFilter] = useState<boolean>(false)

  hideBottomTab()
  socketLimitDeposit()

  return (
    <Safe bg={theme.bg} paddingHorizontal={15}>
      <Header {...{ setShowFilter }} />
      <Tabs {...{ tab, setTab }} />
      {tab === 'Open Orders' ?
        <OpenOrders /> : tab === 'Order History' ?
          <OrderHistory /> : tab === 'Position History' ?
            <PositionHistory /> : tab === 'Trade History' ?
              <TradeHistory /> : tab === 'TWAP History' ?
                <TWAPHistory /> : tab === 'Transaction History' ?
                  <TransactionHistory /> : <FundingFee />
      }
      <ModalFilter
        show={showFilter}
        setShow={setShowFilter}
      />
    </Safe>
  )
}

export default FuturesHistory