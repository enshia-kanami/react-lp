import React  from "react"

function Compiles() {
    return (
        <div className="text-base bg-slate-50">
            <header className="relative bg-white drop-shadow-md ...">
                <div className="flex justify-between items-center pt-0 pb-0">
                    <a href="#" className="font-normal text-xl">Hoge</a>
                    <nav>
                        <ul className="flex">
                            <li><a href="#" className="block py-6 px-4">Home</a></li>
                            <li><a href="#" className="block py-6 px-4">About</a></li>
                            <li><a href="#" className="block py-6 px-4">News</a></li>
                            <li><a href="#" className="block py-6 px-4">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="mb-5 bg-orange-200">
                <h2 className="text-4xl p-8">Hoge Hoge</h2>
                <p className="text-2xl pb-8">hogehogehogehogehogehogehoge</p>
            </main>
            <about>
                <h3 className="text-center m-8 text-2xl">About</h3>
                <div className="flex justify-center">
                    <div className="p-5 bg-orange-100 w-1/3">
                       <p>img</p>
                    </div>
                    <div className="p-5 bg-white w-1/3"> 
                        <h4>Hoge</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttext</p>
                    </div>
                </div>
                <div className="flex justify-center flex-row-reverse mt-5"> 
                    <div className="p-5 bg-orange-100 w-1/3">
                        <p>img</p>
                    </div>
                    <div className="p-5 bg-white w-1/3">
                        <h4>Hoge2</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttext</p>
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <div className="p-5 bg-orange-100 w-1/3">
                        <p>img</p>
                    </div>
                    <div className="p-5 bg-white w-1/3">
                        <h4>Hoge3</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttext</p>
                    </div>
                </div>
            </about>
            <service>
                <h3 className="text-center m-8 text-2xl">Servise</h3>
                <div className="flex justify-between ">
                    <div className="bg-orange-200 rounded drop-shadow-md mb-3 w-1/4 p-3">
                        <h4>Sales</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttexttexttexttexttext</p>
                    </div>
                    <div className="bg-orange-200 rounded drop-shadow-md mb-3 w-1/4 p-3">
                        <h4>Consulting</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttexttexttexttexttext</p>
                    </div>
                    <div className="bg-orange-200 rounded drop-shadow-md mb-3 w-1/4 p-3">
                        <h4>OfficeWork</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttexttexttexttexttext</p>
                    </div>
                </div>
            </service>
            <contact className="bg-slate-200">
                <div className="rounded-lg shadow-xl bg-white m-8 ... p-3">
                    <h3 className="text-center m-8 text-2xl">Contact</h3>
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
                                <label className="items-start text-left w-3/12 inline-block">Contact:</label>
                                <textarea className="bg-gray-100" placeholder="text"></textarea>
                            </div>
                            <div className="md:items-center text-center">
                                <button className="w-1/6 bg-orange-300 text-white rounded drop-shadow-md m-3" type="submit">送信</button>
                            </div>
                        </form>
                </div>
            </contact>
            <footer>
                <div className="text-center">
                    <div>
                    <ul className="flex justify-center mb-5">
                        <li className="first:pl-0"><a href="#">Home</a></li>
                        <li className="pl-3"><a href="#">About</a></li>
                        <li className="pl-3"><a href="#">News</a></li>
                        <li className="pl-3"><a href="#">Contact</a></li>
                    </ul>
                    </div>
                    <p className="py-2.5">&copy; 2022 React_LP</p>
                </div>
            </footer>
        </div>
    )
}

export default Compiles