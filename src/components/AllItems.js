import Item from './Item'
import styled from 'styled-components'
import Draggable from 'react-draggable';

const AllItemsStyled = styled.div`
    width: 400px;
    border: 2px solid black;
    display: ${({ showAll }) => showAll ? 'none' : 'flex'};
    flex-wrap: wrap;
    background-color: white;
    margin: 2px;
`

const AllItems = ({items, onDelete, showAll, setShowAll}) => {
    return (
        <Draggable bounds="parent">
            <AllItemsStyled>
            <div className='label-container'>
                    <div className="label">All items</div><div className="label-close" onClick={()=>{setShowAll(!showAll)}}>X</div>
                </div>
        <div className="all-items-container">
            {items.map((item, index) => (
            <Item key={index} item={item} onDelete={onDelete}
            />
            ))}
            </div>
            </AllItemsStyled>
        </Draggable>
        
    )
}

export default AllItems
