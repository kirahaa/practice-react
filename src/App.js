import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/movie/:id' element={<Detail />}>
        </Route>
        <Route path='/' element={<Home />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
