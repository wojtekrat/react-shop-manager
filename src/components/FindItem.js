import React from 'react'
import {useState, useEffect} from 'react'
import Item from './Item'
import styled from 'styled-components'
import Draggable from 'react-draggable';
import axios from 'axios'

const FindItemStyled = styled.div`
    min-width: 400px;
    border: 2px solid black;
    display: ${({ showFindItem }) => showFindItem ? 'none' : 'flex'};
    flex-wrap: wrap;
    bacground-color: white;
    margin: 2px;
`

const FindItem = ({items, onDelete, setShowFindItem, showFindItem, drag, setDrag}) => {
    const [findId, setFindId] = useState('')
    const itemsId = []
    const [foundId, setFoundId] = useState('')
    const [isFound, setIsFound] = useState(false)

    for (let i = 0; i < items.length; i++){
        itemsId.push(items[i].id)}

    const onClick = () => {
        setDrag(true)
    }

    const getItem = (id) => {
        axios.get(`http://localhost:3000/items/${id}`)
        .then(response => setFoundId(response.data))
        .catch(error => error=(alert("Item has not been found!")))
      }
    
    const onSubmit = (e) => {
        e.preventDefault()
        getItem(findId)  
        if(!findId) {
            return alert("Please type an ID")
        }
        if (itemsId.includes(foundId.id)) {
            setIsFound(true)
        }
    }
        
    return (
        <Draggable bounds="parent">
            <FindItemStyled>
            <div className="find-item-container">
                <div className='label-container'>
                    <div className="label">Find item</div><div className="label-close" onClick={()=>{setShowFindItem(!showFindItem)}}>X</div>
                </div>
                <form className="find-item-form" onSubmit={onSubmit} >
                    <div className="form-control">
                        <label>Type an item ID</label>
                        <input 
                            type="text"
                            placeholder={findId}
                            onChange={(e)=>setFindId(e.target.value)}
                        />
                        <input className="btn" type="submit" value="Search"/>
                    </div>
                </form>
            <div id="foundItem">
                {isFound&& <Item item={foundId} onDelete={onDelete}/>}
            </div>
            </div>   
            </FindItemStyled>
        </Draggable> 
    )
}

export default FindItem
