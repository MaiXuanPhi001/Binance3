import Box from "@commom/Box";
import KeyBoardSafe from "@reuse/KeyBoardSafe";
import Amount from "./Amount";
import FromSend from "./FromSend";
import Header from "./Header";
import ID from "./ID";
import Note from "./Note";
import Tips from "./Tips";
import Total from "./Total";
import TypeSend from "./TypeSend";
import { useState } from "react";
import { Profile } from "src/model/userModel";
import { socketLimitDeposit, useAppSelector, useTheme } from "@hooks/index";
import { profileUserSelector } from "@selector/userSelector";
import { useTranslation } from "react-i18next";

export default () => {
    const theme = useTheme()
    const { t } = useTranslation()
    const [netWork, setNetWork] = useState('TRC20')
    const [amount, setAmount] = useState('')
    const [symbol, setSymbol] = useState('USDT')
    const [toAddress, setToAddress] = useState('')

    const profile: Profile = useAppSelector<any>(profileUserSelector)

    socketLimitDeposit()

    return (
        <Box flex={1}>
            <KeyBoardSafe>
                <Box paddingHorizontal={10}>
                    <Header {...{ theme, t }} />
                    <ID {...{ toAddress, setToAddress, theme, t }} />
                    <TypeSend {...{ netWork, setNetWork, theme, t }} />
                    <Amount {...{ amount, setAmount, profile, theme, t }} />
                    <FromSend {...{ profile, theme, t }} />
                    <Tips {...{ theme, t }} />
                </Box>
            </KeyBoardSafe>
            <Total
                {...{
                    t,
                    theme,
                    symbol,
                    amount,
                    netWork,
                    toAddress,
                }}
            />
        </Box>
    )
}