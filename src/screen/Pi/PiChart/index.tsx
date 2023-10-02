import React from 'react'
import Animated, { useSharedValue } from 'react-native-reanimated'
import { Svg } from 'react-native-svg'
import Candles from './Candles';

interface Props {
    height: number;
    width: number;
    data: any;
}

const PiChart = ({
    height,
    width,
    data,
}: Props) => {
    const gap_candle = useSharedValue(width * 2.55 / 100)
    const data_candle = useSharedValue([])
    data_candle.value = data
    console.log(data_candle.value.length)

    return (
        <Animated.View>
            <Svg height={height} width={width} style={{ backgroundColor: 'black' }}>
                <Candles
                    data_candle={data_candle}
                />
            </Svg>
        </Animated.View>
    )
}

export default PiChart