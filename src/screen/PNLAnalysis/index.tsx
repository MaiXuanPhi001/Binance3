import KeyBoardSafe from '@reuse/KeyBoardSafe'
import React, { useState } from 'react'
import Header from './Header'
import DatePNL from './DatePNL'
import Footer from './Footer'
import { hideBottomTab, socketLimitDeposit } from '@hooks/index'
import { delay } from '@method/alert'

const PNLAnalysis = () => {
  const [refresh, setRefresh] = useState(false)

  hideBottomTab()
  socketLimitDeposit()

  const handleRefresh = async () => {
    setRefresh(true)
    await delay(2000)
    setRefresh(false)
  }

  return (
    <KeyBoardSafe
      refesh={refresh}
      onRefesh={handleRefresh}
    >
      {refresh ?
        <></>
        :
        <>
          <Header />
          <DatePNL />
          <Footer />
        </>
      }
    </KeyBoardSafe>
  )
}

export default PNLAnalysis