import axios from "axios";
import React, { useState,useEffect } from "react";
const TodoList = () => {
  const [input, setInput] = useState("");
  const [text, setText] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  useEffect((car)=>{ 
    axios.get()
  })

  const handleAddTodo = () => {
    setText((prev) => [{ title: input, edit: false }, ...prev]);
    setInput("");
  };

  const handleEditTodo = (index) => {
    setText((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, edit: !item.edit } : item
      )
    );
  };

  const handleUpdateTodo = (index, updatedTitle) => {
    setText((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, title: updatedTitle, edit: false } : item
      )
    );
  };

  const handleDeleteTodo = (index) => {
    setText((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-pink-200 p-4">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className="border border-gray-300 p-2 rounded-md mr-2"
      />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add
      </button>
      <div className="mt-4">
        {text.map((val, ind) => (
          <div key={ind} className="flex items-center gap-4 mb-2">
            {val.edit ? (
              <input
                id={`${ind}Data`}
                defaultValue={val.title}
                className="border border-gray-300 p-2 rounded-md"
              />
            ) : (
              <div>
                {val.title} <div className="transition duration-300"> </div>
              </div>
            )}
            <button
              onClick={() =>
                val.edit
                  ? handleUpdateTodo(
                      ind,
                      document.getElementById(`${ind}Data`).value
                    )
                  : handleEditTodo(ind)
              }
              className={`${
                val.edit ? "bg-green-500" : "bg-yellow-500"
              } text-white px-4 py-2 rounded-md hover:${
                val.edit ? "bg-green-600" : "bg-yellow-600"
              }`}
            >
              {val.edit ? "Update" : "Edit"}
            </button>
            <div
              onClick={() => handleDeleteTodo(ind)}
              className="cursor-pointer text-red-500"
            >
              Del
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
