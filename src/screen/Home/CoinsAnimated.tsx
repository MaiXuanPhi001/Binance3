import Box from '@commom/Box'
import styles from '@commom/Box/styles'
import Btn from '@commom/Btn'
import Txt from '@commom/Txt'
import { useAppDispatch, useTheme } from '@hooks/index'
import { navigate } from '@navigation/navigationRef'
import futuresSlice from '@slice/futuresSlice'
import { colors } from '@theme/colors'
import { screen } from '@util/screens'
import React, { memo, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { TextInput } from 'react-native-gesture-handler'
import Animated, { useAnimatedProps, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { ICoins } from 'src/model/futuresModel'
import { Coin } from 'src/model/tradeModel'
import CoinsMap from './CoinsMap'
import { View } from 'react-native'

const CoinsAnimated = ({ data }: any) => {
    const coins = useSharedValue([])
    coins.value = data
    coins.value = data
    coins.value = data
    coins.value = data
    coins.value = data
    coins.value = data
    // const theme = useTheme()
    // const { t } = useTranslation()
    // const dispatch = useAppDispatch()

    // const handleMoveTrade = (coin: Coin) => {
    //     dispatch(futuresSlice.actions.setSymbol({
    //         symbol: coin.symbol,
    //         currency: coin.currency,
    //     }))
    //     navigate(screen.TRADE)
    // }

    return (
        <>
            {data.length > 0 &&
                <CoinsMap
                    coins={coins}
                />
            }
        </>
    )
}

export default CoinsAnimated