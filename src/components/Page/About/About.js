import React from 'react';

function About() {
    return(
        <div>
            <about>
            <h3 className="text-center m-14 text-3xl">About</h3>
                <div className="flex justify-center">
                    <div className="p-3 bg-orange-100 w-32 h-32 sm:w-3/12 sm:h-3/12">
                        <p>img</p>
                    </div>
                    <div className="p-3 bg-white w-32 h-32 sm:w-3/12 sm:h-3/12">
                        <h4 className="text-xl">Hoge1</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttext</p>
                    </div>
                </div>
                <div className="flex justify-center flex-row-reverse mt-5"> 
                    <div className="p-3 bg-orange-100 w-32 h-32 sm:w-3/12 sm:h-3/12">
                        <p>img</p>
                    </div>
                    <div className="p-3 bg-white w-32 h-32 sm:w-3/12 sm:h-3/12">
                        <h4 className="text-xl">Hoge2</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttext</p>
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <div className="p-3 bg-orange-100 w-32 h-32 sm:w-3/12 sm:h-3/12">
                        <p>img</p>
                    </div>
                    <div className="p-3 bg-white w-32 h-32 sm:w-3/12 sm:h-3/12">
                        <h4 className="text-xl">Hoge3</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttext</p>
                    </div>
                </div>
            </about>
        </div>
    )
}

export default About;