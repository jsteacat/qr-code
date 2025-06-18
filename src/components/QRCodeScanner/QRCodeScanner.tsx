import { type IDetectedBarcode, Scanner } from '@yudiel/react-qr-scanner'
import { useState } from 'react'

function QRCodeScanner() {
    const [scanValue, setScanValue] = useState('')

    function onScanHandler(result: IDetectedBarcode[]) {
        setScanValue(result[0].rawValue)
    }

    return (
        <>
            <Scanner allowMultiple styles={{ container: { width: 350, marginBottom: 20 } }} onScan={onScanHandler}/>
            <p>{scanValue}</p>
        </>
    )
}

export default QRCodeScanner
