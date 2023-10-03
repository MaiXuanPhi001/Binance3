import { View, Text } from 'react-native'
import React, { memo, useState } from 'react'
import Animated, { useAnimatedProps, useAnimatedStyle } from 'react-native-reanimated'
import { G, Line } from 'react-native-svg'

const LineAnimated = Animated.createAnimatedComponent(Line)

const Candles = ({
    data_candle
}: any) => {
    console.log('candles: ', data_candle.value[data_candle.value.length - 1]?.close)

    return (
        <G key={'g_candles'}>
            {data_candle.value.map((candle: any, index: number) => {
                const y1 = candle.open
                const y2 = candle.close
                const gap = 4 * index - 1700

                return (
                    <G key={'g_candle_map' + index}>
                        <LineAnimated
                            x1={gap}
                            y1={y1}
                            x2={gap}
                            y2={y2}
                            stroke={'green'}
                            animatedProps={useAnimatedProps(() => {
                                return {
                                    y2: data_candle.value[index].close
                                }
                            })}
                        />
                    </G>
                )
            })}
        </G>
    )
}

export default memo(Candles)