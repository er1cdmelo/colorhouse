import "./styles/app.sass";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Palettes from "./pages/Palettes";

function App() {
  

  return (
    <Router>
      <div id="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/mypalettes' element={<Palettes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
