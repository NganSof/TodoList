import Todo from "./Component/Todo";
import { BrowserRouter as Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./index.css";

function App() {
  return (
    <Route exact path="/">
      <Todo />
    </Route>
  );
}

export default App;
