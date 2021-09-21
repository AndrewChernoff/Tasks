import { useState } from "react";
import s from './InputForName.module.css'

const InputForName = () => {
    let [value, setValue] = useState('')

    let onValueChange = (e) => {
        setValue(e.currentTarget.value)
        console.log(value)
    }
    return (
        <div className={s.inputBlock}>
            <div className="vasya" style={{ border: '1px solid grey' }} >
                <label htmlFor="name">Enter your name: </label>
                <input type="text" id="name" value={value} onChange={onValueChange} />
            </div>
            <p>Hello friend. I'm glad you're here)</p>
        </div>
    )
}

export default InputForName;