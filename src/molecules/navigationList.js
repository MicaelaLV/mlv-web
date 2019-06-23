import React, { useLayoutEffect }  from 'react'
import styled from 'styled-components'

const ListWrapper = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0;
  margin: 20px 0;
  min-width: 40px;

  .listItem {
    font-size: 30px;
    list-style-type: none;
    margin: 5px auto;
  }
`


const NavigationList = () => (
  <ListWrapper>
    <li className ='listItem'> 🧠 </li>
    <li className ='listItem'> 🕶 </li>
    <li className ='listItem'> 🔮 </li>
    <li className ='listItem'> 🖖 </li>
  </ListWrapper>
)

export default NavigationList;