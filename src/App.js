import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import CardPage from "./pages/create-card";
import FormAddBooks from "./components/Form";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/form" element={<FormAddBooks />} />

        <Route path="/cards" element={<CardPage/>} />
      </Routes>
    </Router>
  )
}


export default App;
