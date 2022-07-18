import React  from "react"
import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "../Hamburger/Hamburger";
import SimpleSlider from "../Main/SimpleSlider";

function Compiles() {
    //お問合せ
    const initialVlues = {userName: "", userEmail: ""}//フォームが３つだから、配列で１つに管理
    const [formVlues, setFormVlues] = useState(initialVlues);//初期値として設定
    const [formErrors, setFormErrors] = useState({});//エラー用のオブジェクト
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormVlues ({...formVlues, [name]: value});
        console.log(formVlues);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //更新されるのを妨げる
        setFormErrors(validate(formVlues));//バリデーションチェック
        setIsSubmit(true);//
    }

    const validate = (values) => { //引数→どの値をバリデーションチェックするのか
        const errors = {}; //どのinputでエラーが発生しているのかオブジェクトで管理
        const regex = /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/ //メールアドレスバリデーション正規表現
        
        if(!values.userName) {
            errors.userName = "nameを入力して下さい";
        } else if (values.userName.length < 2) {
            errors.userName = "2文字以上で入力して下さい";
        }
        if(!values.userEmail) {
            errors.userEmail = "emailを入力して下さい";
        } else if (!regex.test(values.userEmail)) {
            errors.userEmail = "正しいメールアドレスを入力して下さい";
        }
        return errors;
    }

    return (
        <div className="text-base bg-slate-50">
            <header className="top-0 fixed w-full bg-white drop-shadow-md ...">
                <div className="sm:flex justify-between items-center pt-0 pb-0">
                    <a href="#" className="font-normal text-xl pl-8 hidden sm:block">Hoge</a>
                    <nav className="bg-white hidden">
                        <ul className="sm:flex sm:justify-center block">
                            <li><Link to="/" className="block py-6 px-4">Home</Link></li>
                            <li><Link to="/aboutdetail" className="block py-6 px-4">About</Link></li>
                            <li><Link to="/servise" className="block py-6 px-4">Servise</Link></li>
                            <li><Link to="/contact" className="block py-6 px-4">Contact</Link></li>
                        </ul>
                    </nav>
                    <Hamburger/>
                </div>
            </header>
            {/* <main className="mb-5 bg-orange-200 mt-[72px]">
                <h2 className="text-4xl p-8">Hoge Hoge</h2>
                <p className="text-2xl pb-8 pl-8 break-words whitespace-pre-wrap">hogehogehogehogehogehogehoge</p>
            </main> */}
            <main className="mt-[72px]">
                <SimpleSlider/>
            </main>
            <div className="mx-5 sm:mx-10">
            <about>
            <h3 className="text-center m-14 text-3xl">About</h3>
                <div className="flex justify-center">
                    <div className="p-3 bg-orange-100 w-32 h-32 sm:w-3/12 sm:h-3/12">
                        <p>img</p>
                    </div>
                    <div className="p-3 bg-white w-32 h-32 sm:w-3/12 sm:h-3/12">
                        <h4 className="text-xl">Hoge1</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttext</p>
                    </div>
                </div>
                <div className="flex justify-center flex-row-reverse mt-5"> 
                    <div className="p-3 bg-orange-100 w-32 h-32 sm:w-3/12 sm:h-3/12">
                        <p>img</p>
                    </div>
                    <div className="p-3 bg-white w-32 h-32 sm:w-3/12 sm:h-3/12">
                        <h4 className="text-xl">Hoge2</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttext</p>
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <div className="p-3 bg-orange-100 w-32 h-32 sm:w-3/12 sm:h-3/12">
                        <p>img</p>
                    </div>
                    <div className="p-3 bg-white w-32 h-32 sm:w-3/12 sm:h-3/12">
                        <h4 className="text-xl">Hoge3</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttext</p>
                    </div>
                </div>
            </about>
            <service>
                <h3 className="text-center m-14 text-3xl">Service</h3>
                <div className="sm:flex justify-around ">
                    <div className="bg-orange-200 rounded drop-shadow-md mb-3 sm:w-1/4 p-3">
                        <h4 className="text-xl font-semibold">Sales</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttexttexttexttexttext</p>
                    </div>
                    <div className="bg-orange-200 rounded drop-shadow-md mb-3 sm:w-1/4 p-3">
                        <h4 className="text-xl font-semibold">Consulting</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttexttexttexttexttext</p>
                    </div>
                    <div className="bg-orange-200 rounded drop-shadow-md mb-3 sm:w-1/4 p-3">
                        <h4 className="text-xl font-semibold">OfficeWork</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttexttexttexttexttext</p>
                    </div>
                </div>
            </service>
            {/* <news>
                <h3 className="text-center m-14 text-3xl">News</h3>
                <ul>
                    <li>
                        <link to="#">
                            <p>2022.02.01</p>
                            <p>newstextnewstextnewstextnewstextnewstext</p>
                        </link>
                    </li>
                    <li>
                        <link to="#">
                            <p>2022.01.25</p>
                            <p>newstextnewstextnewstextnewstextnewstext</p>
                        </link>
                    </li>
                    <li>
                        <link to="#">
                            <p>2021.12.28</p>
                            <p>newstextnewstextnewstextnewstextnewstext</p>
                        </link>
                    </li>
                    <li>
                        <link to="#">
                            <p>2021.11.13</p>
                            <p>newstextnewstextnewstextnewstextnewstext</p>
                        </link>
                    </li>
                </ul>
            </news> */}
            <contact className="bg-slate-200">
                <div className="rounded-lg sm:w-3/5 max-w-md my-14 mr-auto ml-auto shadow-xl bg-white p-3">
                    <h3 className="text-center m-6 text-3xl">Contact</h3>
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <div className="mb-2 text-center">
                                <label className="text-left w-3/12 inline-block">Name:</label>
                                <input className="bg-gray-100" type="text" placeholder= "hoge" name="userName" onChange={(e) => handleChange(e)}></input> {/*文字を格納*/}
                            </div>
                                <p className="text-red-600 text-xs">{formErrors.userName}</p>
                            <div className="mb-2 text-center">
                                <label className="text-left w-3/12 inline-block">Email:</label>
                                <input className="bg-gray-100" type="email" placeholder= "hoge@hoge" name="userEmail" onChange={(e) => handleChange(e)}></input>
                            </div>
                                <p className="text-red-600 text-xs">{formErrors.userEmail}</p>
                            <div className="mb-2 text-center">
                                <label className="items-start text-left  align-top w-3/12 inline-block">Contact:</label>
                                <textarea className="bg-gray-100" placeholder="text" tepe="textarea" ></textarea>
                            </div>
                                <div className="md:items-center text-center">
                                <button className="w-1/3 bg-orange-300 text-white text-[12px] rounded drop-shadow-md m-3 p-2" type="submit">SendRequest</button>
                                {Object.keys(formErrors).length === 0 && isSubmit && (
                                    <div className="text-green-600">ログインに成功しました</div>
                                )} {/*formErrorsの中にkeyの値が入っている。エラー文が何個入っているのか*/}
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
                        <li className="pl-3"><a href="#">Servise</a></li>
                        <li className="pl-3"><a href="#">Contact</a></li>
                    </ul>
                    </div>
                    <p className="py-2.5">&copy; 2022 React_LP</p>
                </div>
            </footer>
        </div>
        </div>
    )
}

export default Compiles;