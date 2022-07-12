function Contact() {
    return (
        <contact className="bg-slate-200">
                <div className="rounded-lg w-3/5 my-14 mr-auto ml-auto shadow-xl bg-white p-3">
                    <h3 className="text-center m-6 text-4xl">Contact</h3>
                        <form>
                            <div className="mb-2 text-center">
                                <label className="text-left w-3/12 inline-block">Name:</label>
                                <input className="bg-gray-100" type="text" placeholder="hoge"></input>
                            </div>
                            <div className="mb-2 text-center">
                                <label className="text-left w-3/12 inline-block">Email:</label>
                                <input className="bg-gray-100" type="email" placeholder="hoge@hoge.com"></input>
                            </div>
                            <div className="mb-2 text-center">
                                <label className="items-start text-left  align-top w-3/12 inline-block">Contact:</label>
                                <textarea className="bg-gray-100" placeholder="text"></textarea>
                            </div>
                            <div className="md:items-center text-center">
                                <button className="w-1/6 bg-orange-300 text-white rounded drop-shadow-md m-3 p-2" type="submit">Send request</button>
                            </div>
                        </form>
                </div>
        </contact>
    )
}

export default Contact