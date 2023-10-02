import React from 'react'
import TopBar from './TopBar'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import Amount from './Amount'
import Infomation from './Infomation'
import { useRoute } from '@react-navigation/native'
import { socketLimitDeposit } from '@hooks/index'

const DetailWithdraw = () => {
  const route = useRoute<any>()
  const { withdrawItem } = route.params

  socketLimitDeposit()

  return (
    <KeyBoardSafe>
      <TopBar />
      <Amount {...{ withdrawItem }} />
      <Infomation {...{ withdrawItem }} />
    </KeyBoardSafe>
  )
}

export default DetailWithdraw