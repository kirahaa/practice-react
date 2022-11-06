import {useState, useEffect} from "react"

function Hello() {
  const byeFn = () => {
    console.log('bye :<')
  }
  const HiFn = () => {
    console.log("created!")
    return byeFn
  }
  useEffect(HiFn, [])
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing(prev => !prev)

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'hide' : 'show'}</button>
    </div>
  );
}

export default App;
