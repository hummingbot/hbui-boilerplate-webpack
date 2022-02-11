import React from 'react'
import tw, { css, styled } from 'twin.macro'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from './styles/GlobalStyles'
import ScrollToTop from './site/system/ScrollToTop'

// pages
import Home from './site/pages/home'
import DemoPage from './site/pages/demopage'

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <div tw='bg-secondary'>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/demo-page" element={<DemoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
