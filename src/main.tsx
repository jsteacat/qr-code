import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import QRCodeGenerator from './components/QRCodeGenerator/QRCodeGenerator.tsx'
import QRCodeScanner from './components/QRCodeScanner/QRCodeScanner.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route path="generate" element={<QRCodeGenerator/>}/>
                    <Route path="scan" element={<QRCodeScanner/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
