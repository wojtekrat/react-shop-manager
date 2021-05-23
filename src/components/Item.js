import React from 'react'
import {useState} from 'react'

const Item = ({item, onDelete}) => {
    const [openMore, setOpenMore] = useState(false)
    return (
        <div className="item">
            <div>
            <h3>
            Name: {item.name}{' '}
            </h3>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price}$</p>
            <div className="item-btn-container">
            <div className="deleteBtn" onClick={() => setOpenMore(!openMore)}>{openMore ? "Hide" : "Show more"}</div>
            <div className="deleteBtn" onClick={() => onDelete(item.id)}>Delete item</div>
            </div>
            {openMore&& <div className="description">{item.description}</div>}
            
            </div>
            <div>
            <img className="itemImg" src={item.imgSrc} alt="image"/>
            </div>
        </div>
    )
}
export default Item
