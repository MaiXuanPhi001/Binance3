import Txt from '@commom/Txt'
import { useAppDispatch, useTheme } from '@hooks/index'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import React, { useState } from 'react'
import Header from './Header'
import RadioItem from './RadioItem'
import { useTranslation } from 'react-i18next'
import Box from '@commom/Box'
import Btn from '@commom/Btn'
import { colors } from '@theme/colors'
import { fonts } from '@theme/fonts'
import { setStep } from '@slice/kycSlice'
import contants from '@util/contants'
import { HEIGHT_BOTTOM_TAB } from '@navigation/Container'

const DocumentVerification = () => {
  const theme = useTheme()
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const [type, setType] = useState<string>('ID')

  return (
    <Box flex={1} paddingHorizontal={15} backgroundColor={theme.bg}>
      <KeyBoardSafe paddingBottom={HEIGHT_BOTTOM_TAB / 2}>
        <Header />
        <Txt marginTop={25} color={theme.black}>
          {t('Document Type')}
        </Txt>
        <RadioItem
          t={t}
          theme={theme}
          choose={type == 'ID'}
          title={t('ID Card')}
          recommended={true}
          onPress={() => setType('ID')}
          icon={require('@images/home/cccd.png')}
        />
        <RadioItem
          t={t}
          theme={theme}
          choose={type == 'Driver'}
          title={t("Driver's License")}
          onPress={() => setType('Driver')}
          icon={require('@images/kyc/oto.png')}
        />
        <RadioItem
          t={t}
          theme={theme}
          title={t('Passport')}
          choose={type == 'Passport'}
          onPress={() => setType('Passport')}
          icon={require('@images/kyc/earth.png')}
        />
      </KeyBoardSafe>
      <Btn
        radius={5}
        height={45}
        width={'100%'}
        marginBottom={25}
        alignSelf={'flex-end'}
        backgroundColor={colors.yellow}
        onPress={() => dispatch(setStep(contants.FRONT_ID_CARD))}
      >
        <Txt fontFamily={fonts.IBMPM}>{t('Continue')}</Txt>
      </Btn>
    </Box>
  )
}

export default DocumentVerification