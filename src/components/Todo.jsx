import React, { useState } from 'react';

const Todo = ({ todo, setTodoList }) => {
  const [inputValue, setInputValue] = useState(todo.content);
  const [showInput, setShowInput] = useState(false);
  const handleEdit = (e) => {
    if (showInput) {
      setTodoList((prev) =>
        prev.map((el) =>
          el.id === todo.id ? { ...el, content: inputValue } : el
        )
      );
      setShowInput(!showInput);
    } else {
      setShowInput(true);
    }
  };
  const handleDone = (e) => {
    e.target.classList.toggle('done');
    setTodoList((prev) =>
      prev.map((el) => (el.id === todo.id ? { ...el, isDone: !el.isDone } : el))
    );
  };
  return (
    <li className='flex justify-between items-center w-full px-2'>
      <section className='w-11/12 flex'>
        <button onClick={() => !todo.isDone && handleEdit()} className='w-10'>
          {showInput && '✍🏼'}
          {!showInput && !todo.isDone && '✏️'}
          {todo.isDone && '✔️'}
        </button>
        {!showInput && (
          <span
            onClick={handleDone}
            className={`inline-block p-2 grow ${
              todo.isDone ? 'line-through text-zinc-400' : ''
            } cursor-pointer`}
          >
            {todo.content}
          </span>
        )}
        {showInput && (
          <form onSubmit={handleEdit} className='inline-block grow'>
            <input
              className='w-full'
              type='text'
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
            />
          </form>
        )}
      </section>
      <button
        className='w-1/12'
        onClick={() => {
          setTodoList((prev) => {
            return prev.filter((el) => el.id !== todo.id);
          });
        }}
      >
        ❌
      </button>
    </li>
  );
};

export default Todo;
