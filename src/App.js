import React, { useState, useMemo } from "react";
import graphql from "babel-plugin-relay/macro";
const {
  useLazyLoadQuery,
  useFragment,
  useMutation,
} = require("react-relay/hooks");

function App() {
  const data = useLazyLoadQuery(todos);
  const [text, setText] = useState("");
  const [addTodo, isLoading] = useMutation(addTodoMutation);

  const addTodoConfig = useMemo(
    () => ({
      variables: {
        input: { title: text, completed: false },
      },
      updater: (store) => {
        const newTodo = store.getRootField("insert_todo_list_one");
        const root = store.getRoot();
        const todos = root.getLinkedRecords("todo_list");

        root.setLinkedRecords([newTodo, ...todos], "todo_list");
      },
    }),
    [text]
  );

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(addTodoConfig);
          setText("");
        }}
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button disabled={isLoading} type="submit">
          add
        </button>
      </form>
      <ul>
        {data.todo_list.map((todo) => (
          <Todo key={todo.__id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

function Todo(props) {
  const data = useFragment(todoFragment, props.todo);
  const [updateTodo] = useMutation(updateTodoMutation);
  const [deleteTodo] = useMutation(deleteTodoMutation);

  const updateTodoConfig = useMemo(
    () => ({
      variables: {
        pk_columns: { id: data.id },
        _set: { completed: !data.completed },
      },
      updater: (store) => {
        const todo = store.get(data.id);
        todo.setValue(!data.completed, "completed");
      },
      optimisticResponse: {
        update_todo_list_by_pk: { ...data, completed: !data.completed },
      },
    }),
    [data]
  );

  const deleteTodoConfig = useMemo(
    () => ({
      variables: {
        id: data.id,
      },
      optimisticUpdater: (store) => {
        const root = store.getRoot();
        const todos = root.getLinkedRecords("todo_list");

        root.setLinkedRecords(
          todos.filter((todo) => todo.getValue("id") !== data.id),
          "todo_list"
        );
      },
      updater: (store) => {
        const root = store.getRoot();
        const todos = root.getLinkedRecords("todo_list");

        root.setLinkedRecords(
          todos.filter((todo) => todo.getValue("id") !== data.id),
          "todo_list"
        );
      },
    }),
    [data]
  );

  return (
    <div>
      <span
        onClick={() => deleteTodo(deleteTodoConfig)}
        style={{ marginRight: "2rem", cursor: "pointer" }}
      >
        X
      </span>
      <span
        onClick={() => updateTodo(updateTodoConfig)}
        style={{
          textDecoration: data.completed ? "line-through" : "",
          cursor: "pointer",
        }}
      >
        {data.title}
      </span>
    </div>
  );
}

const deleteTodoMutation = graphql`
  mutation AppDeleteTodoMutation($id: uuid!) {
    delete_todo_list_by_pk(id: $id) {
      completed
      id
      title
    }
  }
`;

const updateTodoMutation = graphql`
  mutation AppUpdateTodoMutation(
    $_set: todo_list_set_input
    $pk_columns: todo_list_pk_columns_input!
  ) {
    update_todo_list_by_pk(pk_columns: $pk_columns, _set: $_set) {
      completed
      id
      title
    }
  }
`;

const addTodoMutation = graphql`
  mutation AppAddTodoMutation($input: todo_list_insert_input!) {
    insert_todo_list_one(object: $input) {
      completed
      id
      title
    }
  }
`;

const todos = graphql`
  query AppTodosQuery {
    todo_list {
      ...AppTodoFragment
    }
  }
`;

const todoFragment = graphql`
  fragment AppTodoFragment on todo_list {
    completed
    id
    title
  }
`;

export default App;
