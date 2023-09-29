import Box from '@commom/Box'
import { useAppSelector, useTheme } from '@hooks/index'
import { delay } from '@method/alert'
import { HEIGHT_BOTTOM_TAB } from '@navigation/Container'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import ToastTop from '@reuse/ToastTop'
import Funding from '@screen/Funding'
import Future from '@screen/Future'
import Margin from '@screen/Margin'
import Overview from '@screen/Overview'
import Spot from '@screen/Spot'
import { isLoginUserSelector } from '@selector/userSelector'
import React, { useRef, useState } from 'react'
import Login from './Login'
import Tab from './Tab'

const Wallet = () => {
  const theme = useTheme()
  const toastTopRef = useRef(null)
  const [tab, setTab] = useState('Overview')
  const isLogin = useAppSelector(isLoginUserSelector)
  const [refesh, setRefesh] = useState(false)

  const handleRefesh = async () => {
    setRefesh(true)
    await delay(2000)
    setRefesh(false)
  }

  return (
    <>
      {!isLogin ?
        <Login />
        :
        <Box flex={1}>
          <ToastTop ref={toastTopRef} />
          <KeyBoardSafe
            refesh={refesh}
            bg={theme.gray2}
            onRefesh={handleRefesh}
            paddingBottom={HEIGHT_BOTTOM_TAB / 2}
          >
            <Tab {...{ tab, setTab }} />
            <>
              {refesh ?
                <></>
                :
                <Box
                  flex={1}
                  paddingTop={20}
                  borderTopLeftRadius={30}
                  borderTopRightRadius={30}
                  backgroundColor={theme.bg}
                >
                  {tab === 'Overview' ?
                    <Overview /> : tab === 'Spot' ?
                      <Spot /> : tab === 'Funding' ?
                        <Funding /> : tab === 'Margin' ?
                          <Margin /> : tab === 'Earn' ?
                            <Margin /> : <Future />
                  }
                </Box>
              }
            </>
          </KeyBoardSafe>
        </Box>
      }
    </>
  )
}

export default Wallet