import React from 'react';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Compiles from './routes/Compiles';
import About from './routes/About';
import Header from "./routes/Header";

function App() {
  return (
      <div className='App'>
        <Routes>
          <Route path='/' element={<Compiles />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
  );
}

export default App;
