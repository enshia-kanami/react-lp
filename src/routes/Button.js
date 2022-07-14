import React from "react";

const Button = (props) => {
    return (
        <button className="w-1/5 bg-orange-300 text-white text-[12px] rounded drop-shadow-md m-3 p-2" type="submit">{props.buttonType}</button>
    )
}
export default Button;