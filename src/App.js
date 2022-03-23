import { Provider } from "react-redux";
import store from "./redux/store";
import ToDoList from "./components/ToDoList";
function App() {
  return (
    <Provider store={store}>
      <ToDoList></ToDoList>
    </Provider>
  );
}

export default App;
