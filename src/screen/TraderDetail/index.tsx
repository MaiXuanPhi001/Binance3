import { getPositionToTraderThunk } from '@asyncThunk/copyTradeAsyncThunk'
import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Txt from '@commom/Txt'
import { hideBottomTab, useAppDispatch, useAppSelector, useTheme } from '@hooks/index'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import LoadingYellow from '@reuse/LoadingYellow'
import { hotTraderCopyTradeSelector, positionToTraderCopyTraderSelector } from '@selector/copyTradeSelector'
import { colors } from '@theme/colors'
import { fonts } from '@theme/fonts'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Avatar from './Avatar'
import Local from './Local'
import Statistics from './Statistics'
import TransactionData from './TransactionData'
import { getProfileThunk } from '@asyncThunk/userAsyncThunk'
import { setHotTrader } from '@slice/copyTradeSlice'
import { navigate } from '@navigation/navigationRef'
import { screen } from '@util/screens'
import { useNavigation } from '@react-navigation/native'
import { styles } from '@navigation/Container'

const TraderDetail = () => {
  const theme = useTheme()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const navigation = useNavigation()

  const hotTrader = useAppSelector(hotTraderCopyTradeSelector)
  const positionToTrader = useAppSelector(positionToTraderCopyTraderSelector)

  hideBottomTab()

  useEffect(() => {
    handleGetPositionToTrader()

    navigation.addListener('focus', () => {
      navigation.getParent()?.setOptions({ tabBarStyle: styles.noneContainer })
    })
  }, [])

  const handleGetPositionToTrader = async () => {
    dispatch(getPositionToTraderThunk(hotTrader.userid))
  }

  const handleRefresh = async () => {
    handleGetPositionToTrader()
    await dispatch(getProfileThunk())
  }

  const hanldeCopyNow = () => {
    dispatch(setHotTrader(hotTrader))
    navigate(screen.COPY_TRADE)
  }

  return (
    <>
      {positionToTrader.loading ?
        <Box flex={1} backgroundColor={theme.bg} alignCenter justifyCenter>
          <LoadingYellow />
        </Box>
        :
        <Box flex={1} backgroundColor={theme.bg}>
          <KeyBoardSafe
            paddingBottom={40}
            onRefesh={handleRefresh}
          >
            <Avatar {...{ theme, t, hotTrader }} />
            <Local {...{ theme, t }} />
            <Statistics {...{ theme, t }} />
            <TransactionData {...{ theme, t }} />
          </KeyBoardSafe>
          <Box
            marginBottom={40}
            paddingHorizontal={15}
          >
            <Btn
              radius={20}
              paddingVertical={10}
              onPress={hanldeCopyNow}
              backgroundColor={colors.yellow}
            >
              <Txt fontFamily={fonts.IBMPM}>
                {t('Copy Now')}
              </Txt>
            </Btn>
          </Box>
        </Box>
      }
    </>
  )
}

export default TraderDetail