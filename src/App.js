import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Compiles from './routes/Compiles';
import About from './routes/About';
import Header from './routes/Header';
import Servise from './routes/Servise';

function App() {
  return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Compiles />} />
            <Route path='/header' element={<Header />} />
            <Route path='/about' element={<About />} />
            <Route path='/servise' element={<Servise />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
