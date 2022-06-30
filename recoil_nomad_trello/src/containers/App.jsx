import { hourSelector, minutesState } from 'atoms/learnSelectAtom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { toDoState } from 'atoms/trelloAtom';
import DragabbleCard from 'components/DragabbleCard';
import Board from 'components/Board';

// function App() {
//   const [minutes, setMinutes] = useRecoilState(minutesState);
//   const [hours, setHours] = useRecoilState(hourSelector);

//   const onMinutesChange = (e) => {
//     setMinutes(+e.target.value);
//   };

//   const onHouresChange = (e) => {
//     setHours(+e.target.value);
//   };

//   return (
//     <div>
//       <input
//         value={minutes}
//         onChange={onMinutesChange}
//         type="number"
//         placeholder="minutes"
//       />
//       <input
//         value={hours}
//         onChange={onHouresChange}
//         type="number"
//         placeholder="hours"
//       />
//     </div>
//   );
// }

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

const getListStyle = (isDraggingOver) => ({
  padding: isDraggingOver ? 20 : 10,
  width: 250,
});

function App() {
  const [{ todos, doings, dones }, setList] = useRecoilState(toDoState);

  const onDragEnd = ({ destination, source, draggableId }) => {
    if (!destination) {
      return;
    }

    if (destination?.droppableId === source.droppableId) {
      setList((oldLists) => {
        const boardCopy = [...oldLists[destination.droppableId]];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, draggableId);

        return {
          ...oldLists,
          [destination.droppableId]: boardCopy,
        };
      });
    }

    if (destination?.droppableId !== source.droppableId) {
      setList((oldLists) => {
        const sourceBoardCopy = [...oldLists[source.droppableId]];
        const destinationBoardCopy = [...oldLists[destination.droppableId]];

        sourceBoardCopy.splice(source.index, 1);
        destinationBoardCopy.splice(destination.index, 0, draggableId);

        return {
          ...oldLists,
          [source.droppableId]: sourceBoardCopy,
          [destination.droppableId]: destinationBoardCopy,
        };
      });
    }
    // setList((oldLists) => {
    // const newList = { ...oldLists };
    // newList[source.droppableId].splice(source.index, 1);
    // newList[destination.droppableId].splice(
    //   destination.index,
    //   0,
    //   draggableId
    // );

    // return newList;
    // });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Board droppableId="todos">
            {todos.map((todo, idx) => {
              return <DragabbleCard info={todo} index={idx} key={todo} />;
            })}
          </Board>
          <Board droppableId="doings">
            {doings.map((doing, idx) => {
              return <DragabbleCard info={doing} index={idx} key={doing} />;
            })}
          </Board>
          <Board droppableId="dones">
            {dones.map((done, idx) => {
              return <DragabbleCard info={done} index={idx} key={done} />;
            })}
          </Board>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
