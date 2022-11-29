import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import { useLocation } from 'react-router-dom'
import NavBar from '@hummingbot/hbui/components/navigation/NavBar'
import { Link } from 'react-router-dom'

const siteNameA = 'HBUI'
const siteNameB = 'Webpack Boilerplate'
const linksRight = [
  { url: "/", label: "Home" },
  { url: "/instructions", label: "Instructions" },
]

function Navigation({disableBreakcrumbs}) {
  const history = useLocation()
  return (
    <div tw='w-full relative'>
      <NavBar
        showThemeToggle={true}
        siteNameA={siteNameA}
        siteNameB={siteNameB}
        linksRight={linksRight}
        linkClass={Link}
        containerVariant='large'
        position='relative'
      />
    </div>
  )
}

export default Navigation
