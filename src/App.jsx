
import './App.css'
import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import {AuthProvide} from './context/AuthContext'

function App() {

  return (
    <>
      <AuthProvide>
        <NavBar />
        <main className="min-h-screen max-w-screen-2xl mx-auto px-8 py-6 font-primary">
          <Outlet />
        </main>
        <Footer />
      </AuthProvide>
    </>
  );
}

export default App
