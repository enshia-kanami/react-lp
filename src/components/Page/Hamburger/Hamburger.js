import React from "react";
import {useState} from "react";
import {Link} from 'react-router-dom';

function Hamburger (props) {
    const [menuState, setMenuState] = useState(false)
    const clickValue = () => {
      const newState = !menuState // 状態を反転
      setMenuState(newState) // 状態を更新
      if (props.setOpenMenu) {
          props.setOpenMenu(newState)
      }
    };
    return (
      <div onClick={clickValue}>
        {menuState ? (
          <div className="sm:hidden">
            <span className="fixed top-3 left-3 h-0.5 w-5 bg-black z-10"></span>
            <span className="fixed top-3 left-3 mt-2 h-0.5 w-5 bg-black z-10"></span>
            <span className="fixed top-3 left-3 mt-4 h-0.5 w-5 bg-black z-10"></span>
          </div>
        ):(
          <div className="sm:hidden">
            <span className="fixed top-3 left-3 transform rotate-45 mt-0.5 h-0.5 w-5 bg-black z-10"></span>
            <span className="fixed top-3 left-3 transform -rotate-45 mt-0.5 h-0.5 w-5 bg-black z-10"></span>
            <span className="hidden"></span>
            <nav className="bg-white">
              <ul>
                <li><Link to="/" className="block pt-7 pb-4 px-6">Home</Link></li>
                <li><Link to="/aboutdetail" className="block py-4 px-6">About</Link></li>
                <li><Link to="/service" className="block py-4 px-6">Service</Link></li>
                <li><Link to="/contact" className="block py-4 px-6">Contact</Link></li>
              </ul>
            </nav>
          </div>
        )
        }
      </div>
    )
  }

  export default Hamburger;
