import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItems'

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px 48px;
    overflow-y: auto;
`;

const TodoList = () => {
    return (
        <TodoListBlock>
            안녕하세요
            <TodoItem text="123" done={true} />
        </TodoListBlock>
    );
}

export default TodoList;