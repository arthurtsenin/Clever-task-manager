import React from 'react';
import { useTheme } from '@context/ThemeContext';
import Checkbox from '@mui/material/Checkbox';
import { Todo, TodoText, TodoDate, StyledEditIcon, StyledDeleteIcon } from './ToDoItem.styles';

export const TodoItem = ({ todo, handleUpdate, handleDelete, toddleCompleted }) => {
  const theme = useTheme();

  return (
    <Todo theme={theme}>
      <Checkbox color="default" checked={todo.completed} onChange={toddleCompleted} />
      <TodoText>
        <h1>Title: {todo.title}</h1>
        <h2>Description: {todo.description}</h2>
      </TodoText>
      <TodoDate>{todo.createdAt}</TodoDate>
      <StyledEditIcon onClick={handleUpdate} />
      <StyledDeleteIcon onClick={handleDelete} />
    </Todo>
  );
};
