import React from 'react'
import styled from 'styled-components'

const BurgerWrapper = styled.div`
  img {
    max-width: 40px;
  }
`

const Burger = () => (

  <BurgerWrapper>
    <img src="../images/burger--bw.svg" alt="Burger Icon leads to Juicy Content"/>
  </BurgerWrapper>

)


export default Burger
