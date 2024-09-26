interface TodoProps {
  todos: string[];
}

export function Todo({ todos = [] }: TodoProps) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </>
  );
}
