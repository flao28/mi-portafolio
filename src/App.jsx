import React from 'react'
import Home2 from '/src/assets/components/Home2'
import Problems from '/src/assets/components/Problems'
import Sostenibilidad from './assets/components/Sostenibilidad'
import Solutions from '/src/assets/components/Solutions'
import Projects from '/src/assets/components/Projects'
import Donations from '/src/assets/components/Donations'
import Stories from '/src/assets/components/Stories'
import Contact from '/src/assets/components/Contact'
import Fooder from '/src/assets/components/Footer'
import PaymentPage from '/src/assets/components/PaymentPage'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return(
    <BrowserRouter>
      <div>
        <Home2 />,
        <Problems />,
        <Sostenibilidad />,
        <Solutions />,
        <Projects />,
        <Donations />,
        <Stories />,
        <Contact />,
        <Fooder />,
        <PaymentPage />
      </div>
    </BrowserRouter>
  )
}

export default App;
