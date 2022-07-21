import React from "react"
import Header from "../Header/Header";
import SimpleSlider from "../Main/SimpleSlider";
import CompanyInfo from "../Company/CompanyInfo";
import Servise from "../Service/Service";
import News from "../News/News" ;
import Footer from "../Footer/Footer";


function Home() {
    return (
        <div>
            <div className="text-base bg-slate-50">
                <Header/>
                <SimpleSlider/>
                <div className="mx-5 sm:mx-10">
                    <div className="sm:flex sm:justify-around w-3/4 m-auto">
                        <CompanyInfo/>
                        <Servise/>
                    </div>
                        <News
                        title1={"News1"}
                        text1={"news text news text news text news text news text news text news text news text news text news text"}
                        date1={"2022.2.10"}
                        title2={"News2"}
                        text2={"news text news text news text news text news text news text news text news text news text news text"}
                        date2={"2022.1.5"}
                        title3={"News3"}
                        text3={"news text news text news text news text news text news text news text news text news text news text"}
                        date3={"2021.12.11"}
                        />
                </div>
                <Footer />  
            </div>
        </div>
    )
}

export default Home;