import contants from '@util/contants'
import React, { useEffect, useState } from 'react'
import { useSharedValue } from 'react-native-reanimated'
import { io } from 'socket.io-client'
import { ICoins } from 'src/model/futuresModel'
import CoinsAnimated from './CoinsAnimated'

const Coins = () => {
    const [data, setData] = useState<ICoins[]>([])
    const coins = useSharedValue<any>([])

    useEffect((): any => {
        const newSocket = io(contants.HOSTING)

        newSocket.on('listCoin', (coinsSocket: ICoins[]) => {
            if (coinsSocket) {
                setData([...coinsSocket])
            }
        })

        return () => newSocket.disconnect()
    }, [])

    coins.value = data
    
    return (
        <>
            {data.length > 0 &&
                <CoinsAnimated
                    coins={coins}
                />
            }
        </>
    )
}

export default Coins