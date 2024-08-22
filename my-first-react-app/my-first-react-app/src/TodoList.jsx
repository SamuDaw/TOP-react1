import { v4 } from "uuid";

const todos = [
    { task: "mow the yard", id: v4() },
    { task: "Work on Odin Projects", id: v4() },
    { task: "Feed the cat", id: v4() },
];

function TodoList() {
    return (
        <>
            <h1>TO DO:</h1>
            <ul className="holaa">
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.task}</li>
                ))}
            </ul>
        </>

    );
}

export default TodoList;