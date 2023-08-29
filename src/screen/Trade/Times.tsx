import Box from '@commom/Box'
import Img from '@commom/Img'
import { useAppDispatch, useAppSelector, useTheme } from '@hooks/index'
import { coinChoosedSpotSelector } from '@selector/spotSelector'
import { listTimeLimitTradeSelector, timeLimitSelector } from '@selector/tradeSelector'
import tradeSlice from '@slice/tradeSlice'
import { colors } from '@theme/colors'
import { fonts } from '@theme/fonts'
import contants from '@util/contants'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { io } from 'socket.io-client'
import { ITimeLimit } from 'src/model/tradeModel'

const Times = () => {
    const theme = useTheme()
    const { t } = useTranslation()
    const dispatch = useAppDispatch()
    const [openMore, setOpenMore] = useState(false)
    const timeLimit = useAppSelector(timeLimitSelector)
    const coinChoosed = useAppSelector(coinChoosedSpotSelector)
    const listTimeLimit = useAppSelector(listTimeLimitTradeSelector)

    useEffect((): any => {
        const newSocket = io(contants.HOSTING)

        newSocket.on(`${coinChoosed.symbol}UPDATESPOT`, (times: ITimeLimit[]) => {
            if (times.length > 0 && listTimeLimit.length === 0) {
                dispatch(tradeSlice.actions.setListTimeLimit(times))
                newSocket.disconnect()
            }
        })

        return () => newSocket.disconnect()
    }, [])

    return (
        <View style={{ zIndex: 1 }}>
            <View style={{ flexDirection: 'row', paddingHorizontal: 10, alignItems: 'flex-end' }}>
                <Text style={{ color: '#707781', marginRight: 10 }}>
                    {t('Line')}
                </Text>
                {listTimeLimit.slice(0, 5).map((time: ITimeLimit) => {
                    const timeNumber = time?.timeString?.slice(0, time?.timeString?.length - 1)
                    const timeStr = time?.timeString?.slice(time?.timeString?.length - 1, time?.timeString?.length)
                    return (
                        <TouchableOpacity
                            onPress={() => dispatch(tradeSlice.actions.setTimeLimit(time))}
                            key={time?.timeString}
                            style={{ marginHorizontal: 10 }}
                        >
                            <Text style={[
                                styles.time,
                                { color: timeLimit?.timeString === time?.timeString ? theme.black : '#707781' }
                            ]}>
                                {timeNumber}
                                <Text style={[
                                    styles.timeStr,
                                    { color: timeLimit?.timeString === time?.timeString ? theme.black : '#707781' }
                                ]}>
                                    {timeStr}
                                </Text>
                            </Text>
                        </TouchableOpacity>
                    )
                }

                )}
                <Box>
                    <TouchableOpacity
                        onPress={() => setOpenMore(!openMore)}
                        style={{ flexDirection: 'row', marginHorizontal: 10 }}
                    >
                        <Text style={styles.text}>{t('More')}</Text>
                        <Img
                            source={require('@images/trade/more.png')}
                            width={16}
                            height={16}
                        />
                    </TouchableOpacity>

                    {openMore &&
                        <View style={[styles.moreDown, { backgroundColor: theme.gray2 }]}>
                            {listTimeLimit.slice(5, listTimeLimit.length).map((time: ITimeLimit) => {
                                const timeNumber = time?.timeString?.slice(0, time?.timeString?.length - 1)
                                const timeStr = time?.timeString?.slice(time?.timeString?.length - 1, time?.timeString?.length)

                                return (
                                    <TouchableOpacity
                                        onPress={() => dispatch(tradeSlice.actions.setTimeLimit(time))}
                                        key={time?.timeString}
                                        style={{ margin: 5 }}
                                    >
                                        <Text style={[
                                            styles.time,
                                            { color: timeLimit?.timeString === time?.timeString ? theme.black : '#707781' }
                                        ]}>
                                            {timeNumber}
                                            <Text style={[
                                                styles.timeStr,
                                                { color: timeLimit?.timeString === time?.timeString ? theme.black : '#707781' }
                                            ]}>
                                                {timeStr}
                                            </Text>
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    }
                </Box>

                <TouchableOpacity style={{ flex: 1, alignItems: 'flex-end' }}>
                    <Image
                        source={require('@images/trade/volume.png')}
                        resizeMode='contain'
                        style={{ width: 19, height: 19 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Times

const styles = StyleSheet.create({
    moreDown: {
        top: 25,
        width: 100,
        flexWrap: 'wrap',
        position: 'absolute',
        flexDirection: 'row',
    },
    textContent: {
        fontSize: 12,
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 10,
        borderTopWidth: 1,
        borderColor: colors.line,
        paddingHorizontal: 10,
    },
    text: {
        fontFamily: fonts.FSCR,
        fontWeight: '400',
        color: '#707781',
    },
    time: {
        fontFamily: fonts.M17,
        fontSize: 15,
        color: '#707781',
    },
    timeStr: {
        fontFamily: fonts.IBMPR,
        fontSize: 12,
        color: '#707781',
    }
})