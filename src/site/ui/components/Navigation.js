import React, { useState, useEffect } from 'react'
import tw from 'twin.macro'
import { useLocation } from 'react-router-dom'
import NavBar from '@hummingbot/hbui/components/navigation/NavBar'
import { Link } from 'react-router-dom'

const siteNameA = 'Hummingbot'
const siteNameB = 'Boilerplate'
const linksRight = [
  { url: "/", label: "Home" },
  { url: "/demo-page", label: "Demo page" },
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
      />
    </div>
  )
}

export default Navigation
