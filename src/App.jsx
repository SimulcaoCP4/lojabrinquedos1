import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contatp from './pages/Contatp'
import Login from './pages/Login'
import Erro from './pages/Erro'
import Brinquedos from "./pages/Brinquedos"

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/brinquedos" element={<Brinquedos />} />
          <Route path="/contatp" element={<Contatp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
