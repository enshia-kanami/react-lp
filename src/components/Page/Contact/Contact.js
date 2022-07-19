import React from "react";
import { useState } from "react";
// import { Button } from "../index"

function Contact() {
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
        <div>
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
        </div>     
    )
}

export default Contact;