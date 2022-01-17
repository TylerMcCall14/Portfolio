import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from  './Pages/Home.js'
import Portfolio from './Pages/Portfolio.js'
import Blog from './Pages/Blog.js'
import Contact from './Pages/Contact.js'


function Router() {
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/portfolio" element={<Portfolio />} />
                <Route exact path="/blog" element={<Blog />} />
                <Route exact path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}

export default Router
