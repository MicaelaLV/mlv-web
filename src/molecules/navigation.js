import React  from 'react'
import styled from 'styled-components'

import NavigationList from '../molecules/navigationList'

const NavigationWrapper = styled.div`
`

const Navigation = () => (
  <NavigationWrapper>
    <NavigationList/>
  </NavigationWrapper>
)

export default Navigation;