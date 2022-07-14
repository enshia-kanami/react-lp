import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Header from './routes/Header';
import Servise from './routes/Servise';
import Contact from './routes/Contact';


function App() {
  return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/header' element={<Header />} />
            <Route path='/about' element={<About />} />
            <Route path='/servise' element={<Servise />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
