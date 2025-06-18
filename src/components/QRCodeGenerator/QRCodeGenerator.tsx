import React, { useState } from 'react'
import { QRCodeSVG } from 'qrcode.react'
import classNames from 'classnames'
import styles from './QRCodeGenerator.module.css'

function QRCodeGenerator() {
    const [text, setText] = useState('')
    const [isShowQRCode, setVisibleQR] = useState(false)

    function generateCode() {
        if (text.trim()) {
            setVisibleQR(true)
            setText('')
        }
    }

    function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
        setText(e.target.value)
        setVisibleQR(false)
    }

    return (
        <div className={classNames(styles.generator)}>
            <div className={classNames(styles.field)}>
                <input type="text" value={text} onChange={(e) => onChangeHandler(e)}
                       className={classNames(styles.input)}/>
                <button onClick={generateCode} className={classNames(styles.button)}>Generate QR</button>
            </div>
            {
                isShowQRCode && (
                    <QRCodeSVG value={text}/>
                )
            }
        </div>
    )
}

export default QRCodeGenerator
