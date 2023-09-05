import React from 'react'
import Header from './Header'
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';


function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todo_list'))
 ); 

    const [newItem, setNewItem] = useState('');
    const [search, setSearch] = useState('');
    const [editingItem, setEditingItem] = useState(null);

    const addItem =(item)=>{
      const id = items.length ? items[items.length -1].id +1 : 1;
      const addNewItem = {id, checked:false, item}
      const addItems = [...items, addNewItem]
      setItems(addItems)
      localStorage.setItem("todo_list", JSON.stringify(addItems))
    }
    
    const handleCheck = (id)=>{
        const listItems = items.map((item)=> item.id===id ? {...item , checked:!item.checked} : item)
        setItems(listItems)
        localStorage.setItem("todo_list", JSON.stringify(listItems))
    }
    const handleDelete = (id)=>{
        const deleteItems = items.filter((item)=> item.id!==id)
        setItems(deleteItems)
        localStorage.setItem("todo_list", JSON.stringify(deleteItems))
    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      if(!newItem) return;
      console.log(newItem)
      addItem(newItem)
      setNewItem('')
    }

    const handleEdit = (id, editedText) => {
      const updateItems = items.map((item) =>
        item.id === id ? { ...item, item: editedText } : item
      );
      setItems(updateItems);
      localStorage.setItem("todo_list", JSON.stringify(updateItems));
    };
    
    

  return (
    <div className='App'>
      <Header title = "Todo-List"/> 
      <AddItem 
        newItem ={newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit}
      />
      <SearchItem 
          search = {search}
          setSearch = {setSearch}
      />
      <Content 
      items={items.filter((item) => item.item.toLowerCase().includes(search.toLowerCase()))}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      handleEdit={handleEdit} 
      editingItem={editingItem}
      />
      <Footer 
        length = {items.length}
      />
    </div>
  );
}

export default App;