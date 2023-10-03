import { View, Text } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle } from 'react-native-reanimated'

const Block = ({ data_candle }: any) => {
  return (
    <View>
      {data_candle.value.map((_: any, index: number) => {
        return (
          <Animated.View
            style={useAnimatedStyle(() => {
              return {
                height: 20,
                width: data_candle.value[index].close,
                backgroundColor: 'red',
                marginTop: 5
              }
            })}
          />
        )
      })}
    </View>
  )
}

export default Block