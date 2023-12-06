import { useState } from "react";

export function Input({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim()) {
      return alert("input field is empty");
    } else {
      onSubmit(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          className="input"
          placeholder="add new item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="add-button">Add</button>
      </div>
    </form>
  );
}
