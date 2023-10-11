import Box from '@commom/Box'
import Icon from '@commom/Icon'
import Txt from '@commom/Txt'
import { fonts } from '@theme/fonts'
import { colors as colorsRiks } from '@util/db'
import React, { useState } from 'react'
import ColumnsChart from './ColumnsChart'
import { numberCommasDot } from '@method/format'
import { colors } from '@theme/colors'

const RiskAssessment = ({ theme, t }: any) => {
    const data: any = {
        indexColumn: {
            max: 0,
            min: 0,
            total: 6,
            fixed: 1,
        },
        columns: [],
        indexRow: {
            total: 4,
            data: []
        },
    }

    return (
        <Box marginTop={40}>
            <Box row alignCenter justifySpaceBetween>
                <Txt color={theme.black} size={16} fontFamily={fonts.IBMPM}>
                    {t('Risk Assessment')}
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

            <ColumnsChart
                indexRow={data.indexRow}
                columns={data.columns}
                indexColunm={data.indexColumn}
            />

            <Box row alignCenter justifyEnd marginTop={20}>
                <Box row alignCenter marginRight={5}>
                    {colorsRiks.map((col) =>
                        <Box
                            height={4}
                            key={col.value}
                            width={15}
                            backgroundColor={col.color}
                        />
                    )}
                </Box>

                <Txt size={10} color={theme.black}>
                    1~9
                </Txt>
            </Box>

            <Box row justifySpaceBetween alignEnd>
                <Box>
                    <Txt color={colors.grayBlue2} size={12}>
                        {t('180D Max. Loss')}
                    </Txt>
                    <Txt color={theme.black} fontFamily={fonts.M23} size={18} marginTop={10}>
                        {`--`}
                    </Txt>
                    <Txt color={colors.grayBlue} marginTop={5} size={12}>
                        {t('Day')}
                    </Txt>
                </Box>

                <Box>
                    <Txt color={theme.black} fontFamily={fonts.M23} size={18} marginTop={10}>
                        {`--`}
                    </Txt>
                    <Txt color={colors.grayBlue} marginTop={5} size={12}>
                        {t('Week')}
                    </Txt>
                </Box>

                <Box>
                    <Txt color={theme.black} fontFamily={fonts.M23} size={18} marginTop={10}>
                        {`--`}
                    </Txt>
                    <Txt color={colors.grayBlue} marginTop={5} size={12}>
                        {t('Month')}
                    </Txt>
                </Box>
            </Box>
        </Box>
    )
}

export default RiskAssessment