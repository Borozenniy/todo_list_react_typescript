import React from "react";
import { Paper, Box, Typography, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import type { Todo } from "../../../App";

interface TodoItemProps {
   todo: Todo;
   onDeleteTodo: (id: Todo["id"]) => void;
   onCheckedTodo: (id: Todo["id"]) => void;
   onEdit: (id: Todo["id"]) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({
   todo,
   onDeleteTodo,
   onCheckedTodo,
   onEdit,
}) => {
   return (
      <Paper
         elevation={2}
         sx={{
            margin: "7px 0px",
            width: "100%",
            padding: "10px 10px",
            borderRadius: 2,
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            gap: 1,
            backgroundColor: todo.checked ? "#8fd69b" : "#fff",
         }}
      >
         <Box textAlign={"left"}>
            <Typography
               variant="subtitle2"
               component="div"
               gutterBottom
               sx={{}}
            >
               {todo.description}
            </Typography>
            <Typography
               variant="h5"
               component="h4"
               gutterBottom
               sx={{
                  cursor: "pointer",
                  textDecorationLine: todo.checked ? "line-through" : "none",
               }}
            >
               {todo.name}
            </Typography>
         </Box>
         <Box display={"flex"} alignItems={"center"}>
            <Button
               onClick={() => onCheckedTodo(todo.id)}
               size="small"
               variant="contained"
               color="success"
               sx={{}}
            >
               Success
            </Button>
            <Button
               size="small"
               variant="outlined"
               color="primary"
               onClick={() => onEdit(todo.id)}
            >
               Edit
            </Button>
            <IconButton
               onClick={() => onDeleteTodo(todo.id)}
               size="large"
               color="error"
            >
               <DeleteIcon />
            </IconButton>
         </Box>
      </Paper>
   );
};
