import {useState, useEffect, useRef} from 'react'
import FindItem from "./components/FindItem"
import AddItem from "./components/AddItem"
import AllItems from './components/AllItems'
import MenuButton from "./components/MenuButton"
import Menu from "./components/Menu"
import { useOnClickOutside } from './components/hooks';
import Draggable from 'react-draggable';
import Navbar from "./components/Navbar"


const App = () => {
  const [showAddItem, setShowAddItem] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [showFindItem, setShowFindItem] = useState(true)
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false);
  const [drag, setDrag] = useState('');
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));

  useEffect(() => {
      const getItems = async () => {
        const itemsFromServer = await fetchItems()
        setItems(itemsFromServer)
    }

    getItems()
  }, [])

//fetch tasks
const fetchItems = async () => {
  const res = await fetch('http://localhost:3000//items/')
  const data = await res.json()

  return data
  
}

//add task
const addItem = async (item) => {
  const res = await fetch('http://localhost:3000/items', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(item)
  })

  const data = await res.json()
  
  setItems([...items, data])
}

//delete task
const deleteItem = async (id) => {
  await fetch(`http://localhost:3000/items/${id}`, {
    method: 'DELETE'
  })

  setItems(items.filter((item) => item.id !== id))
}

  return (
    <div className="container">
      <Navbar>
      </Navbar>
      <div className="app-container">

        <div ref={node}><MenuButton open={open} setOpen={setOpen} />
        <Menu open={open} setShowAddItem={setShowAddItem} showAddItem={showAddItem} 
          setShowAll={setShowAll} showAll={showAll} setShowFindItem={setShowFindItem}
          showFindItem={showFindItem}/></div>
            
        {showFindItem && 
          <Draggable bounds="parent">
            <div><FindItem onDelete={deleteItem} items={items} setShowFindItem={setShowFindItem}
          showFindItem={showFindItem} drag={drag} setDrag={setDrag} /></div>
          </Draggable>}
        {showAddItem && 
              <Draggable bounds="parent"><div><AddItem onAdd={addItem} showAddItem={showAddItem} setShowAddItem={setShowAddItem}/></div></Draggable>
          }
        {showAll &&  
          <Draggable bounds="parent">
              {items.length > 0 ? 
              (    
              <div>
                <AllItems items={items} onDelete={deleteItem} setShowAll={setShowAll} showAll={showAll} />
              </div>
              ) 
              : "No items to show!"}
          </Draggable>}
          </div>
          </div>
  );
}

export default App;
