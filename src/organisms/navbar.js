import React  from 'react'
import styled from 'styled-components'

import Burger from '../atoms/burger'


const NavbarWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
  padding: 17px 17px;
  max-width: 100%;
`

const Navbar = () => (

  <NavbarWrapper>
    <Burger/>
  </NavbarWrapper>

)

export default Navbar


