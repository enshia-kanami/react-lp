import React from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Compiles from "./routes/Compiles";
import Header from "./routes/Header";

function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<Header />} />

        </Routes>
      </div>
  );
}

export default App;
