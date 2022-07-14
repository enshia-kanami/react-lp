const ServiseItems = (props) => {
    return (
        <div className="bg-orange-200 rounded drop-shadow-md mb-3 w-1/4 p-3">
            <h4>{props.serviseTitle}</h4>
            <p className="break-words whitespace-pre-wrap">{props.serviseText}</p>
        </div>
    )
}

export default ServiseItems;