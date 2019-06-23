import React from 'react'

import styled from 'styled-components'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import NavbarWrapper from '../molecules/navbar'


// PERSONAL GENERAL STYLES
import { device, fontSize, lineHeight } from '../styles/base-styles'
import { colors } from '../styles/project-custom-styles'

// set global body styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow-y: hidden;
  }
`

const PageContainer = styled.div`
  border: 1px solid ${colors.pink};
  height: 100vh;
  margin: 0;
  padding: 0;
  width: 100vw;
`

export default () => (

  <ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
    <React.Fragment>
      <GlobalStyle/>
        <PageContainer>
          <h1>hello</h1>
          <NavbarWrapper/>
        </PageContainer>
    </React.Fragment>
  </ThemeProvider>

)
