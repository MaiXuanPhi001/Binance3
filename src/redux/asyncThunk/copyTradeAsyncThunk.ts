import { createAsyncThunk } from "@reduxjs/toolkit"
import { getListUserTrader, getPositionToTrader } from "@service/copyTradeService"

export const getListUserTraderThunk =
    createAsyncThunk('copyTrade/getListUserTrader', async (data: any) => {
        const res = await getListUserTrader(data)
        return res
    })

export const getPositionToTraderThunk =
    createAsyncThunk('copyTrade/getPositionToTrader', async (userid: number | string) => {
        const res = await getPositionToTrader(userid)
        return res
    })