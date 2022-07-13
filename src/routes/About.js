import React from 'react';
import AboutContent from './AboutContent';
import AboutImg from './AboutImg';

function About() {
    return(
        <about>
            <h3 className="text-center m-14 text-3xl">About</h3>
                <div className="flex justify-center">
                    <AboutImg/>
                    <div className="p-5 bg-white w-1/3"> 
                        <AboutContent
                         aboutTitle={'hoge2'}
                         aboutText={'texttexttexttexttexttexttexttext'}
                        />
                    </div>
                </div>
                <div className="flex justify-center flex-row-reverse mt-5"> 
                    <AboutImg/>
                    <div className="p-5 bg-white w-1/3">
                        <AboutContent
                         aboutTitle={'hoge2'}
                         aboutText={'texttexttexttexttexttexttexttext'}
                        />
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <AboutImg/>
                    <div className="p-5 bg-white w-1/3">
                        <AboutContent
                         aboutTitle={'hoge3'}
                         aboutText={'texttexttexttexttexttexttexttext'}
                        />
                    </div>
                </div>
        </about>
    )
}

export default About;