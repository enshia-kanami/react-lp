import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from "./components/Page/Home/index"

function App() {
  return (
      <div className='min-h-screen relative'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/header' element={<Header />} />
            <Route path='/aboutDetail.js' element={<About />} />
            <Route path='/service' element={<Service />} />
            <Route path='/contact' element={<Contact />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
