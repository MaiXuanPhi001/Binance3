import { View, Text } from 'react-native'
import React, { memo } from 'react'
import Animated, { useAnimatedProps } from 'react-native-reanimated'
import { TextInput } from 'react-native-gesture-handler'
import { ICoins } from 'src/model/futuresModel'
const InputAnimated = Animated.createAnimatedComponent(TextInput)
const CoinsMap = ({ coins }: any) => {
    console.log('render:')
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

export default memo(CoinsMap)