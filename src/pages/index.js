import React from 'react'

import styled from 'styled-components'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import Navbar from '../organisms/navbar'
import Main from '../organisms/main'


// PERSONAL GENERAL STYLES
import { device } from '../styles/base-styles'

// set global body styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow-y: auto;

    @media ${device.desktopXs} {
      overflow-y: hidden;
    }
  }
`

const PageContainer = styled.div`
  height: 100%;
  overflow-y: auto;
  margin: 0;
  padding: 0;
  
  @media ${device.desktopXs} {
    height: 100vh;
    overflow-y: hidden;
    width: 100vw;
  }
`

export default () => (

  <ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
    <React.Fragment>
      <GlobalStyle/>
        <PageContainer>

          <Navbar/>
          <Main />

        </PageContainer>
    </React.Fragment>
  </ThemeProvider>

)
