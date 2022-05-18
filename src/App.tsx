import React from 'react'
import tw, { css, styled } from 'twin.macro'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from '@hummingbot/hbui/system/GlobalStyles'
import ScrollToTop from './site/system/ScrollToTop'

// pages
import Home from './site/pages/home'
import DemoPage from './site/pages/demopage'

function App() {
  return (
    <div tw='bg-body'>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo-page" element={<DemoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
