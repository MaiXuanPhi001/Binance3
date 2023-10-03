import { useAppSelector } from '@hooks/index'
import { coinsFuturesChartSelector } from '@selector/futuresSelector'
import React, { useEffect, useState } from 'react'
import { useSharedValue } from 'react-native-reanimated'
import CoinsAnimated from './CoinsAnimated'
import { io } from 'socket.io-client'
import contants from '@util/contants'
import { ICoins } from 'src/model/futuresModel'

const Coins = () => {
    const coins = useSharedValue<ICoins[]>([])
    const [render, setRendet] = useState(0)

    useEffect((): any => {
        const newSocket = io(contants.HOSTING)

        newSocket.on('listCoin', (coinsSocket: ICoins[]) => {
            if (coinsSocket) {
                coins.value = [{ close: Math.random() }, { close: Math.random() }]
                setRendet(render + 1)
            }
        })

        return () => newSocket.disconnect()
    }, [render])

    return (
        <CoinsAnimated
            coins={coins}
        />
    )
}

export default Coins