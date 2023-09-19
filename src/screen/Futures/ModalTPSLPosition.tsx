import Box from '@commom/Box';
import Btn from '@commom/Btn';
import Icon from '@commom/Icon';
import Txt from '@commom/Txt';
import { useAppDispatch, useAppSelector, useTheme } from '@hooks/index';
import Modality from '@reuse/Modality';
import { tpslPositionFutureSelector } from '@selector/futuresSelector';
import futuresSlice from '@slice/futuresSlice';
import { colors } from '@theme/colors';
import { fonts } from '@theme/fonts';
import { height, width } from '@util/responsive';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Pressable, StyleSheet } from 'react-native';
import InputTPSLPosition from './InputTPSLPosition';
import MLTPSLPosition from './MLTPSLPosition';
import NoteModalTPSLPosition from './NoteModalTPSLPosition';
import StatisticalModalTPSLPosition from './StatisticalModalTPSLPosition';
import { setTPSLPosition } from '@service/futureService';
import LoadingBlack from '@reuse/LoadingBlack';
import { getProfileThunk } from '@asyncThunk/userAsyncThunk';

const RADIUS_CONTENT = 10

const ModalTPSLPosition = () => {
    const theme = useTheme()
    const { t } = useTranslation()
    const dispatch = useAppDispatch()

    const [loading, setLoading] = useState<boolean>(false)
    const [tp, setTP] = useState<any>({ value: '', type: 'Mark', down: false })
    const [sl, setSL] = useState<any>({ value: '', type: 'Mark', down: false })

    const tpslPosition = useAppSelector(tpslPositionFutureSelector)

    const position = tpslPosition.position

    useEffect(() => {
        const position = tpslPosition.position
        if (position?.amountPnL_TP) {
            setTP({ value: position?.TP, type: position?.triggerTP })
        }
        if (position?.amountPnL_SL) {
            setSL({ value: position?.SL, type: position?.triggerSL })
        }
    }, [tpslPosition.position])

    const handleSetTPSLPosition = async () => {
        setLoading(true)
        const res = await setTPSLPosition({
            idPosition: position?.id,
            TP: position?.amountPnL_TP ? position?.TP : tp.value ? tp.value : undefined,
            triggerTP: position?.amountPnL_TP ? position?.triggerTP : tp.type,
            SL: position?.amountPnL_SL ? position?.SL : sl.value ? sl.value : undefined,
            triggerSL: position?.amountPnL_SL ? position?.triggerSL : sl.type,
        })
        if (!res.status) {
            Alert.alert(t(res.message))
        } else {
            dispatch(getProfileThunk())
            handleCloseModal()
        }
        setLoading(false)
    }

    const handleCloseModal = async () => {
        setTP({ value: '', type: 'Mark', down: false })
        setSL({ value: '', type: 'Mark', down: false })
        dispatch(futuresSlice.actions.setTPSLPosition({
            showModal: false,
            position: tpslPosition.position,
        }))
    }

    const handleCancelSL = async () => {
    }

    return (
        <Modality
            show={tpslPosition.showModal}
        >
            <Pressable onPress={handleCloseModal}>
                <Box width={width} height={height} opacity={0} />
            </Pressable>
            <Box
                absolute
                bottom={0}
                width={width}
                paddingTop={10}
                paddingBottom={50}
                paddingHorizontal={15}
                backgroundColor={theme.bg}
                borderTopLeftRadius={RADIUS_CONTENT}
                borderTopRightRadius={RADIUS_CONTENT}
            >
                <Box flex={1} marginBottom={60}>
                    <Box row justifySpaceBetween>
                        <Txt fontFamily={fonts.AS} size={16} color={theme.black}>
                            {`TP/SL ${t('position')}`}
                        </Txt>
                        <Btn onPress={handleCloseModal}>
                            <Icon
                                size={14}
                                source={require('@images/future/close.png')}
                            />
                        </Btn>
                    </Box>

                    <StatisticalModalTPSLPosition {...{ position }} />

                    <Box zIndex={2}>
                        {position?.amountPnL_TP ?
                            <MLTPSLPosition
                                onCancel={() => { }}
                                title={'Take Profit'}
                                value={Number(position?.TP)}
                                trigger={`${t(position.triggerTP + ' Price')} >= `}
                            />
                            :
                            <InputTPSLPosition
                                tpsl={tp}
                                zIndex={2}
                                setTPSL={setTP}
                                onChangeText={(txt: string) => setTP({ ...tp, value: txt })}
                            />
                        }
                        <NoteModalTPSLPosition
                            typeTrade={'Take Profit Market'}
                            pnl={position?.amountPnL_TP || '--'}
                            level={position?.TP || tp.value || '--'}
                            typeTrigger={position?.triggerTP ? (position?.triggerTP + ' Price') : (tp.type + ' Price')}
                        />
                    </Box>

                    <Box zIndex={1}>
                        {position?.amountPnL_SL ?
                            <MLTPSLPosition
                                title={'Stop Loss'}
                                onCancel={handleCancelSL}
                                value={Number(position?.SL)}
                                trigger={`${t(position.triggerSL + ' Price')}  <= `}
                            />
                            :
                            <InputTPSLPosition
                                tpsl={sl}
                                setTPSL={setSL}
                                onChangeText={(txt: string) => setSL({ ...sl, value: txt })}
                            />
                        }

                        <NoteModalTPSLPosition
                            typeTrade={'Stop Market'}
                            pnl={position?.amountPnL_SL || '--'}
                            level={position?.SL || sl.value || '--'}
                            typeTrigger={position?.triggerSL ? (position?.triggerSL + ' Price') : (sl.type + ' Price')}
                        />
                    </Box>
                </Box>

                <Btn
                    radius={3}
                    height={40}
                    disabled={loading}
                    onPress={handleSetTPSLPosition}
                    backgroundColor={colors.yellow}
                >
                    {loading ?
                        <LoadingBlack /> :
                        <Txt fontFamily={fonts.IBMPM}>{t('Confirm')}</Txt>
                    }
                </Btn>
            </Box>
        </Modality>
    )
}

export default ModalTPSLPosition

const styles = StyleSheet.create({
    textGray: {
        fontSize: 13,
        color: colors.grayBlue,
        fontFamily: fonts.IBMPR,
    }
})