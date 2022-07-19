import { counter } from "@fortawesome/fontawesome-svg-core";
import { Container } from "postcss";
import React from "react";
  

function Main() {

    return(
        <main className="w-fill bg-no-repeat bg-cover overflow-hidden opacity-80 relative mt-20">
            {/* スライドショーが始まる前に表示する画像 */}
            <img src={`${process.env.PUBLIC_URL}/image/spring.jpg`} alt="spring" id="slid_img"/>
            <h1 className="absolute top-12 left-12 text-white font-bold text-6xl translate-y-1/2 translate-x-1/2">Company</h1>
        </main>
    )
}

export default Main;