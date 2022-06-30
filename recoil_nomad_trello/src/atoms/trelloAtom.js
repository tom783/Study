import { atom, selector } from 'recoil';

export const toDoState = atom({
  key: 'toDo',
  default: {
    todos: ['a', 'b', 'c', 'd', 'e', 'f'],
    doings: [],
    dones: [],
  },
});
