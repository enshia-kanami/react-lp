import React from "react";
import { Header, ServiceItems, Footer } from "../Footer/index";

function Service() {
    return(
        <div>
            <Header/>
            <service>
                <h3 className="text-center m-14 text-4xl">Service</h3>
                    <div className="flex justify-between ">
                        <ServiceItems
                        serviceTitle={'Salse'}
                        serviceText={'texttexttexttexttexttexttexttext'}
                        />
                        <ServiceItems
                        serviceTitle={'Consulting'}
                        serviceText={'texttexttexttexttexttexttexttext'}
                        />
                        <ServiceItems
                        serviceTitle={'OfficeWorck'}
                        serviceText={'texttexttexttexttexttexttexttext'}
                        />
                    </div>
            </service>
            <Footer/>
        </div>
    )
}

export default Service;