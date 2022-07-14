import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home, About, Header, Servise, Contact} from "./routes/index"


function App() {
  return (
      <div className='min-h-screen relative'>
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
