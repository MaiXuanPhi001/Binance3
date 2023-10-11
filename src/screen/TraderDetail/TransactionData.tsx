import Box from '@commom/Box'
import Btn from '@commom/Btn'
import Txt from '@commom/Txt'
import { colors } from '@theme/colors'
import { fonts } from '@theme/fonts'
import React, { useState } from 'react'
import TabTradingData from './TabTradingData'
import TabPositions from './TabPositions'

const TransactionData = ({ theme, t }: any) => {
  const [tabChoosed, setTabChoosed] = useState('Trading data')
  const tabs = ['Trading data', 'Position', 'Copiers']

  return (
    <Box paddingHorizontal={15} marginTop={20}>
      <Box row borderBottomWidth={1} borderColor={theme.gray2}>
        {tabs.map((tab) =>
          <Btn
            key={tab}
            marginRight={20}
            justifySpaceBetween
            onPress={() => setTabChoosed(tab)}
          >
            <Txt
              marginVertical={10}
              fontFamily={fonts.IBMPM}
              color={tabChoosed == tab ? theme.black : colors.grayBlue}
            >
              {t(tab)}
            </Txt>
            {tabChoosed == tab &&
              <Box width={'100%'} height={2} backgroundColor={theme.black} marginBottom={-1} />
            }
          </Btn>
        )}
      </Box>
      {tabChoosed == 'Trading data' ?
        <TabTradingData {...{ theme, t }} /> : <TabPositions {...{ theme, t }} />
      }
    </Box>
  )
}

export default TransactionData