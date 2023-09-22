import { useTheme } from '@hooks/index'
import Safe from '@reuse/Safe'
import React from 'react'
import Header from './Header'

const HotTeller = () => {
    const theme = useTheme()

    return (
        <Safe paddingHorizontal={15}>
            <Header />
        </Safe>
    )
}

export default HotTeller