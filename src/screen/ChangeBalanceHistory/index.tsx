import Box from "@commom/Box";
import KeyBoardSafe from "@reuse/KeyBoardSafe";
import { useState } from "react";
import DepositHistory from "./DepositHistory";
import Header from "./Header";
import Transaction from "./Transaction";
import WithdrawHistory from "./WithdrawHistory";
import { socketLimitDeposit } from "@hooks/index";

export default () => {
    const [tab, setTab] = useState<string>('Deposit')

    socketLimitDeposit()

    return (
        <KeyBoardSafe>
            <Box paddingHorizontal={15}>
                <Header />
                <Transaction {...{ tab, setTab }} />
                {tab === 'Withdrawals' ?
                    <WithdrawHistory /> :
                    <DepositHistory />    
            }
            </Box>
        </KeyBoardSafe>
    )
}