import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomeView from "./views/HomeView";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomeView />} />
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
