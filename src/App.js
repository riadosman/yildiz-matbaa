import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CategorysPage from "./Pages/CategorysPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/Contact";
import Info from "./Pages/Info";
// import { MyContextProvider } from "./context.jsx";
import Cart from "./Pages/Cart";
import AllProducts from "./Pages/AllProducts";
function App() {
  return (
    <div>
      {/* <MyContextProvider> */}
        <BrowserRouter>
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact-us" element={<Contact />} />
              {/* <Route path="/category" element={<AllProducts />} /> */}
              {/* <Route path="/category/:id" element={<CategorysPage />} /> */}
              {/* <Route path="/info/:id" element={<Info />} /> */}
              <Route path="/Cart" element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      {/* </MyContextProvider> */}
    </div>
  );
}
export default App;
