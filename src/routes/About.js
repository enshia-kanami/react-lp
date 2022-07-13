import React from "react";

function About() {
    return(
        <about>
            <h3 className="text-center m-14 text-3xl">About</h3>
                <div className="flex justify-center">
                    <div className="p-5 bg-orange-100 w-1/3">
                       <p>img</p>
                    </div>
                    <div className="p-5 bg-white w-1/3"> 
                        <h4>Hoge</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttext</p>
                    </div>
                </div>
                <div className="flex justify-center flex-row-reverse mt-5"> 
                    <div className="p-5 bg-orange-100 w-1/3">
                        <p>img</p>
                    </div>
                    <div className="p-5 bg-white w-1/3">
                        <h4>Hoge2</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttext</p>
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <div className="p-5 bg-orange-100 w-1/3">
                        <p>img</p>
                    </div>
                    <div className="p-5 bg-white w-1/3">
                        <h4>Hoge3</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttext</p>
                    </div>
                </div>
        </about>
    )
}

export default About;