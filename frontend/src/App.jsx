import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBooks from "./pages/CreateBooks";
import DeleteBooks from "./pages/DeleteBooks";
import ShowBook from "./pages/ShowBook";
import EditBooks from "./pages/EditBooks";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/books/create" element={<CreateBooks></CreateBooks>}></Route>
      <Route path="/books/details/:id" element={<ShowBook></ShowBook>}></Route>
      <Route path="/books/edit/:id" element={<EditBooks></EditBooks>}></Route>
      <Route
        path="/books/delete/:id"
        element={<DeleteBooks></DeleteBooks>}
      ></Route>
    </Routes>
  );
};

export default App;
