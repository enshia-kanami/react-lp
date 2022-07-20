import React from "react";

const Button = (props) => {
    return (
        <div>
            <button className="w-1/6 bg-orange-300 text-white text-[12px] rounded drop-shadow-md m-3 p-2" type="submit">{props.buttonType}</button>
        </div>
    )
}
export default Button;