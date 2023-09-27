import Box from '@commom/Box'
import { useAppSelector, useTheme } from '@hooks/index'
import { styles } from '@navigation/Container'
import { useNavigation } from '@react-navigation/native'
import KeyBoardSafe from '@reuse/KeyBoardSafe'
import { isLoginUserSelector } from '@selector/userSelector'
import React, { useEffect } from 'react'
import { Alert, StatusBar } from 'react-native'
import Balance from './Balance'
import Coins from './Coins'
import Funding from './Funding'
import Header from './Header'
import Login from './Login'
import Options from './Options'
import TypeCoin from './TypeCoin'
import { getValueConfig } from '@service/userService'
import contants from '@util/contants'
import { useTranslation } from 'react-i18next'

const Home = () => {
  const theme = useTheme()
  const { t } = useTranslation()
  const navigation = useNavigation()
  const isLogin = useAppSelector(isLoginUserSelector)

  useEffect((): any => {
    const focus = navigation.addListener('focus', () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: [
          styles.container,
          { backgroundColor: theme.bg }
        ]
      })
    })

    return () => { focus }
  }, [theme])

  useEffect(() => {
    handleGetValueConfig()
  }, [])

  const handleGetValueConfig = async () => {
    const res = await getValueConfig('VERSIONAPP')
    if (res.status) {
      const versionCurren = res.data[0].data
      const versionInApp = contants.VERSION
      if (versionCurren != versionInApp) {
        Alert.alert(t('You are using the old version, please update the application to the new version for the best experience.'))
      }
    } else {
      Alert.alert(t(res.message))
    }
  }

  return (
    <KeyBoardSafe paddingBottom={100}>
      <StatusBar barStyle={theme.bg === 'white' ? 'dark-content' : 'light-content'} />
      <Box paddingHorizontal={15} paddingTop={10}>
        <Header />
        {!isLogin && <Login />}
        {isLogin && <Balance />}
        {/* <KYCStatus /> */}
        <Options />
        <Funding />
        <TypeCoin />
        <Coins />
      </Box>
    </KeyBoardSafe>
  )
}

export default Home