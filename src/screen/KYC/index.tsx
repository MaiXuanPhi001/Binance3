import Box from '@commom/Box'
import { hideBottomTab, socketLimitDeposit, useAppSelector } from '@hooks/index'
import { stepKYCSelector } from '@selector/kycSelector'
import contants from '@util/contants'
import React from 'react'
import BackIDCard from './backIDCard/BackIDCard'
import DocumentVerification from './documentVerification/DocumentVerification'
import FrontIDCard from './frontIDCard/FrontIDCard'
import Selfie from './selfie/Selfie'
import FormInfomation from './formInfomation/FormInfomation'

const KYC = () => {
    const step = useAppSelector(stepKYCSelector)

    hideBottomTab()
    socketLimitDeposit()

    return (
        <Box flex={1}>
            {step === contants.FRONT_ID_CARD ?
                <FrontIDCard /> : step === contants.BACK_ID_CARD ?
                    <BackIDCard /> : step === contants.SELFIE ?
                        <Selfie /> : step === contants.FORM_KYC ?
                            <FormInfomation /> : <DocumentVerification />
            }
        </Box>
    )
}

export default KYC