import React from 'react'
import Navigation from '../../ui/components/Navigation'
import { Link } from 'react-router-dom'
import { PageRoot, Section, Container, Window } from '@hummingbot/hbui/elements/layout'
import HeroBlock from '@hummingbot/hbui/components/hero/Hero'
import { H1, H5, P } from '@hummingbot/hbui/elements/typography'

function Home() {
  return (
    <PageRoot>
      <Navigation />
      <HeroBlock containerVariant='large' tw='bg-window border-b border-body'>
        <H1 tw='leading-none'>Welcome</H1>
        <br/>
        <P>This is the HBUI Webpack Boilerplate</P>
      </HeroBlock>
      <Container variant='large'>
        <br/>
        <br/>
        <br/>
        <Window>
          <H5>Tips</H5>
          <br/>
          <P>This is a dark+light mode enabled project. Try clicking the sun/moon switcher in the navigation to try it out!</P>
          <br/>
          <P>Visit the <Link to='instructions'>Instructions</Link> page to learn how to get started!</P>
        </Window>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </Container>
    </PageRoot>
  )
}

export default Home
