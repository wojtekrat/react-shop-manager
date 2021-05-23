import React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import Draggable from 'react-draggable';

const AddItemStyled = styled.div`
    min-width: 400px;
    height: 600px;
    border: 2px solid black;
    background: white;
    margin: 2px;
    display: ${({ showAddItem }) => showAddItem ? 'none' : 'block'};
`
const AddItem = ({onAdd, showAddItem, setShowAddItem, drag, setDrag}) => {
    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [imgSrc, setImage] = useState('')
    const [id, setId] = useState('')
    const _ = require("lodash");  


    const onSubmit = (e) => {
        e.preventDefault()
        let x  = _.uniqueId()
        setId(x)

        if(!name) {
            alert("Please add an item name")
            return
        }

        console.log(id)
        onAdd({name, quantity, price, description, imgSrc, id})

        setName('')
        setQuantity('')
        setPrice('')
        setDescription('')
        setImage('')
        setId('')
        

        alert("Item has been added successfully!")
        }

    return (
        <Draggable bounds="parent">
        <AddItemStyled>
        <div className='label-container'>
                <div className="label">Add item</div><div className="label-close" onClick={()=>{setShowAddItem(!showAddItem)}}>X</div>
        </div>
        <form className="find-item-container" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Name</label>
                <input 
                type="text" 
                placeholder="Add item name" value={name} 
                onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Quantity</label>
                <input 
                type="text" 
                placeholder="Add quantity" value={quantity}
                onChange={(e)=>setQuantity(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Price</label>
                <input 
                type="text" 
                placeholder="Add price" value={price}
                onChange={(e)=>setPrice(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Image link</label>
                <input 
                type="text" 
                placeholder="Add image address" value={imgSrc}
                onChange={(e)=>setImage(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Description</label>
                <textarea type='text' value={description} 
                placeholder="Item description"
                onChange={(e)=>setDescription(e.target.value)}
                style={{resize: 'none'}}>

                </textarea>
            </div>
            
            <input type="submit" value="Save an item" className="btn"/>
        </form>
        </AddItemStyled>
        </Draggable>
    )
}

export default AddItem
