import React from 'react'

function Text(props) {
    let htmlFor = props.htmlFor
    let label = props.label
    let type = "text"
    let placeholder = props.placeholder
    let id = props.id
    let name = props.name
    let onChangeHandler = props.onChange
    let value = props.formData
    
    return (
        <div>
            <div>
                <label htmlFor={htmlFor}>{label}</label>
            </div>
            
            <input type={type}
                placeholder={placeholder}
                id={id}
                name={name}
                onChange={onChangeHandler}
                value={value}
            />
        </div>
    )
}

export default Text