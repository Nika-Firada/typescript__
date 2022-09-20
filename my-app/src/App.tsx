import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import TodosItemPage from "./components/TodosItemPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import UserPage from "./components/UserPage";

function App() {
  return (
    <div className="wrap">
      <div className="nav-wrap">
        <NavLink className='nav' to="/users">Users</NavLink>
        <NavLink className='nav' to="/todos">Todos</NavLink>
      </div>
      <Routes>
        <Route path="/users" element={<UserPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/users/:id" element={<UserItemPage />} />
        <Route path="/todos/:id" element={<TodosItemPage />} />
      </Routes>
    </div>
  );
}

export default App;
