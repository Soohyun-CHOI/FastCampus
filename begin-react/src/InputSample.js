import React, { useState } from "react";

function InputSample() {
    const [inputs, setInputs] = useState({
        name: "",
        nickName: "",
    })
    const { name, nickName } = inputs;

    const onChange = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        })
    }
    const onReset = () => {
        setInputs({
            name: "",
            nickName: "",
        })
    }

    return (
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name} />
            <input name="nickName" placeholder="닉네임" onChange={onChange} value={nickName} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {name} ({nickName})</b>
            </div>
        </div>
    )
}

export default InputSample;