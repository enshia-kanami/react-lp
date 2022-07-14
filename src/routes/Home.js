import React  from "react"
import { useState } from "react";
import { Link } from "react-router-dom";

function Compiles() {
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
            <header className="relative bg-white drop-shadow-md ...">
                <div className="flex justify-between items-center pt-0 pb-0">
                    <a href="#" className="font-normal text-xl">Hoge</a>
                    <nav>
                        <ul className="flex">
                            <li><Link to="/" className="block py-6 px-4">Home</Link></li>
                            <li><Link to="/about" className="block py-6 px-4">About</Link></li>
                            <li><Link to="/servise" className="block py-6 px-4">Servise</Link></li>
                            <li><Link to="/contact" className="block py-6 px-4">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="mb-5 bg-orange-200">
                <h2 className="text-4xl p-8">Hoge Hoge</h2>
                <p className="text-2xl pb-8">hogehogehogehogehogehogehoge</p>
            </main>
            <div className="mx-8">
            <about>
            <h3 className="text-center m-14 text-3xl">About</h3>
                <div className="flex justify-center">
                    <div className="p-5 bg-orange-100 w-1/3">
                        <p>img</p>
                    </div>
                    <div className="p-5 bg-white w-1/3">
                        <h4>Hoge3</h4>
                        <p className="break-words whitespace-pre-wrap">texttexttexttexttexttexttexttext</p>
                    </div>
                </div>
                <div className="flex justify-center flex-row-reverse mt-5"> 
                    <div className="p-5 bg-orange-100 w-1/3">
                        <p>img</p>
                    </div>
                    <div className="p-5 bg-white w-1/3">
                        <h4>Hoge3</h4>
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
                <h3 className="text-center m-8 text-3xl">Servise</h3>
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
                <div className="rounded-lg w-3/5 max-w-md my-14 mr-auto ml-auto shadow-xl bg-white p-3">
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
                                <button className="w-1/5 bg-orange-300 text-white text-[12px] rounded drop-shadow-md m-3 p-2" type="submit">SendRequest</button>
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
                        <li className="pl-3"><a href="#">News</a></li>
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