import React, { useState } from 'react';

const ListPage: React.FC = () => {
  const [items, setItems] = useState<string[]>(['Item 1', 'Item 2', 'Item 3']);
  const [newItem, setNewItem] = useState<string>('');

  const addItem = () => {
    if (newItem.trim()) {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div>
      <h1>List Page</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add new item"
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListPage;