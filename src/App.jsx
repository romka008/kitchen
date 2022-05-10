import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Footer } from './components/Footer/Footer'
import { NavBar } from './components/Header/NavBar'
import { Home } from './components/Home/Home'
import { Portfolio } from './components/Portfolio/Portfolio'
import { Stages } from './components/Stages/Stages'

function App() {
    return (
        <div className="">
            <NavBar />
            <div style={{ paddingTop: '70px' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="stages" element={<Stages />} />
                </Routes>
            </div>
            <Footer />
        </div>
    )
}

export default App
