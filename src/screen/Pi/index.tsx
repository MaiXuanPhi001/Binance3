import { db, db2 } from '@util/db'
import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import PiChart from './PiChart'
import { width as widthScreen, height as heightScreen } from '@util/responsive'

const Pi = () => {
  const [data, setData] = useState<any>(db)

  useEffect(() => {
    const timer = setInterval(() => {
      const lastChart = data[data.length - 1]
      if (lastChart.close == 86) {
        setData(db2)
      } else {
        setData(db)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [data])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <PiChart
        data={data}
        width={widthScreen}
        height={heightScreen * 35 / 100}
      />
    </View>
  )
}

export default Pi