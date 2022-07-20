import React from "react";
import { Link } from "react-router-dom";

function Service() {
    return(
        <div className="m-auto w-3/4 sm:w-full">
            <h3 className="mt-14 mb-4 mr-6 text-3xl font-bold">Service</h3>
            <p>texttexttexttexttexttexttexttext</p>
            <Link to="/servicedetail" className="text-sky-400 pt-4">詳細を見る</Link>
        </div>
    )
}

export default Service;