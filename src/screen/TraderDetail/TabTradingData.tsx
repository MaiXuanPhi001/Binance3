import Box from '@commom/Box'
import React from 'react'
import StatisticsTradingData from './StatisticsTradingData'
import ROI from './ROI'
import WeeklyProfit from './WeeklyProfit'
import RiskAssessment from './RiskAssessment'
import Favorite from './Favorite'
import Details from './Details'
import { useAppSelector } from '@hooks/index'
import { hotTraderCopyTradeSelector } from '@selector/copyTradeSelector'

const TabTradingData = ({ theme, t }: any) => {
    const hotTrader = useAppSelector(hotTraderCopyTradeSelector)

    return (
        <Box>
            <StatisticsTradingData {...{ theme, t, hotTrader }} />
            <ROI {...{ theme, t, hotTrader }} />
            <WeeklyProfit {...{ theme, t }} />
            <RiskAssessment {...{ theme, t }} />
            <Favorite {...{ theme, t }} />
            <Details {...{ theme, t }} />
        </Box>
    )
}

export default TabTradingData