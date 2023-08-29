import Img from '@commom/Img'
import { useAppSelector, useTheme } from '@hooks/index'
import { numberCommasDot } from '@method/format'
import { coinChoosedSpotSelector } from '@selector/spotSelector'
import { getTotalSell } from '@service/tradeService'
import { colors } from '@theme/colors'
import { fonts } from '@theme/fonts'
import contants from '@util/contants'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View } from 'react-native'
import io from 'socket.io-client'
import { BuySell } from 'src/model/tradeModel'

const SellInto = () => {
    const theme = useTheme()
    const { t } = useTranslation()
    const coinChoosed = useAppSelector(coinChoosedSpotSelector)
    const [sells, setSells] = useState<BuySell[]>([])

    useEffect((): any => {
        if (sells.length === 0) {
            handleGetTotalSell()
        }

        const newSocket = io(contants.HOSTING)
        newSocket.on(`${coinChoosed.symbol}SELL`, (data) => {
            if (data.array) {
                setSells(data.array.slice(0, 7))
            }
        })

        return () => newSocket.disconnect()
    }, [sells])

    const handleGetTotalSell = async () => {
        const res = await getTotalSell({
            limit: 7,
            page: 1,
            symbol: coinChoosed.symbol,
        })
        if (res.status) {
            setSells(res.data.array)
        }
    }

    return (
        <View style={{ flex: 1, paddingLeft: 5 }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Text style={{ marginVertical: 10, color: colors.grayBlue }}>
                    {t('Ask')}
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: theme.white2,
                        padding: 4,
                        borderRadius: 5,
                    }}
                >
                    <Text style={{ fontSize: 12, color: colors.grayBlue, fontWeight: '500' }}>
                        0.0001
                    </Text>
                    <Img
                        source={require('@images/trade/more.png')}
                        width={15}
                        height={15}
                        marginLeft={5}
                    />
                </View>
            </View>
            {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: '40%' }}>
                    <Text style={styles.txtTitle}>{t('Price')}</Text>
                </View>
                <View style={{ width: '40%' }}>
                    <Text style={styles.txtTitle}>{t('Amount')}</Text>
                </View>
                <View style={{ width: '20%', alignItems: 'flex-end' }}>
                    <Text style={styles.txtTitle}>{t('Total')}</Text>
                </View>
            </View> */}
            {sells.map((sell: BuySell, index: number) =>
                <Sell key={index} sell={sell} theme={theme} />
            )}
        </View>
    )
}

const Sell = ({ sell, theme }: { sell: BuySell, theme: any }) => {
    const rndInt = Math.floor(Math.random() * 35) + 30

    return (
        <View style={{ alignItems: 'flex-start' }}>
            <View style={[styles.slider, { width: rndInt + '%', backgroundColor: theme.red2 }]} />
            <View style={styles.content}>
                <View>
                    <Text style={styles.txtPrice}>
                        {numberCommasDot(sell?.price?.toFixed(2))}
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.txtTotal} numberOfLines={1}>
                        {numberCommasDot(sell?.amount?.toFixed(5))}
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default SellInto

const styles = StyleSheet.create({
    txtTotal: {
        fontFamily: fonts.M17,
        fontSize: 15,
        color: colors.grayBlue,
    },
    txtPrice: {
        fontFamily: fonts.M17,
        fontSize: 15,
        color: colors.redCan,
    },
    content: {
        flexDirection: 'row',
        position: 'absolute',
        width: '100%',
        justifyContent: 'space-between',
        height: 22,
        alignItems: 'center',
    },
    slider: {
        width: '100%',
        height: 22,
        backgroundColor: '#352935',
    },
    txtTitle: {
        fontSize: 12,
        fontFamily: fonts.FSCR,
        color: colors.grayBlue,
    },
})