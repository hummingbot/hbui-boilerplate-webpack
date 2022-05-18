import React from 'react'
import { P } from '@hummingbot/hbui/elements/typography'
import { PageRoot, ShortHero, MainContent } from '../../ui/elements/layout'

function DemoPage() {
  return (
    <PageRoot>
      <ShortHero title="Example page" subTitle="Inner example page" />
      <MainContent>
        <P>Example page content</P>
      </MainContent>
    </PageRoot>
  )
}

export default DemoPage
