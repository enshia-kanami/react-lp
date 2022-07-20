import React from "react";
import { Link } from "react-router-dom";

const News = (props) => {
    return(
        <div>
            <news>
                <div className="w-3/4 m-auto">
                    <h3 className="mt-14 mb-6 mr-6 ml-6 text-3xl font-bold">Company News Room</h3>
                        <ul>
                            <li className="ml-6">
                                <h4><Link to="/newsdetail" className="text-xl font-medium">{props.title1}</Link></h4>
                                <p className="py-2">{props.text1}</p>
                                <p>{props.date1}</p>
                            </li>
                            <li className="ml-6">
                                <h4 className="pt-7"><Link to="/newsdetail" className="text-xl font-medium">{props.title2}</Link></h4>
                                <p className="py-2">{props.text2}</p>
                                <p>{props.date2}</p>
                            </li>
                            <li className="ml-6">
                                <h4 className="pt-7"><Link to="/newsdetail" className="text-xl font-medium">{props.title3}</Link></h4>
                                <p className="py-2">{props.text3}</p>
                                <p>{props.date3}</p>
                            </li>
                        </ul>
                </div>
            </news>
        </div>
    )
}
export default News;