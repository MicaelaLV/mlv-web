import React  from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.div`
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
    position: relative;
    top: 30px;
    right: -100px;
    max-width: 100%;
  }
`

const AboutMobile = () => (

  <AboutWrapper>
    <img src="../images/plectrum--mobile--orange.png" alt="Hero Plethora of Rainbow Plectrums" className="plectrum"/>
  </AboutWrapper>

)

export default AboutMobile
