import { View, Text } from 'react-native'
import React from 'react'
import Box from '@commom/Box';
import Icon from '@commom/Icon';
import Txt from '@commom/Txt';
import Btn from '@commom/Btn';
import { colors } from '@theme/colors';
import { fonts } from '@theme/fonts';
import { LineChart } from 'react-native-wagmi-charts';
import Line from './Line';

interface Props {
    t: any;
    theme: any;
}

const TraderItem = ({ theme, t }: Props) => {
    const data = [
        {
            timestamp: 1625945400000,
            value: 1,
        },
        {
            timestamp: 1625946300000,
            value: 5,
        },
        {
            timestamp: 1625947200000,
            value: 1,
        },
        {
            timestamp: 1625948100000,
            value: 3,
        },
    ];

    return (
        <Box
            radius={10}
            padding={15}
            borderWidth={1}
            marginBottom={10}
            borderColor={theme.gray2}
        >
            <Box row>
                <Box
                    paddingRight={15}
                    justifySpaceBetween
                    alignStart
                >
                    <Icon
                        size={28}
                        source={require('@images/home/user.png')}
                    />

                    <Box rotateZ={'-90deg'}>
                        <Txt color={colors.grayBlue} fontFamily={fonts.AS} marginBottom={20}>
                            Binance
                        </Txt>
                    </Box>
                </Box>

                <Box flex={1}>
                    <Box
                        paddingBottom={10}
                        borderBottomWidth={1}
                        borderColor={theme.gray2}
                    >
                        <Box
                            row
                            alignCenter
                            justifySpaceBetween
                        >
                            <Box>
                                <Txt color={theme.black} fontFamily={fonts.IBMPM}>
                                    xrprod
                                </Txt>
                                <Box row alignCenter>
                                    <Icon
                                        size={13}
                                        marginRight={5}
                                        source={require('@images/coppyTrade/medal_yellow.png')}
                                    />
                                    <Txt
                                        size={12}
                                        color={theme.black}
                                        fontFamily={fonts.IBMPR}
                                    >
                                        {t(`Binance HD standard`)}
                                    </Txt>
                                </Box>
                            </Box>
                            <Btn
                                radius={15}
                                paddingVertical={3}
                                paddingHorizontal={15}
                                backgroundColor={colors.yellow}
                            >
                                <Txt fontFamily={fonts.IBMPR} size={13}>
                                    {t('Copy')}
                                </Txt>
                            </Btn>
                        </Box>

                        <Box row>
                            <Box marginTop={10} flex={1}>
                                <Txt
                                    size={18}
                                    fontFamily={fonts.M23}
                                    color={1 > 0 ? colors.green2 : colors.red3}
                                >
                                    +59.76
                                    <Txt
                                        color={1 > 0 ? colors.green2 : colors.red3}
                                        fontFamily={fonts.IBMPM}
                                    >
                                        %
                                    </Txt>
                                </Txt>
                                <Txt color={colors.grayBlue} fontFamily={fonts.IBMPR} size={12}>
                                    {t('Exchange rate last 30 days')}
                                </Txt>
                            </Box>

                            <Line {...{ data, theme }} />
                        </Box>
                    </Box>

                    <Box
                        row
                        alignCenter
                        marginTop={10}
                        justifySpaceBetween
                    >
                        <Box row alignCenter>
                            <Txt color={colors.grayBlue} size={12} fontFamily={fonts.IBMPR}>
                                {t('Copiers')}
                            </Txt>
                            <Txt color={theme.black} marginLeft={10} fontFamily={fonts.M24}>
                                2651
                            </Txt>
                        </Box>

                        <Box row alignCenter>
                            <Txt color={colors.grayBlue} size={12} fontFamily={fonts.IBMPR} marginRight={5}>
                                {t('Risk')}
                            </Txt>
                            <Box
                                radius={5}
                                borderWidth={1}
                                padding={3}
                                borderColor={colors.yellow}
                                backgroundColor={theme.yellow7}
                            >
                                <Txt color={colors.yellow} fontFamily={fonts.M23} size={13}>
                                    6
                                </Txt>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default TraderItem