import Header from "./components/Header"
import {useState, useEffect} from 'react'
import FindItem from "./components/FindItem"
import AddItem from "./components/AddItem"
import Button from './components/Button'
import AllItems from './components/AllItems'
import MenuButton from "./components/MenuButton"
import Menu from "./components/Menu"

const App = () => {
  const [showAddItem, setShowAddItem] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [items, setItems] = useState([])
  const [open, setOpen] = useState(false);


  useEffect(() => {
      const getItems = async () => {
        const itemsFromServer = await fetchItems()
        setItems(itemsFromServer)
    }

    getItems()
  }, [])

//fetch tasks
const fetchItems = async () => {
  const res = await fetch('http://localhost:3000/items')
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
      
        <Header/>
            <div className="main-menu-container">
            <MenuButton open={open} setOpen={setOpen} />
                <FindItem onDelete={deleteItem} items={items}/>
                <Button onClick={() => setShowAddItem(!showAddItem)}
                text={showAddItem ? "Close" : "Add new item"}
                />
                {showAddItem && <AddItem onAdd={addItem}/>}
                <Button onClick={() => setShowAll(!showAll)}
                text={showAll ? "Close" : "Show all"}
                />
                {showAll &&  <div>
                  {items.length > 0 ? (<AllItems items={items} onDelete={deleteItem}/>) : "No items to show!"}
                  
                  </div>}
            </div>
            
        </div>
  );
}

export default App;
