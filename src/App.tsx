import { Outlet } from 'react-router'
import Navigation from './components/Navigation/Navigation.tsx'

function App() {
    return (
        <>
            <Navigation/>
            <Outlet/>
        </>
    )
}

export default App
