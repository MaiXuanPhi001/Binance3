import { getHistoryOrderCopyThunk, getListPositionCloseCopyThunk } from '@asyncThunk/copyTradeAsyncThunk'
import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Txt from '@commom/Txt'
import { useAppDispatch, useTheme } from '@hooks/index'
import Back from '@reuse/Back'
import Safe from '@reuse/Safe'
import { colors } from '@theme/colors'
import { fonts } from '@theme/fonts'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import TabOrderCopyHistory from './TabOrderCopyHistory'
import TabPositionCopyHistory from './TabPositionCopyHistory'

const POSITIONS = 'Position Copy history'
const ORDER = 'Order Copy History'

const tabs = [
    POSITIONS,
    ORDER,
]

const HistoryCopyTrader = () => {
    const theme = useTheme()
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const [tabChoosed, setTabChoosed] = useState(POSITIONS)

    useEffect(() => {
        handleGetAPI()
    }, [])

    const handleGetAPI = async () => {
        const req = { limit: 1000, page: 1 }
        dispatch(getListPositionCloseCopyThunk(req))
        dispatch(getHistoryOrderCopyThunk(req))
    }

    return (
        <Safe paddingHorizontal={15}>
            <Box row alignCenter justifySpaceBetween>
                <Back size={16} />
                <Txt color={theme.black} fontFamily={fonts.IBMPM} size={16}>
                    {t('Trader copy history')}
                </Txt>
                <Txt></Txt>
            </Box>

            <Box
                row
                alignStart
                marginTop={20}
                borderBottomWidth={1}
                borderColor={theme.gray2}
            >
                {tabs.map((tab) => {
                    return (
                        <Btn
                            key={tab}
                            alignCenter
                            marginRight={20}
                            onPress={() => setTabChoosed(tab)}
                        >
                            <Txt color={theme.black} fontFamily={fonts.IBMPM} marginBottom={10}>
                                {t(tab)}
                            </Txt>
                            {tab == tabChoosed &&
                                <Box
                                    width={30}
                                    height={3}
                                    backgroundColor={colors.yellow}
                                />
                            }
                        </Btn>
                    )
                })}
            </Box>

            {
                tabChoosed == POSITIONS ?
                    <TabPositionCopyHistory {...{ t, theme, handleGetAPI }} /> :
                    <TabOrderCopyHistory {...{ t, theme,  handleGetAPI}} />
            }
        </Safe>
    )
}

export default HistoryCopyTrader