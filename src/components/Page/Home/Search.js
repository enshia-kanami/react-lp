import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";


const Search = (props) => {
    // const [state, setState] = useState(initialState);//setStateはstateを更新するための関数 initialStateはstateの初期値
    const [searchValue, setSearchValue] = useState(""); //setSearchValueはsearchValueを更新する為の関数 初期値空
    //form内の値が変更された時に発火 stateの値をform内に記述された値に変換
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }
    //resetInputField 入力値の値をリセット
    const resetInputField = () => {
        setSearchValue("") //空にする
    }
    //callSearchFunction 
    const callSearchFunction = (e) => {
        e.preventDefault();             //ブラウザのデフォルト動作を発生させない
        props.search(searchValue);    //formに入力された値を引数にとり、search関数を実行
        resetInputField();  //入力値の値をリセットする関数
    }

    return(
        <div>
            <form className="search inline-flex items-center">
                <input
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
                className="border-2 rounded border-slate-300"
                />
                <button onClick={callSearchFunction} type="submit" 
                />
                <span className="mx-3 "><FiSearch/></span>
            </form>
        </div>
    )
}

export default Search;