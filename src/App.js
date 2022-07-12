// import Compiles from "./component/Compiles";
import {Header, Main, About, Servise, Contact, Button, Footer} from './component/index';

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <div className='m-10'>
        <About/>
        <Servise/>
        <Contact/>
        <Footer/>
        {/* <Compiles/> */}
      </div>
    </div>
  );
}

export default App;
