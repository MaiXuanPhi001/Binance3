import contants from '@util/contants'
import React, { useEffect, useState } from 'react'
import { useSharedValue } from 'react-native-reanimated'
import { io } from 'socket.io-client'
import { ICoins } from 'src/model/futuresModel'
import CoinsAnimated from './CoinsAnimated'

const Coins = () => {
    const [data, setData] = useState<ICoins[]>([])
    const coins = useSharedValue<ICoins[]>([])

    useEffect((): any => {
        const newSocket = io(contants.HOSTING)

        newSocket.on('listCoin', (coinsSocket: ICoins[]) => {
            if (coinsSocket) {
                setData([{ close: Math.random() }, { close: Math.random() }])
            }
        })

        return () => newSocket.disconnect()
    }, [])
    coins.value = data
    return (
        <CoinsAnimated
            coins={coins}
        />
    )
}

export default Coins