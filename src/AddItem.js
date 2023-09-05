import React from 'react'
import { HiOutlinePlusSm } from 'react-icons/hi'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Your Task</label>
        <input 
        type="text" 
        autoFocus
        id='addItem'
        placeholder='Add Your Task'
        required
        value={newItem}
        onChange={(e)=> setNewItem(e.target.value)}
        />
        <button 
            type='submit'
            aria-label = 'Add Item'
        >
            <HiOutlinePlusSm />
        </button>
    </form>
  )
}

export default AddItem