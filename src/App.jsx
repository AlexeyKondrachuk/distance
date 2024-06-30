import TodoList from './components/ItemList.jsx';
import './App.css';
import { useState } from 'react';
import ItemCreate from './components/ItemCreate.jsx';

const App = () => {
  const [items, setItems] = useState([]);
  
  const createItem = (dateState, distance) => {
   
    const searchDate = items.findIndex((element) => element.dateState === dateState);
    if (searchDate !== 0 ) {
      const newItem = { id: crypto.randomUUID(), dateState, distance };
      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      console.log('новая дата')
    }
    else {
    let second = [...items]
    let dist = [ { id: crypto.randomUUID(), dateState, distance }];
    let third = second.map((item, index) => ({...item, ...dist[index]}))
    console.log(items)
    console.log(dist)
    setItems(third)
    
  
    }
    
  
  }


  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const changeItem = (id, dateState, distance) => {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, dateState, distance };
      }
      return item;
    });

    setItems(updatedItems);
  };

  return (
    <main className="main">
      <h2>
        Учет тренировок
      </h2>
      <ItemCreate createItem={createItem} items={items}/>
      <TodoList items={items} removeItem={removeItem} changeItem={changeItem}/>
      
    </main>
  );
};

export default App;