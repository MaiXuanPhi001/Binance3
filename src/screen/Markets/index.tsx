import Box from '@commom/Box'
import { socketLimitDeposit, useTheme } from '@hooks/index'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { height } from '@util/responsive'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Coins from './Coins'
import Search from './Search'
import SpotFutures from './SpotFutures'
import Type from './Type'

const Markets = () => {
  const { t } = useTranslation()
  const theme = useTheme()

  socketLimitDeposit()

  return (
    <KeyBoardSafe
      bg={theme.bg}
    >
      <Search theme={theme} />
      <Type t={t} theme={theme}
      />
      <Box
        paddingTop={15}
        height={height}
        paddingHorizontal={15}
        borderTopLeftRadius={15}
        borderTopRightRadius={15}
        backgroundColor={theme.bg}
      >
        <SpotFutures theme={theme} t={t} />
        <Coins />
      </Box>
    </KeyBoardSafe>
  )
}

export default Markets