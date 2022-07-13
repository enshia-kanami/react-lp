import React from "react";
import Button from "./Button"; 

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
                                <Button
                                buttonType={"Send request"}
                                />
                            </div>
                        </form>
                </div>
        </contact>
    )
}

export default Contact;