import axios from "axios"

const url = 'https://jsonplaceholder.typicode.com/todos/1'
// type
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    
    const todo = response.data as Todo;
    const userId = todo.userId;
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    
    // console.log(`The todo value-> ${userId}, ${id}, ${title}, ${completed}`);
    logTodo(userId, id, title, completed);
});

const logTodo = (userId, id, title, completed) => {
    console.log(`The todo value-> ${userId}, ${id}, ${title}, ${completed}`);
};