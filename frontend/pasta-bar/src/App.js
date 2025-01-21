import {Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Root from "./components/root/Root";
import Login from "./pages/login/Login";
import Cart from "./components/cart/Cart";
import Context from "./services/context/context";


function App() {
  return (
    <Context>
  <Routes>
    <>
      <Route path="" element={<Root />}>
          <Route path="/" element={<Home />}/>
        </Route>
        <Route path="/cart" element={<Cart />} />
    </>
  </Routes>
  </Context>
  );
}

export default App;
