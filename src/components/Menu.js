import {React, useState} from 'react';
import styled from 'styled-components'
import Button from './Button'

const Ul = styled.ul`
    flex-flow: row nowrap;
    position: fixed;
    display: ${({ open }) => open ? 'flex' : 'none'};
    height: 100px;
    left: 10px;
    top: 60px;
    width: 500px;
    transition: transform 0.3s ease-in-out;
    margin-bottom: 10px;
    z-index: 20;
  }
`;
const Menu = ({open, setShowAddItem, showAddItem, setShowAll, showAll, setShowFindItem, showFindItem}) => { 
  return (
    <Ul open={open}>
        <li><Button text={"Find item"} 
        onClick={() => 
        setShowFindItem(!showFindItem)} color={showFindItem ? "Red" : "transparent"}
        />
        
        </li>
        <li><Button text={"Add item"} onClick={() => 
          setShowAddItem(!showAddItem)} color={showAddItem ? "Red" : "transparent"}/></li>
        <li><Button text={"Show all"} onClick={()=>setShowAll(!showAll)} color={showAll ? "Red" : "transparent"}/></li>
    </Ul>
  )
}
export default Menu;