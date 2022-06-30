import React, { Children } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const BoardStyle = styled.div`
  ${(props) => getListStyle(props.isOver)}
  background-color: ${(props) =>
    props.isOver ? 'lightblue' : props.theme.boardColor};
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 5px;
  min-height: 200px;
`;

const getListStyle = (isDraggingOver) => ({
  padding: isDraggingOver ? 20 : 10,
  width: 250,
});

export default function Board({ droppableId, children }) {
  return (
    <Droppable droppableId={droppableId}>
      {(provided, snapshot) => {
        return (
          <BoardStyle
            isOver={snapshot.isDraggingOver}
            ref={provided.innerRef}
            {...provided.droppableProps}>
            {children}
            {provided.placeholder}
          </BoardStyle>
        );
      }}
    </Droppable>
  );
}
