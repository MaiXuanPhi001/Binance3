import React from 'react'
import TopBar from './TopBar'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Amount from './Amount'
import Infomation from './Infomation'
import { useRoute } from '@react-navigation/native'
import { socketLimitDeposit } from '@hooks/index'

const DepositDetail = () => {
  const route = useRoute<any>()
  const { depositItem } = route.params

  socketLimitDeposit()

  return (
    <KeyBoardSafe>
      <TopBar />
      <Amount {...{ depositItem }} />
      <Infomation {...{ depositItem }} />
    </KeyBoardSafe>
  )
}

export default DepositDetail