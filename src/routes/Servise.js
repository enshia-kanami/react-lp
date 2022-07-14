import React from "react";
import ServiseItems from "./ServiseItems";

function Servise() {
    return(
        <service>
            <h3 className="text-center m-14 text-4xl">Servise</h3>
                <div className="flex justify-between ">
                    <ServiseItems
                    serviseTitle={'Salse'}
                    serviseText={'texttexttexttexttexttexttexttext'}
                    />
                    <ServiseItems
                    serviseTitle={'Consulting'}
                    serviseText={'texttexttexttexttexttexttexttext'}
                    />
                    <ServiseItems
                    serviseTitle={'OfficeWorck'}
                    serviseText={'texttexttexttexttexttexttexttext'}
                    />
                </div>
        </service>
    )
}

export default Servise;