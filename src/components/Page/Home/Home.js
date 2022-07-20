import React  from "react"
import SimpleSlider from "../Main/SimpleSlider";
import News from "../News/News" ;
import Service from "../Service/Service";
import CompanyInfo from "../Company/CompanyInfo";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function Home() {
    return (
        <div className="text-base bg-slate-50">
            <Header/>
            <SimpleSlider/>
            <div className="mx-5 sm:mx-10">
                <div className="sm:flex justify-around">
                    <CompanyInfo/>
                    <Service/>
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
                    <Contact/>
                    <Footer />
            </div>
        </div>
    )
}

export default Home;