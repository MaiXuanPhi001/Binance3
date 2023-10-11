import Box from '@commom/Box'
import React, { useState } from 'react'
import LineChartROI from './LineChartROI'
import Txt from '@commom/Txt'
import Icon from '@commom/Icon'
import { fonts } from '@theme/fonts'
import Btn from '@commom/Btn'

const ROI = ({ theme, t, hotTrader }: any) => {
    const chartView = hotTrader.chartView
    const [tabChoosed, setTabChoosed] = useState<string>('ROI')

    const max = chartView.length < 1 ? 0 : Math.max.apply(Math, chartView.map((item: any) => item.ROE))
    const min = chartView.length < 1 ? 0 : Math.min.apply(Math, chartView.map((item: any) => item.ROE))
    const [data, setData] = useState<any>({
        indexColumn: {
            max: max <= 0 ? 2 : max,
            min: min,
            total: 5,
            fixed: 2,
        },
        lineYellow: chartView.map((item: any) => item.ROE),
        indexRow: {
            total: 2,
            data: chartView.map((item: any) => item.created_at)
        }
    })

    const tabs = ['ROI', 'Cumulative PnL', 'Account Assets']
    // const data: any = {
    //     indexColumn: {
    //         max: 15,
    //         min: 0,
    //         total: 5,
    //         fixed: 2,
    //     },
    //     lineYellow: [0, 5, 8.15, 8.97, 11.10, 11.72, 13.18, 13.14],
    //     indexRow: {
    //         total: 4,
    //         data: [1687348799999, 1687348799999, 1687348799999, 1687348799999, 1687348799999, 1687348799999, 1687348799999, 1687348799999]
    //     },
    // }
    return (
        <Box>
            <Box row alignCenter justifySpaceBetween>
                <Txt color={theme.black} size={16} fontFamily={fonts.IBMPM}>
                    ROI
                </Txt>
                <Box
                    row
                    radius={20}
                    paddingVertical={10}
                    paddingHorizontal={15}
                    backgroundColor={theme.gray2}
                >
                    <Txt color={theme.black}>
                        {`${t('Last 7D')}  `}
                    </Txt>
                    <Box rotateZ={'90deg'}>
                        <Icon
                            size={12}
                            resizeMode={'contain'}
                            source={require('@images/wallet/right_arrow.png')} />
                    </Box>
                </Box>
            </Box>

            <LineChartROI
                indexRow={data.indexRow}
                lineYellow={data.lineYellow}
                indexColunm={data.indexColumn}
            />

            <Box row alignCenter marginTop={20}>
                {tabs.map((tab) =>
                    <Btn
                        key={tab}
                        radius={20}
                        paddingVertical={5}
                        paddingHorizontal={10}
                        backgroundColor={tab == tabChoosed ? theme.gray2 : theme.bg}
                    >
                        <Txt color={theme.black} size={12} fontFamily={fonts.IBMPR}>
                            {t(tab)}
                        </Txt>
                    </Btn>
                )}
            </Box>
        </Box>
    )
}

export default ROI