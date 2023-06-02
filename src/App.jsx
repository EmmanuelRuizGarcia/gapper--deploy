import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Home/Footer/Footer";
import Header from "./components/Home/Haeder/Header";

import Home from "./components/Home/Home";

function App() {
  return (
    <div className="font-WorkSans">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
