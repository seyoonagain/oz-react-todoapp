import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import Header from './components/Header';

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 0, content: '리액트 과제하기', isDone: false },
    { id: 1, content: '블로그 포스팅하기', isDone: false },
    { id: 2, content: '학습만족도 조사', isDone: false },
    { id: 3, content: '투두리스트 그만 만들고 싶다', isDone: false },
  ]);

  return (
    <article className='w-[400px] h-[600px] bg-zinc-100 flex flex-col justify-between overflow-hidden border border-zinc-400'>
      <Header />
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <TodoInput todoList={todoList} setTodoList={setTodoList} />
    </article>
  );
};

export default App;
