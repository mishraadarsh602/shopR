import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart"
import Footer from "./components/Footer"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}  >
            <Route index element={<Home />} />
            
            <Route exact path="/Cart" element={<Cart />} />

           </Route>
        </Routes>
       <Footer/>

      </BrowserRouter>
    </>
  );
}

export default App;
