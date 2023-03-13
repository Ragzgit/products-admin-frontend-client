import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import AddProducts from "./routes/addProducts";
import Products from "./routes/products";
import UpdateProduct from "./routes/updateProducts";
import './style.scss';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/add" element={<AddProducts />} />

        </Routes>

      </BrowserRouter>
    </div>


  );
}

export default App;
