import React  from 'react'
import styled from 'styled-components'

import LandingMobile from './landingMobile'
import AboutMobile from './AboutMobile'

const MainWrapper = styled.div`
  margin: 0;
  padding: 0 0;
  position: relative;
  height: 100%;
`

const Main = () => (

  <MainWrapper>
    
    <LandingMobile/>
    <AboutMobile/>

  </MainWrapper>

)

export default Main
