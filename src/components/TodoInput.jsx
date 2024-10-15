import React, { useState } from 'react';

const TodoInput = ({ todoList, setTodoList }) => {
  const [inputValue, setInputValue] = useState('');
  const handleAdd = (e) => {
    e.preventDefault();
    if (inputValue.replaceAll(' ', '')) {
      const newTodo = {
        id: Number(new Date()),
        content: inputValue,
        isDone: false,
      };
      const newTodoList = [...todoList, newTodo];
      setTodoList(newTodoList);
      setInputValue('');
    } else {
      alert('할 일을 입력해주세요.');
    }
  };

  return (
    <section className='h-12 border-t border-zinc-400'>
      <form onSubmit={handleAdd} className='flex items-center h-12'>
        <input
          className='grow h-12'
          type='text'
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button type='submit' className='w-12 h-12 border-l border-zinc-400'>
          ➕
        </button>
      </form>
    </section>
  );
};

export default TodoInput;
