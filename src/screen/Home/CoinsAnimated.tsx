import Box from '@commom/Box'
import Txt from '@commom/Txt'
import { useAppDispatch, useTheme } from '@hooks/index'
import { navigate } from '@navigation/navigationRef'
import futuresSlice from '@slice/futuresSlice'
import { colors } from '@theme/colors'
import { screen } from '@util/screens'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'
import { ICoins } from 'src/model/futuresModel'
import { Coin } from 'src/model/tradeModel'


const CoinsAnimated = ({ coins }: any) => {
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

    console.log('render')

    return (
        <Box marginTop={20}>
            {/* <Box row alignCenter justifySpaceBetween>
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
            </Box> */}
            {coins.value.map((coin: ICoins, index: number) => {
                return (
                    <Animated.View
                        key={index}
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
        </Box >
    )
}

export default memo(CoinsAnimated)