import KeyBoardSafe from '@reuse/KeyBoardSafe'
import React from 'react'
import Header from './Header'
// Màn hình quên mật khẩu
const ForgotPassword = () => {
    return (
        <KeyBoardSafe paddingHorizontal={15}>
            <Header />
        </KeyBoardSafe>
    )
}

export default ForgotPassword