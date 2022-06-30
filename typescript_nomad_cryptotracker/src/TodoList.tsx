import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  atom,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';

interface IForm {
  toDo: string;
}

interface IToDo {
  text: string;
  id: number;
  category: 'TO_DO' | 'DOING' | 'DONE';
}

const toDoState = atom<IToDo[]>({
  key: 'ToDo',
  default: [],
});
export default function TodoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<IForm>();

  const onSubmit = (data: IForm) => {
    console.log('add to do ', data.toDo);

    setToDos((oldTodos) => [
      { text: data.toDo, id: Date.now(), category: 'TO_DO' },
      ...oldTodos,
    ]);
    setValue('toDo', '');
  };

  return (
    <div>
      <h1>To Dos</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Write a to do list"
          {...register('toDo', {
            required: 'Please write a To do',
          })}
        />
        <button>add</button>
      </form>
      <ul>
        {toDos.map((item) => {
          return (
            <li key={item.id}>
              {item.text} <span>{item.category}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
