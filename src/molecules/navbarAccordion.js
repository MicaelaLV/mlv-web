import React  from 'react'
import styled from 'styled-components'

import Burger from '../atoms/burger'
import NavigationWrapper from '../molecules/navigation'

const AccordionWrapper = styled.div`
  align-items: flex-end;
  border: 1px solid pink;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
`
const NavbarAccordion = () => (
  <div>  
    <Burger/>
    <AccordionWrapper>
      <NavigationWrapper/>
    </AccordionWrapper>
  </div>
)

export default NavbarAccordion;
