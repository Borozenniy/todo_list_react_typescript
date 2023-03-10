import React from "react";
import { Header, Panel, TodoList } from "./components/index";
import { Box } from "@mui/material";
import "./App.css";
import { useState } from "react";

//* Time 1;30;04
export type Todo = {
   id: number;
   name: string;
   description: string;
   checked: boolean;
};
const DEFAULT_TODO_LIST = [
   { id: 1, name: "task1", description: "text1", checked: false },
   { id: 2, name: "task2", description: "text2", checked: false },
   { id: 3, name: "task3", description: "text3", checked: true },
];

const App: React.FC = () => {
   //* useState for Edit

   const [editTodoId, seteditTodoId] = React.useState<number | null>(null);

   const [todoList, setTodoList] = useState(DEFAULT_TODO_LIST);

   //? All of function

   const onEdit = (id: Todo["id"]) => {
      seteditTodoId(id);
   };
   const onDeleteTodo = (id: Todo["id"]) => {
      setTodoList(todoList.filter((todolist) => todolist.id !== id));
   };

   const onAddTodo = ({ name, description }: Omit<Todo, "id" | "checked">) => {
      setTodoList([
         ...todoList,
         {
            id: todoList[todoList.length - 1].id + 1,
            description,
            name,
            checked: false,
         },
      ]);
   };
   const onChangeTodo = ({
      name,
      description,
   }: Omit<Todo, "id" | "checked">) => {
      setTodoList(
         todoList.map((todo) => {
            if (todo.id === editTodoId) {
               return { ...todo, name, description };
            }
            return todo;
         })
      );
      seteditTodoId(null);
   };

   //TODO Закінчити фунцію по зміні boolean значення
   /*
   const onCheckedTodo = (checked: Todo["checked"]) => {
      setTodoList(todoList.filter((todo) => todo.checked));
   };
   */

   const onCheckedTodo = (id: Todo["id"]) => {
      setTodoList(
         todoList.map((todo) => {
            if (todo.id === id) {
               return { ...todo, checked: !todo.checked };
            }
            return todo;
         })
      );
   };

   return (
      <>
         <div className="App">
            <Box display="flex" flexDirection={"column"} width={600}>
               <Header todoCount={todoList.length} />
               {/* Need to fix this */}
               <Panel onAddTodo={onAddTodo} />
               <TodoList
                  editTodoId={editTodoId}
                  todoList={todoList}
                  onDeleteTodo={onDeleteTodo}
                  onCheckedTodo={onCheckedTodo}
                  onEdit={onEdit}
                  onChangeTodo={onChangeTodo}
               />
            </Box>
         </div>
         c
      </>
   );
};

export default App;
