import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./components/Page/Home/Home";

function App() {
  return (
    <div className='App'>
      <div className='min-h-screen relative'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
