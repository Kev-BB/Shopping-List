import { useState } from "react";
import { Input } from "./components/ShoppingList";
import "./styles.css";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newItem) => {
    const updatedItems = [
      ...items,
      {
        id: crypto.randomUUID(),
        value: newItem
      }
    ];
    setItems(updatedItems);
  };

  const removeItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className="container">
      <h1>Shopping List</h1>
      <Input onSubmit={addItem} max={items.length} />
      {items.map((item) => {
        return (
          <div key={item.id} className="list-container">
            <li>{item.value}</li>
            <button onClick={() => removeItem(item.id)}>❌</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
