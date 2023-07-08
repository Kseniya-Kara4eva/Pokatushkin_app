import {useState, useId} from "react";

const InputComponent = ({
        type = "text",
        label = "label",
        placeholder = "Type something",
        onChange = Function,
        key
    }) => {

    const [value, setValue] = useState();

    function emit(val) {
        setValue(val);
        onChange(val);
    }

    return (
        <>
            <label htmlFor={ key }>{label}</label>
            <input
                type={ type }
                value={value}
                onChange={(e) => emit(e.target.value)}
                id={ key }
                placeholder={placeholder}
            />
        </>
    )
}

export default InputComponent;