import Box from '@commom/Box'
import styles from '@commom/Box/styles'
import Btn from '@commom/Btn'
import Txt from '@commom/Txt'
import { useAppDispatch, useTheme } from '@hooks/index'
import { navigate } from '@navigation/navigationRef'
import futuresSlice from '@slice/futuresSlice'
import { colors } from '@theme/colors'
import { screen } from '@util/screens'
import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { TextInput } from 'react-native-gesture-handler'
import Animated, { useAnimatedProps, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { ICoins } from 'src/model/futuresModel'
import { Coin } from 'src/model/tradeModel'
import CoinsMap from './CoinsMap'
import { View } from 'react-native'

const InputAnimated = Animated.createAnimatedComponent(TextInput)

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
console.log('render: ')
    return (
        <View>
            {coins.value.map((coin: ICoins, index: number) => {
                console.log('index: ', coins.value[index].close)
                return (
                    <Animated.View
                        key={index}
                    // style={useAnimatedStyle(() => {
                    //     return {
                    //         height: 20,
                    //         width: coins.value[index].close,
                    //         backgroundColor: 'red',
                    //         marginTop: 10,
                    //     }
                    // })}
                    >
                        <InputAnimated
                            defaultValue={'0'}
                            style={{
                                color: 'white'
                            }}
                            editable={false}
                            animatedProps={useAnimatedProps((): any => {
                                return {
                                    text: `${coins.value[index].close}`,
                                }
                            })}
                        />
                    </Animated.View>
                )
            })}
        </View >
    )
}

export default memo(CoinsAnimated)