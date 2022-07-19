import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from "./components/Page/Home/index"

function App() {
  return (
      <div className='min-h-screen relative'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
