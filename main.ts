import axios from 'axios';

interface Todo {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
}
const url: string = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(res => {
  const todo = res.data as Todo;

  console.log(todo);
});
