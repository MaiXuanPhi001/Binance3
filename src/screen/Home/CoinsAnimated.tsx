import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Txt from '@commom/Txt'
import { numberCommasDot } from '@method/format'
import { colors } from '@theme/colors'
import { fonts } from '@theme/fonts'
import React, { memo } from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Animated, { useAnimatedProps, useAnimatedStyle } from 'react-native-reanimated'
import { ICoins } from 'src/model/futuresModel'

const InputAnimated = Animated.createAnimatedComponent(TextInput)

const CoinsAnimated = ({ coins, theme }: any) => {
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
        <View>
            {coins.value.map((c: ICoins, index: number) => {
                // let percentChange: string = ''
                // let colorPercentChange: string = '#f1485f'

                // if (coins.value[index].percentChange > 0) {
                //     percentChange = `+${coins.value[index].percentChange?.toFixed(2)}%`
                //     colorPercentChange = '#30bc86'
                // } else {
                //     percentChange = `${coins.value[index].percentChange?.toFixed(2)}%`
                // }
                return (
                    <Btn
                        // onPress={() => onMoveTrade(coin)}
                        row
                        alignCenter
                        justifySpaceBetween
                        marginVertical={10}
                        key={coins.value[index].id}
                    >
                        <Box row alignCenter>
                            <Txt size={15} fontFamily={fonts.SGM} color={theme.black}>
                                {coins.value[index].currency}
                                <Txt size={10} color={colors.grayBlue2}>
                                    {' /USDT'}
                                </Txt>
                            </Txt>
                            <Box
                                backgroundColor={theme.gray2}
                                padding={1}
                                marginLeft={5}
                                alignCenter
                                justifyCenter
                            >
                                <Txt fontFamily={fonts.M24} color={colors.yellow} size={12}>
                                    10x
                                </Txt>
                            </Box>
                        </Box>

                        <Box row>
                            <Box alignEnd>
                                {/* <Txt size={16} fontFamily={fonts.M24} color={theme.black}>
                                    {numberCommasDot(coins.value[index].close)}
                                </Txt> */}
                                <InputAnimated
                                    style={{
                                        color: theme.black,
                                        fontFamily: fonts.M24,
                                        fontSize: 16,
                                    }}
                                    editable={false}
                                    animatedProps={useAnimatedProps((): any => {
                                        return {
                                            text: `${numberCommasDot(coins.value[index].close)}`,
                                        }
                                    })}
                                />
                                {/* <Txt
                                    size={12}
                                    color={colors.grayBlue2}
                                    fontFamily={fonts.M24}
                                    marginTop={3}
                                >
                                    {numberCommasDot(coins.value[index].bestAsk?.toFixed(2))}
                                    <Txt size={10} color={colors.grayBlue2}>{' $'}</Txt>
                                </Txt> */}
                                <Box row alignCenter>
                                    <InputAnimated
                                        style={{
                                            color: colors.grayBlue2,
                                            fontFamily: fonts.M24,
                                            fontSize: 12,
                                            marginTop: 3,
                                        }}
                                        editable={false}
                                        animatedProps={useAnimatedProps((): any => {
                                            return {
                                                text: `${numberCommasDot(coins.value[index].bestAsk?.toFixed(2))}`,
                                            }
                                        })}
                                    />
                                    <Txt size={10} color={colors.grayBlue2} marginTop={3}>
                                        {' $'}
                                    </Txt>
                                </Box>
                            </Box>

                            <Animated.View
                                style={useAnimatedStyle(() => {
                                    let colorPercentChange: string = '#f1485f'

                                    if (coins.value[index].percentChange > 0) {
                                        colorPercentChange = '#30bc86'
                                    } 
                                    return {
                                        backgroundColor: colorPercentChange,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: 80,
                                        borderRadius: 3,
                                        marginLeft: 20,
                                        height: 32
                                    }
                                })}
                            >
                                <InputAnimated
                                    style={{
                                        fontSize: 12,
                                        fontFamily: fonts.RM,
                                        color: colors.white
                                    }}
                                    editable={false}
                                    animatedProps={useAnimatedProps((): any => {
                                        let percentChange: string = ''

                                        if (coins.value[index].percentChange > 0) {
                                            percentChange = `+${coins.value[index].percentChange?.toFixed(2)}%`
                                        } else {
                                            percentChange = `${coins.value[index].percentChange?.toFixed(2)}%`
                                        }
                                        return {
                                            text: `${percentChange}`,
                                        }
                                    })}
                                />
                            </Animated.View>
                            {/* <Box
                                backgroundColor={colorPercentChange}
                                alignCenter
                                justifyCenter
                                width={80}
                                radius={3}
                                marginLeft={20}
                                height={32}
                            >
                                <Txt
                                    size={12}
                                    fontFamily={fonts.RM}
                                    color={colors.white}
                                >
                                    {percentChange}
                                </Txt>
                            </Box> */}
                        </Box>
                    </Btn>
                )
            })}
        </View >
    )
}

export default memo(CoinsAnimated)