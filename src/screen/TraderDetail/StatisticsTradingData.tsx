import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Icon from '@commom/Icon'
import Txt from '@commom/Txt'
import { numberCommasDot } from '@method/format'
import BoxLine from '@reuse/BoxLine'
import { colors } from '@theme/colors'
import { fonts } from '@theme/fonts'
import React, { useState } from 'react'
import RowItem from './RowItem'

const StatisticsTradingData = ({ theme, t, hotTrader }: any) => {
    const [seeMore, setSeeMore] = useState(false)

    const lastROE = hotTrader.lastROE >= 0 ?
        `+${numberCommasDot(hotTrader.lastROE?.toFixed(2))}` :
        `${numberCommasDot(hotTrader.lastROE?.toFixed(2))}`

    const colorLastROE = hotTrader.lastROE >= 0 ? colors.green2 : colors.red3

    const cumulativePnLReduce =
        hotTrader.chartView.reduce((total: number, item: any) => {
            return total + item.PnL
        }, 0)

    const cumulativePnL = cumulativePnLReduce >= 0 ?
        `+${numberCommasDot(cumulativePnLReduce?.toFixed(2))}` :
        `${numberCommasDot(cumulativePnLReduce?.toFixed(2))}`

    const colorPnL = cumulativePnLReduce >= 0 ? colors.green2 : colors.red3

    return (
        <Box>
            <Box row alignCenter justifySpaceBetween marginTop={20}>
                <Box>
                    <Box row>
                        <Txt color={colors.grayBlue} fontFamily={fonts.IBMPR} size={12}>
                            {t('Last 7D ROI')}
                        </Txt>
                        <Box rotateZ={'90deg'}>
                            <Icon
                                size={10}
                                resizeMode={'contain'}
                                tintColor={theme.black}
                                source={require('@images/wallet/right_arrow.png')}
                            />
                        </Box>
                    </Box>
                    <Box row alignCenter>
                        <BoxLine
                            title={lastROE}
                            color={colorLastROE}
                            borderColor={colorLastROE}
                            font={fonts.M24}
                            size2={18}
                            size={18}
                            paddingText={5}
                            marginTop={10}
                        />
                        <Txt
                            marginTop={3}
                            marginLeft={-12}
                            fontFamily={fonts.IBMPM}
                            color={colorLastROE}
                        >
                            {'%'}
                        </Txt>
                    </Box>
                </Box>

                <Box>
                    <Txt color={colors.grayBlue} fontFamily={fonts.IBMPR} size={12}>
                        {t('Cumulative PnL')}
                    </Txt>
                    <Box row alignCenter>
                        <BoxLine
                            title={cumulativePnL}
                            color={colorPnL}
                            borderColor={colorLastROE}
                            font={fonts.M24}
                            size2={18}
                            size={18}
                            paddingText={5}
                            marginTop={10}
                        />
                        <Txt
                            marginTop={3}
                            marginLeft={-12}
                            fontFamily={fonts.IBMPM}
                            color={colorLastROE}
                        >
                            {'%'}
                        </Txt>
                    </Box>
                </Box>
            </Box>

            <RowItem
                marginTop={20}
                colorValue={theme.black}
                title={t('Account Assets')}
                value={'--'}
            />
            <RowItem
                marginTop={15}
                colorValue={3.78 >= 0 ? colors.green2 : colors.red3}
                title={t('Copier Profit')}
                value={`--`}
            />
            <RowItem
                marginTop={15}
                colorValue={theme.black}
                title={t('Copiers')}
                value={hotTrader.userCopy}
            />
            <Box
                row
                alignCenter
                marginTop={15}
                justifySpaceBetween
                borderBottomWidth={seeMore ? 1 : 0}
                paddingBottom={15}
                borderColor={theme.gray2}
            >
                <Txt color={colors.grayBlue} fontFamily={fonts.IBMPR} size={12}>
                    {t('Risk')}
                </Txt>

                <Box
                    radius={5}
                    padding={3}
                    borderWidth={1}
                    borderColor={colors.yellow}
                    backgroundColor={theme.yellow7}
                >
                    <Txt color={colors.yellow} fontFamily={fonts.M23} size={13}>
                        --
                    </Txt>
                </Box>
            </Box>

            {seeMore &&
                <Box
                    paddingBottom={10}
                    borderColor={theme.gray2}
                >
                    <RowItem
                        value={'--'}
                        marginTop={15}
                        title={t('Win Ratio')}
                        colorValue={theme.black}
                    />

                    <RowItem
                        value={'--'}
                        marginTop={15}
                        title={t('Total Transactions')}
                        colorValue={theme.black}
                    />

                    <RowItem
                        value={'--'}
                        marginTop={15}
                        title={t('No. of Winning Trades')}
                        colorValue={theme.black}
                    />

                    <RowItem
                        value={'--'}
                        marginTop={15}
                        title={t('No. of Losing Trades')}
                        colorValue={theme.black}
                    />

                    <RowItem
                        value={'--'}
                        marginTop={15}
                        title={t('Average Profit')}
                        colorValue={theme.black}
                    />

                    <RowItem
                        value={'--'}
                        marginTop={15}
                        title={t('Average Losses')}
                        colorValue={theme.black}
                    />

                    <RowItem
                        value={'--'}
                        marginTop={15}
                        title={t('PnL Ratio')}
                        colorValue={theme.black}
                    />

                    <Box row alignCenter justifySpaceBetween marginTop={15}>
                        <Txt color={colors.grayBlue} fontFamily={fonts.IBMPR} size={12}>
                            {t('Average Holding Time')}
                        </Txt>
                        <Txt color={theme.black} size={11}>
                            {'--'}
                        </Txt>
                    </Box>

                    <Box row alignCenter justifySpaceBetween marginTop={15}>
                        <Txt color={colors.grayBlue} fontFamily={fonts.IBMPR} size={12}>
                            {t('Trade Days')}
                        </Txt>
                        <Txt color={theme.black} size={11}>
                            {'--'}
                        </Txt>
                    </Box>

                    <RowItem
                        marginTop={15}
                        colorValue={theme.black}
                        value={'--'}
                        title={t('Last Trading Time')}
                    />
                </Box>
            }

            <Btn onPress={() => setSeeMore(!seeMore)}>
                <Box rotateZ={seeMore ? '-90deg' : '90deg'} alignSelf={'center'} marginTop={20}>
                    <Icon
                        size={10}
                        resizeMode={'contain'}
                        tintColor={theme.black}
                        source={require('@images/wallet/right_arrow.png')}
                    />
                </Box>
            </Btn>

            <Box
                borderTopWidth={1}
                marginTop={20}
                borderColor={theme.gray2}
            >
                <Txt marginTop={15} color={colors.grayBlue} size={12} fontFamily={fonts.IBMPR}>
                    {`${t('Currency Unit')}: USDT`}
                </Txt>

                <Box row>
                    <BoxLine
                        title={`${t('Profit Share Ratio')}: `}
                        color={colors.grayBlue}
                        borderColor={colors.grayBlue}
                        font={fonts.IBMPR}
                        size2={12}
                        size={11}
                        paddingText={4}
                        marginTop={10}
                    />
                    <BoxLine
                        title={'10.00%'}
                        color={colors.grayBlue}
                        borderColor={colors.grayBlue}
                        font={fonts.M23}
                        size2={13}
                        size={12}
                        paddingText={6}
                        marginTop={10}
                    />
                </Box>

                <Box row alignCenter marginTop={10}>
                    <Txt color={colors.grayBlue} fontFamily={fonts.IBMPR} size={12}>
                        {`${t('Update Time')}: `}
                    </Txt>
                    <Txt color={colors.grayBlue} fontFamily={fonts.M23}>
                        {t('2023/10/09 08:51:07')}
                    </Txt>
                </Box>
            </Box>
        </Box>
    )
}

export default StatisticsTradingData