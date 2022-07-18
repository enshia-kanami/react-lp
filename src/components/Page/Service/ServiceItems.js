const ServiceItems = (props) => {
    return (
        <div className="bg-orange-200 rounded drop-shadow-md mb-3 w-1/4 p-3">
            <h4>{props.serviceTitle}</h4>
            <p className="break-words whitespace-pre-wrap">{props.serviceText}</p>
        </div>
    )
}

export default ServiceItems;