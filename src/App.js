import {useState, useEffect} from "react"

function App() {
  const [toDo, setTodo] = useState("")
  const [toDos, setToDos] = useState([])
  const onChange = (event) => setTodo(event.target.value)
  const onSubmit = (event) => {
    event.preventDefault()
    if (toDo === "") {
      return
    }
    setTodo("")
    setToDos((currentArray) => [toDo, ...currentArray])
  }
  console.log(toDos)

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do ..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
