import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../pages/About'
import { Contact } from '../pages/Contact'

const Router = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>

            <Footer />
        </>
    )
}

export default Router
