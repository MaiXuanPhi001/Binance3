import { View, Text } from 'react-native'
import React, { memo } from 'react'
import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { colors } from '@theme/colors'
import { useTranslation } from 'react-i18next'
import { ICoins } from 'src/model/futuresModel'
import CoinItem from './CoinItem'
import { useAppDispatch, useTheme } from '@hooks/index'
import futuresSlice from '@slice/futuresSlice'
import { navigate } from '@navigation/navigationRef'
import { screen } from '@util/screens'
import { Coin } from 'src/model/tradeModel'
import Animated, { useAnimatedProps, useAnimatedStyle, useDerivedValue } from 'react-native-reanimated'
import { TextInput } from 'react-native-gesture-handler'
import { ReText } from 'react-native-redash'

const InputAnimated = Animated.createAnimatedComponent(TextInput)

const CoinsAnimated = ({ coins }: any) => {
    const theme = useTheme()
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const handleMoveTrade = (coin: Coin) => {
        dispatch(futuresSlice.actions.setSymbol({
            symbol: coin.symbol,
            currency: coin.currency,
        }))
        navigate(screen.TRADE)
    }

    return (
        <Box marginTop={20}>
            <Box row alignCenter justifySpaceBetween>
                <Txt color={colors.gray2} size={12}>{t('Name')}</Txt>
                <Box row >
                    <Txt color={colors.gray2} size={12}>{t('Last Price')}</Txt>

                    <Box width={80} alignEnd marginLeft={20}>
                        <Txt
                            color={colors.gray2}
                            size={12}
                        >
                            {t('24h chg%')}
                        </Txt>
                    </Box>
                </Box>
            </Box>
            <Animated.View>
                {coins.value.map((coin: ICoins, index: number) => {
                    return (
                        <Animated.View
                            style={useAnimatedStyle(() => {
                                return {
                                    height: 20,
                                    width: coins.value[index].close,
                                    backgroundColor: 'red',
                                    marginTop: 10,
                                }
                            })}
                        />
                    )
                })}
            </Animated.View>
        </Box >
    )
}

export default memo(CoinsAnimated)