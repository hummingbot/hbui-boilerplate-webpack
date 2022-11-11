import React from 'react'
import tw, { css, styled } from 'twin.macro'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GlobalStyles from '@hummingbot/hbui/system/GlobalStyles'
import ScrollToTop from './site/system/ScrollToTop'

// pages
import Home from './site/pages/home'
import Instructions from './site/pages/instructions'

function App() {
  return (
    <div tw='bg-body'>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instructions" element={<Instructions />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
