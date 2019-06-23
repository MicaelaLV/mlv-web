import React  from 'react'
import styled from 'styled-components'

// PERSONAL GENERAL STYLES
import { device } from '../styles/base-styles'

const LandingWrapper = styled.div`
  align-items: flex-start;  
  display: flex;
  height: 100%;
  justify-content: flex-start;
  min-height: 590px;
  margin: 0;
  padding: 0 0;
  position: relative;
  width: 100%;

  .plectrum {
    margin: -120px 0 0 0;
    margin-left: -70px;
    max-width: 95%;
  }

  @media ${device.desktopXs} {
    display: none;
    pointer-events: none;
    user-select: none;
  }
`

const LogoWrapper = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  top: 40%;

  img {
    min-height: 260px;
  }
`

const LandingMobile = () => (

  <LandingWrapper>
    <img src="../images/plectrum--mobile--pink.png" alt="Hero Plethora of Rainbow Plectrums" className="plectrum"/>
    <LogoWrapper>
      <img src="../images/logo--homepage--mobile-lg.png" alt=""/>
    </LogoWrapper>
  </LandingWrapper>

)

export default LandingMobile
